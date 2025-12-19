const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, ActivityType } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Nur einmal den Pfad für die Datenbank definieren
const RENDER_DISK_PATH = '/opt/render/project/src/.data';
const DB_PATH = process.env.RENDER_DISK_PATH 
    ? path.join(process.env.RENDER_DISK_PATH, 'db.json')
    : fs.existsSync(RENDER_DISK_PATH)
    ? path.join(RENDER_DISK_PATH, 'db.json')
    : path.join(__dirname, 'db.json');

// Hilfsfunktionen für DB - Pro Server (Guild) Basis
function readDB() {
    try {
        // Stelle sicher, dass das Verzeichnis existiert
        const dbDir = path.dirname(DB_PATH);
        if (!fs.existsSync(dbDir)) {
            fs.mkdirSync(dbDir, { recursive: true });
        }
        
        // Prüfe, ob die Datei existiert
        if (!fs.existsSync(DB_PATH)) {
            // Datei existiert nicht - erstelle leere DB
            return { guilds: {} };
        }
        
        const data = fs.readFileSync(DB_PATH, 'utf8');
        const parsed = JSON.parse(data);
        
        // Migration: Alte Struktur zu neuer pro-Guild Struktur
        if (parsed.clans || parsed.players || parsed.embeds) {
            parsed.guilds = parsed.guilds || {};
        }
        
        if (!parsed.guilds) parsed.guilds = {};
        return parsed;
    } catch (err) {
        console.error("Fehler beim Lesen der DB:", err);
        return { guilds: {} };
    }
}

function writeDB(data) {
    try {
        // Stelle sicher, dass das Verzeichnis existiert
        const dbDir = path.dirname(DB_PATH);
        if (!fs.existsSync(dbDir)) {
            fs.mkdirSync(dbDir, { recursive: true });
        }
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
        return true;
    } catch (err) {
        console.error("Fehler beim Schreiben der DB:", err);
        return false;
    }
}

// Holt die Daten für einen spezifischen Server
function getGuildData(guildId) {
    const db = readDB();
    if (!db.guilds[guildId]) {
        db.guilds[guildId] = { clans: [], players: [], embeds: [] };
    }
    return db.guilds[guildId];
}

// Speichert die Daten für einen spezifischen Server
function saveGuildData(guildId, guildData) {
    const db = readDB();
    db.guilds[guildId] = guildData;
    writeDB(db);
}

// Helper: Escaped Unterstriche, damit sie nicht als Markdown interpretiert werden
function escapeUnderscores(text) {
    return text.replace(/_/g, '\\_');
}

function getDKEmbed(guildData) {
    const clanList = guildData.clans.length > 0 
        ? guildData.clans.map(c => `• ${escapeUnderscores(c)}`).join('\n') 
        : '> *Keine Clans eingetragen*';

    const playerList = guildData.players.length > 0 
        ? guildData.players.map(p => `• ${escapeUnderscores(p)}`).join('\n') 
        : '> *Keine Spieler eingetragen*';

    const description = `
# ⚔️ \u2000 DK - LIST \u2000 ⚔️

## 🛡️ CLANS
${clanList}

\u200b
## 👤 SPIELER
${playerList}
    `;

    return new EmbedBuilder()
        .setColor(0xFF0000)
        .setDescription(description)
        .setFooter({ text: 'vx' })
        .setTimestamp();
}

// Helper zum Löschen von Nachrichten nach Zeit
function deleteMsgAfter(msg, seconds) {
    setTimeout(() => {
        msg.delete().catch(e => console.log("Konnte Nachricht nicht löschen (vlt schon weg):", e.message));
    }, seconds * 1000);
}

// Helper zum Aktualisieren ALLER Embeds für einen Server
async function updateAllEmbeds(guildId, guildData) {
    if (!guildData.embeds || guildData.embeds.length === 0) return false;

    let updatedCount = 0;
    const activeEmbeds = [];

    for (const embedInfo of guildData.embeds) {
        try {
            const channel = await client.channels.fetch(embedInfo.channelId);
            if (channel) {
                const message = await channel.messages.fetch(embedInfo.messageId);
                if (message) {
                    await message.edit({ embeds: [getDKEmbed(guildData)] });
                    activeEmbeds.push(embedInfo); 
                    updatedCount++;
                    continue;
                }
            }
        } catch (e) {
            console.log(`Embed in ${embedInfo.channelId} konnte nicht aktualisiert werden (gelöscht?):`, e.message);
        }
    }

    if (activeEmbeds.length !== guildData.embeds.length) {
        guildData.embeds = activeEmbeds;
        saveGuildData(guildId, guildData);
    }

    return updatedCount > 0;
}

