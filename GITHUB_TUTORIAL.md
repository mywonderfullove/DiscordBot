# 📤 Code auf GitHub hochladen - Schritt für Schritt

## Schritt 1: GitHub Account erstellen (falls noch nicht vorhanden)

1. Gehe zu [github.com](https://github.com)
2. Klicke oben rechts auf **"Sign up"**
3. Gib deine Daten ein (Email, Passwort, Username)
4. Bestätige deine Email

---

## Schritt 2: GitHub Desktop installieren

1. Gehe zu [desktop.github.com](https://desktop.github.com)
2. Klicke auf **"Download for Windows"**
3. Installiere die Datei
4. Logge dich mit deinem GitHub Account ein

---

## Schritt 3: Repository auf GitHub erstellen

1. Gehe zu [github.com](https://github.com) und logge dich ein
2. Klicke oben rechts auf dein Profilbild → **"Your repositories"**
3. Klicke auf den grünen Button **"New"** (oder **"Create repository"**)
4. **Repository Name:** `discord-bot` (oder wie du willst)
5. **Description:** (optional) "Minecraft FFA Discord Bot"
6. Wähle **"Public"** (wichtig! Sonst kostet es bei Render)
7. **NICHT** "Add a README file" ankreuzen
8. Klicke auf **"Create repository"**

---

## Schritt 4: Code mit GitHub Desktop hochladen

1. Öffne **GitHub Desktop**
2. Klicke auf **"File"** → **"Add Local Repository"**
3. Klicke auf **"Choose..."**
4. Navigiere zu: `C:\Users\mvp\Desktop\Discord Bot`
5. Klicke auf **"Select Folder"**
6. Falls es fragt "This directory does not appear to be a Git repository":
   - Klicke auf **"create a repository"**
   - **Name:** `discord-bot`
   - **Local Path:** sollte schon `C:\Users\mvp\Desktop\Discord Bot` sein
   - Klicke auf **"Create Repository"**

7. Jetzt siehst du alle deine Dateien auf der linken Seite
8. **WICHTIG:** Unten links siehst du "Summary" - schreibe dort: `Initial commit`
9. Klicke auf **"Commit to main"** (unten links)
10. Klicke oben auf **"Publish repository"**
11. **Name:** `discord-bot` (oder wie dein GitHub Repo heißt)
12. **WICHTIG:** Stelle sicher, dass **"Keep this code private"** NICHT angekreuzt ist!
13. Klicke auf **"Publish Repository"**

---

## Schritt 5: Fertig! ✅

Dein Code ist jetzt auf GitHub!

**Nächster Schritt:** Gehe zu [render.com](https://render.com) und folge dem Tutorial in `HOSTING_TUTORIAL.md` ab Schritt 4.

---

## Was wird hochgeladen?

✅ `index.js` - Dein Bot-Code
✅ `package.json` - Dependencies
✅ `.gitignore` - Ignoriert sensible Dateien
✅ `README.md` - Dokumentation
✅ `HOSTING_TUTORIAL.md` - Tutorial

❌ `node_modules/` - Wird NICHT hochgeladen (zu groß)
❌ `.env` - Wird NICHT hochgeladen (enthält Token - sicher!)
❌ `db.json` - Wird NICHT hochgeladen (lokale Daten)
❌ `start.bat` - Wird NICHT hochgeladen (nur für Windows)

---

## Falls du Probleme hast:

**"Repository already exists"**
- Lösche das Repository auf GitHub und versuche es nochmal

**"Nothing to commit"**
- Stelle sicher, dass du die Dateien im linken Panel siehst
- Falls nicht, klicke auf "Show in Explorer" und prüfe, ob die Dateien da sind

**"Authentication failed"**
- Logge dich in GitHub Desktop aus und wieder ein

---

**Tipp:** Nach dem ersten Upload musst du bei Änderungen nur noch:
1. Änderungen machen
2. In GitHub Desktop: "Summary" schreiben → "Commit to main"
3. "Push origin" klicken

Das war's! 🚀

