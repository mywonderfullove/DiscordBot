# 🚀 Bot 24/7 kostenlos hosten - Tutorial

## Option 1: Render.com (EMPFOHLEN - Einfach & Zuverlässig)

### Schritt 1: Account erstellen
1. Gehe zu [render.com](https://render.com)
2. Klicke auf **"Get Started for Free"**
3. Melde dich mit GitHub an (oder erstelle einen Account)

### Schritt 2: Repository vorbereiten
1. Erstelle einen GitHub Account (falls du noch keinen hast): [github.com](https://github.com)
2. Installiere [GitHub Desktop](https://desktop.github.com) oder nutze Git im Terminal
3. Erstelle ein neues Repository auf GitHub:
   - Klicke auf **"New"** → Name: `discord-bot` → **"Create repository"**

### Schritt 3: Code hochladen
1. Öffne GitHub Desktop
2. Klicke auf **"Add"** → **"Add Existing Repository"**
3. Wähle deinen Bot-Ordner: `C:\Users\mvp\Desktop\Discord Bot`
4. Klicke auf **"Publish repository"** (mache es NICHT privat, sonst kostet es bei Render)

### Schritt 4: Auf Render deployen
1. Gehe zurück zu [render.com](https://render.com)
2. Klicke auf **"New +"** → **"Web Service"**
3. Verbinde dein GitHub Repository
4. Wähle dein `discord-bot` Repository aus
5. **Einstellungen:**
   - **Name:** `discord-bot` (oder wie du willst)
   - **Region:** Frankfurt (oder näher zu dir)
   - **Branch:** `main`
   - **Root Directory:** (leer lassen)
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
6. Klicke auf **"Advanced"** → **"Add Environment Variable"**
   - **Key:** `DISCORD_TOKEN`
   - **Value:** `DEIN_BOT_TOKEN_AUS_DEM_DISCORD_PORTAL`
7. Klicke auf **"Create Web Service"**

### Schritt 5: Fertig! 🎉
- Der Bot startet automatisch
- Er läuft 24/7 (auch wenn du den PC ausmachst)
- Nach 15 Minuten Inaktivität schläft der Service, startet aber automatisch wieder bei der nächsten Anfrage

---

## Option 2: Railway.app (Alternative)

### Schritt 1: Account erstellen
1. Gehe zu [railway.app](https://railway.app)
2. Klicke auf **"Start a New Project"**
3. Melde dich mit GitHub an

### Schritt 2: Projekt erstellen
1. Klicke auf **"New Project"**
2. Wähle **"Deploy from GitHub repo"**
3. Wähle dein `discord-bot` Repository

### Schritt 3: Environment Variables
1. Klicke auf dein Projekt → **"Variables"**
2. Füge hinzu:
   - **Key:** `DISCORD_TOKEN`
   - **Value:** `DEIN_BOT_TOKEN_AUS_DEM_DISCORD_PORTAL`

### Schritt 4: Settings
1. Gehe zu **"Settings"**
2. **Start Command:** `node index.js`
3. **Build Command:** `npm install`

### Fertig! 🎉

---

## WICHTIG: .gitignore erstellen!

Erstelle eine Datei namens `.gitignore` in deinem Bot-Ordner:

```
node_modules/
.env
*.log
```

**Warum?** Damit dein Token nicht auf GitHub hochgeladen wird!

---

## Troubleshooting

### Bot startet nicht?
- Prüfe die Logs auf Render/Railway
- Stelle sicher, dass `DISCORD_TOKEN` gesetzt ist
- Prüfe, ob `MESSAGE CONTENT INTENT` im Discord Portal aktiviert ist

### Bot geht offline?
- Render: Nach 15 Min Inaktivität schläft der Service (startet automatisch wieder)
- Railway: Sollte immer online sein

### Code aktualisieren?
- Änderungen auf GitHub pushen
- Render/Railway deployt automatisch neu

---

## Kosten

**Beide Optionen sind KOSTENLOS für kleine Bots!**
- Render: Kostenloser Plan (mit Einschränkungen)
- Railway: $5 Gratis-Guthaben pro Monat (mehr als genug für einen Bot)

---

**Empfehlung:** Nutze **Render.com** - am einfachsten für Anfänger! 🚀