// Funktion um ein neues Embed zu registrieren
async function registerNewEmbed(message, guildId, guildData) {
    const sentMsg = await message.channel.send({ embeds: [getDKEmbed(guildData)] });
    
    guildData.embeds = [{
        channelId: message.channel.id,
        messageId: sentMsg.id
    }];
    saveGuildData(guildId, guildData);
    
    return sentMsg;
}

// Funktion zum Speichern der Nachrichten des Bots
async function saveMyMessages() {
    try {
        const channel = await client.channels.fetch('1445798394730778767'); // Beispiel-Channel-ID
        if (!channel) {
            console.error('Kanal nicht gefunden!');
            return;
        }

        const messages = await channel.messages.fetch({ limit: 100 });
        const myMessages = messages
            .filter(msg => msg.author.id === client.user.id) // Nur Nachrichten des Bots
            .sort((a, b) => a.createdTimestamp - b.createdTimestamp);

        if (myMessages.size === 0) {
            console.log('Keine Nachrichten des Bots gefunden!');
            return;
        }

        let content = `📋 Gespeicherte Nachrichten von ${client.user.tag}\n`;
        content += `📅 Erstellt am: ${new Date().toLocaleString('de-DE')}\n`;
        content += `💬 Kanal: #${channel.name}\n`;
        content += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

        myMessages.forEach(msg => {
            const time = msg.createdAt.toLocaleString('de-DE');
            content += `[${time}] ${msg.content || '(Anhang/Embed)'}\n`;
            if (msg.attachments.size > 0) {
                content += `  📎 ${msg.attachments.size} Anhang(e)\n`;
            }
        });

        const fileName = `nachrichten_${channel.id}_${Date.now()}.txt`;
        const filePath = path.join(__dirname, fileName);
        fs.writeFileSync(filePath, content, 'utf8');

        console.log(`✅ **${myMessages.size} Nachrichten gespeichert!**`);
        fs.unlinkSync(filePath);
    } catch (err) {
        console.error('Fehler beim Speichern der Nachrichten:', err);
    }
}

client.once('ready', () => {
    console.log(`Eingeloggt als ${client.user.tag}!`);
    console.log('Bot ist bereit.');

    // Status setzen: Hört zu "demon"
    client.user.setActivity('demon', { type: ActivityType.Listening });
});

