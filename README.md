# Minecraft FFA Discord Bot

Dieser Bot verwaltet eine "DK-Liste" (Gegnerliste) für Clans und Spieler.

## Installation

1. **Node.js installieren**: Stelle sicher, dass Node.js installiert ist.
2. **Abhängigkeiten installieren**:
   ```bash
   npm install
   ```
3. **Konfiguration**:
   Erstelle eine Datei namens `.env` im gleichen Ordner und füge deinen Bot-Token ein:
   ```env
   DISCORD_TOKEN=DEIN_BOT_TOKEN_HIER
   ```
   **WICHTIG:** Hole dir den Token aus dem [Discord Developer Portal](https://discord.com/developers/applications)!

## WICHTIG: Message Content Intent

Damit der Bot auf Befehle mit `!` reagieren kann, musst du im [Discord Developer Portal](https://discord.com/developers/applications) unter deinem Bot -> **Bot** -> **Privileged Gateway Intents** den Haken bei **MESSAGE CONTENT INTENT** setzen!

## Starten

Starte den Bot mit:
```bash
node index.js
```

## Befehle

Der Bot nutzt nun Prefix-Commands (`!`).

- `!dk` oder `!list` - Zeigt die aktuelle Liste an.
- `!clan add [Name]` - Fügt einen Clan hinzu.
- `!clan remove [Name]` - Entfernt einen Clan.
- `!player add [Name]` - Fügt einen Spieler hinzu.
- `!player remove [Name]` - Entfernt einen Spieler.

Sobald du jemanden hinzufügst oder entfernst, sendet der Bot automatisch die aktualisierte Liste.
