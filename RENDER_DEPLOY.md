# 🚀 Bot auf Render.com deployen - Schritt für Schritt

## ✅ Voraussetzungen (du hast schon):
- ✅ GitHub Account
- ✅ GitHub App installiert
- ✅ Code auf GitHub hochgeladen

## 📋 Jetzt auf Render.com deployen:

### Schritt 1: Render.com Account erstellen
1. Gehe zu [render.com](https://render.com)
2. Klicke auf **"Get Started for Free"**
3. Melde dich mit deinem **GitHub Account** an (wichtig: derselbe Account wie dein Bot-Repo!)

### Schritt 2: Neuen Service erstellen
1. Im Render Dashboard klicke auf **"New +"**
2. Wähle **"Background Worker"** (NICHT Web Service!)
   - ⚠️ **WICHTIG:** Background Worker läuft 24/7, Web Service schläft nach 15 Min ein!

### Schritt 3: GitHub Repository verbinden
1. Render fragt nach deinem Repository
2. Wähle dein **DiscordBot** Repository aus
3. Falls es nicht erscheint, klicke auf **"Configure account"** und verbinde GitHub erneut

### Schritt 4: Service konfigurieren
**Einstellungen:**
- **Name:** `discord-bot` (oder wie du willst)
- **Region:** `Frankfurt` (oder näher zu dir)
- **Branch:** `main` (oder `master`, je nach deinem Repo)
- **Root Directory:** (leer lassen)
- **Runtime:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `node index.js`

### Schritt 5: Environment Variable hinzufügen
1. Scrolle nach unten zu **"Environment Variables"**
2. Klicke auf **"Add Environment Variable"**
3. Füge hinzu:
   - **Key:** `DISCORD_TOKEN`
   - **Value:** Dein Discord Bot Token (aus der .env Datei)
4. Klicke auf **"Save Changes"**

### Schritt 6: Deployen!
1. Klicke auf **"Create Background Worker"**
2. Render startet jetzt automatisch den Build
3. Warte 2-3 Minuten, bis der Bot deployed ist
4. Prüfe die Logs: Klicke auf deinen Service → **"Logs"** Tab
5. Du solltest sehen: `Eingeloggt als [Bot-Name]!`

## ✅ Fertig! 🎉

Dein Bot läuft jetzt **24/7** auf Render.com!

### Wichtige Infos:
- ✅ Bot läuft dauerhaft (auch wenn du PC ausmachst)
- ✅ Automatisches Re-Deploy bei GitHub Push
- ✅ Kostenlos im Free Plan
- ✅ Logs sind jederzeit einsehbar

### Code aktualisieren?
1. Änderungen auf GitHub pushen
2. Render deployt automatisch neu (ca. 2-3 Min)

### Bot geht offline?
- Prüfe die Logs auf Render
- Stelle sicher, dass `DISCORD_TOKEN` korrekt gesetzt ist
- Prüfe, ob `MESSAGE CONTENT INTENT` im Discord Portal aktiviert ist

---

**Tipp:** Nutze die `render.yaml` Datei im Repo für noch einfacheres Deployment! 🚀