// Beim Beenden des Bots (z.B. mit Ctrl+C) die Nachrichten speichern
process.on('SIGINT', async () => {
    console.log('Bot wird gestoppt...');
    await saveMyMessages();  // Speichern der Nachrichten
    process.exit(0);  // Erfolgreiches Beenden des Prozesses
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith('!')) return;

    if (!message.guild) return;

    // --- ADMIN CHECK ---
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        return;
    }

    const args = message.content.slice(1).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    const guildId = message.guild.id;
    const guildData = getGuildData(guildId);

    // SETUP Command: Legt den aktuellen Kanal als "Embed-Kanal" fest
    if (command === 'setup') {
        // Lösche Setup Command vom User
        message.delete().catch(() => {});

        // Prüfen, ob bereits ein Embed existiert (nur für DIESEN Server!)
        if (guildData.embeds && guildData.embeds.length > 0) {
            try {
                const oldEmbed = guildData.embeds[0];
                const channel = await client.channels.fetch(oldEmbed.channelId);
                if (channel) {
                    const msg = await channel.messages.fetch(oldEmbed.messageId);
                    if (msg) {
                        // Es existiert noch ein aktives Embed!
                        const reply = await message.channel.send(`❌ **Es gibt bereits eine DK-Liste in <#${oldEmbed.channelId}>!**\nBitte lösche die alte Liste manuell oder nutze \`!reset\`, wenn sie weg ist.`);
                        deleteMsgAfter(reply, 8);
                        return;
                    }
                }
            } catch (e) {
                // Altes Embed nicht gefunden -> wir erlauben ein neues!
            }
        }

        await registerNewEmbed(message, guildId, guildData);
        return;
    }

    // RESET Command (versteckt), falls man die Liste doch mal woanders haben will und die DB "klemmt"
    if (command === 'reset') {
        message.delete().catch(() => {});
        guildData.embeds = [];
        saveGuildData(guildId, guildData);
        const reply = await message.channel.send("✅ Speicher zurückgesetzt. Du kannst nun mit `!setup` eine neue Liste erstellen.");
        deleteMsgAfter(reply, 5);
        return;
    }

    // CLEAR Command - Löscht alle Clans und Spieler
    if (command === 'clear') {
        message.delete().catch(() => {});

        guildData.clans = [];
        guildData.players = [];
        saveGuildData(guildId, guildData);

        // Embeds aktualisieren
        await updateAllEmbeds(guildId, guildData);

        const reply = await message.channel.send("🗑️ **DK-Liste wurde komplett geleert.**");
        deleteMsgAfter(reply, 3);
        return;
    }

    // REFRESH Command
    if (command === 'refresh') {
        message.delete().catch(() => {});
        const success = await updateAllEmbeds(guildId, guildData);

        let text = success 
            ? "✅ Liste wurde aktualisiert." 
            : "⚠️ Keine aktive Liste gefunden. Nutze `!setup`.";

        const reply = await message.channel.send(text);
        deleteMsgAfter(reply, 3);
        return;
    }

    // COMMANDS Übersicht
    if (command === 'commands' || command === 'help') {
        message.delete().catch(() => {});

        const helpEmbed = new EmbedBuilder()
            .setTitle('🤖 Bot Commands')
            .setColor(0x0099FF)
            .setDescription(`
**DK-Liste Verwaltung:**
\`!clan add [Name]\` - Clan hinzufügen
\`!clan remove [Name]\` - Clan entfernen
\`!player add [Name]\` - Spieler hinzufügen
\`!player remove [Name]\` - Spieler entfernen
\`!clear\` - Löscht die komplette DK-Liste (alle Clans & Spieler)

**System (Admin Only):**
\`!setup\` - Erstellt die DK-Liste in diesem Kanal (nur 1x möglich)
\`!refresh\` - Aktualisiert die Liste manuell
\`!reset\` - Falls die Liste gelöscht wurde: Setzt den Speicher zurück
`)
            .setFooter({ text: 'vx' });

        await message.channel.send({ embeds: [helpEmbed] });
        return;
    }

    // Commands: !clan add ..., !clan remove ..., !player add ..., !player remove ...
    if (command === 'clan' || command === 'player') {
        message.delete().catch(() => {});

        if (args.length < 2) {
            const reply = await message.channel.send(`❌ Nutzung: !${command} add/remove [Name]`);
            deleteMsgAfter(reply, 5);
            return;
        }

        const action = args[0].toLowerCase();
        const name = args.slice(1).join(' ');
        let changed = false;
        let replyText = "";

        if (command === 'clan') {
            if (action === 'add') {
                const exists = guildData.clans.some(c => c.toLowerCase() === name.toLowerCase());
                if (!exists) {
                    guildData.clans.push(name);
                    changed = true;
                    replyText = `✅ Clan **${name}** hinzugefügt.`;
                } else {
                    const originalName = guildData.clans.find(c => c.toLowerCase() === name.toLowerCase());
                    replyText = `⚠️ Clan **${originalName}** ist bereits auf der Liste.`;
                }
            } else if (action === 'remove') {
                const index = guildData.clans.findIndex(c => c.toLowerCase() === name.toLowerCase());
                if (index !== -1) {
                    const originalName = guildData.clans[index];
                    guildData.clans.splice(index, 1);
                    changed = true;
                    replyText = `🗑️ Clan **${originalName}** entfernt.`;
                } else {
                    replyText = `⚠️ Clan **${name}** nicht gefunden.`;
                }
            }
        } else if (command === 'player') {
            if (action === 'add') {
                const exists = guildData.players.some(p => p.toLowerCase() === name.toLowerCase());
                if (!exists) {
                    guildData.players.push(name);
                    changed = true;
                    replyText = `✅ Spieler **${name}** hinzugefügt.`;
                } else {
                    const originalName = guildData.players.find(p => p.toLowerCase() === name.toLowerCase());
                    replyText = `⚠️ Spieler **${originalName}** ist bereits auf der Liste.`;
                }
            } else if (action === 'remove') {
                const index = guildData.players.findIndex(p => p.toLowerCase() === name.toLowerCase());
                if (index !== -1) {
                    const originalName = guildData.players[index];
                    guildData.players.splice(index, 1);
                    changed = true;
                    replyText = `🗑️ Spieler **${originalName}** entfernt.`;
                } else {
                    replyText = `⚠️ Spieler **${name}** nicht gefunden.`;
                }
            }
        }

        if (changed) {
            saveGuildData(guildId, guildData);
            await updateAllEmbeds(guildId, guildData);
        }

        if (replyText) {
            const reply = await message.channel.send(replyText);
            deleteMsgAfter(reply, 3);
        }
    }
});

// Debug: Check Token
if (!process.env.DISCORD_TOKEN) {
    console.error("FEHLER: Kein DISCORD_TOKEN in der .env Datei gefunden!");
    console.log("Bitte stelle sicher, dass die .env Datei korrekt erstellt wurde.");
} else {
    client.login(process.env.DISCORD_TOKEN);
}
