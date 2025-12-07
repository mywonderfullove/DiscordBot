# Discord Bot Invite-Link

## Schnellstart

1. **Gehe zum Discord Developer Portal**: https://discord.com/developers/applications
2. **Wähle deine Bot-Anwendung** aus
3. **Kopiere die Client ID** (unter "General Information" → "Application ID")
4. **Ersetze `DEINE_CLIENT_ID`** im Link unten mit deiner Client ID

## Invite-Link (mit allen benötigten Berechtigungen)

```
https://discord.com/api/oauth2/authorize?client_id=DEINE_CLIENT_ID&permissions=90624&scope=bot%20applications.commands
```

## Berechtigungen im Detail

Der Bot benötigt folgende Berechtigungen:
- ✅ **Nachrichten senden** (Send Messages)
- ✅ **Nachrichten verwalten** (Manage Messages) - zum Löschen von Befehlen
- ✅ **Nachrichtenverlauf lesen** (Read Message History)
- ✅ **Links einbetten** (Embed Links) - für die DK-Liste

**Berechtigungsnummer:** `90624`

## Alternative: Link mit weniger Berechtigungen

Falls du nur die minimalen Berechtigungen möchtest:

```
https://discord.com/api/oauth2/authorize?client_id=DEINE_CLIENT_ID&permissions=2048&scope=bot
```

Dieser Link gibt dem Bot nur die Berechtigung zum Senden von Nachrichten. Die anderen Funktionen (Löschen, Embeds) funktionieren dann möglicherweise nicht vollständig.

## WICHTIG: Message Content Intent aktivieren!

Bevor du den Bot einlädst, stelle sicher, dass im Discord Developer Portal unter:
**Bot** → **Privileged Gateway Intents** → **MESSAGE CONTENT INTENT** ✅ aktiviert ist!

Ohne diesen Intent kann der Bot keine Nachrichteninhalte lesen und reagiert nicht auf deine `!`-Befehle.

