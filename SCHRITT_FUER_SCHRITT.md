# 🚀 EINFACHE ANLEITUNG - Bot auf Render.com

## 📌 SCHRITT 1: Token aus GitHub entfernen

**Was ist passiert?** Dein Bot-Token war in den Dateien auf GitHub sichtbar. Das ist gefährlich!

**Was musst du tun?**
1. Öffne **GitHub Desktop**
2. Du siehst links "Changes" - da stehen geänderte Dateien
3. Unten links gib ein: `Token entfernt`
4. Klicke auf **"Commit to main"**
5. Klicke oben rechts auf **"Push origin"**

✅ **Fertig!** Der Token ist jetzt aus GitHub entfernt.

---

## 🔑 SCHRITT 2: Neuen Bot-Token holen

**Was ist ein Token?** Das ist wie ein Passwort für deinen Bot. Der alte ist kaputt, du brauchst einen neuen.

**Was musst du tun?**
1. Öffne diesen Link: https://discord.com/developers/applications/1445785811932020849/bot
2. Scrolle runter zu **"Token"** (steht links)
3. Klicke auf **"Reset Token"**
4. Klicke auf **"Yes, do it!"**
5. **WICHTIG:** Kopiere den Token sofort! (Er wird nur EINMAL angezeigt!)
6. Speichere ihn irgendwo (z.B. Notepad)

✅ **Fertig!** Du hast jetzt einen neuen Token.

---

## 💾 SCHRITT 3: Token lokal speichern

**Was musst du tun?**
1. Gehe zu: `C:\Users\mvp\Desktop\DiscordBot`
2. Öffne die Datei `.env` (mit Notepad)
3. Sie sollte so aussehen:
   ```
   DISCORD_TOKEN=ALTER_TOKEN_HIER
   ```
4. Ersetze `ALTER_TOKEN_HIER` mit deinem NEUEN Token
5. Speichere die Datei

✅ **Fertig!** Dein Bot kann jetzt lokal laufen.

---

## 🌐 SCHRITT 4: Auf Render.com deployen (24/7)

**Was ist Render.com?** Ein Server, der deinen Bot 24/7 laufen lässt.

**Was musst du tun?**

### 4.1 Account erstellen
1. Gehe zu: https://render.com
2. Klicke auf **"Get Started for Free"**
3. Klicke auf **"Sign in with GitHub"**
4. Erlaube Render, auf dein GitHub zuzugreifen

### 4.2 Bot deployen
1. Klicke oben rechts auf **"New +"**
2. Klicke auf **"Background Worker"** (NICHT Web Service!)
3. Unter "Connect a repository" wähle: **"DiscordBot"**
4. Fülle aus:
   - **Name:** `discord-bot`
   - **Region:** `Frankfurt`
   - **Branch:** `main`
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
5. Scrolle runter zu **"Environment Variables"**
6. Klicke auf **"Add Environment Variable"**
7. Gib ein:
   - **Key:** `DISCORD_TOKEN`
   - **Value:** Dein NEUER Token (den du in Schritt 2 geholt hast)
8. Klicke auf **"Create Background Worker"**

### 4.3 Warten und prüfen
1. Warte 2-3 Minuten
2. Klicke auf deinen Service → **"Logs"** Tab
3. Du solltest sehen: `Eingeloggt als [Bot-Name]!`

✅ **FERTIG!** Dein Bot läuft jetzt 24/7! 🎉

---

## ❓ Was wenn etwas nicht funktioniert?

**Bot startet nicht?**
- Prüfe die Logs auf Render
- Stelle sicher, dass der Token richtig eingegeben wurde (keine Leerzeichen!)

**Bot geht offline?**
- Render Free Plan: Bot läuft dauerhaft (kein Problem)
- Prüfe die Logs, ob es Fehler gibt

**Code ändern?**
- Änderungen in GitHub Desktop committen und pushen
- Render deployt automatisch neu (2-3 Min)

---

**Das war's! Einfach Schritt für Schritt durchgehen!** 🚀

