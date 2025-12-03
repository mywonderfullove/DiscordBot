# 📦 Repository auf GitHub hochladen

## Option 1: GitHub Desktop (EMPFOHLEN - Am einfachsten!)

### Schritt 1: GitHub Desktop installieren
1. Lade GitHub Desktop herunter: [desktop.github.com](https://desktop.github.com)
2. Installiere es und melde dich mit deinem GitHub Account an

### Schritt 2: Repository hinzufügen
1. Öffne GitHub Desktop
2. Klicke auf **"File"** → **"Add Local Repository"**
3. Klicke auf **"Choose..."** und wähle deinen Ordner: `C:\Users\mvp\Desktop\DiscordBot`
4. Falls es fragt "This directory does not appear to be a git repository", klicke auf **"create a repository"**
   - Name: `DiscordBot`
   - Description: (optional)
   - ✅ **"Initialize this repository with a README"** NICHT ankreuzen (du hast schon Dateien)
   - Klicke auf **"Create Repository"**

### Schritt 3: Dateien committen
1. Du siehst alle deine Dateien in GitHub Desktop
2. Unten links gib eine Commit-Nachricht ein: `Initial commit`
3. Klicke auf **"Commit to main"**

### Schritt 4: Auf GitHub pushen
1. Klicke auf **"Publish repository"** (oben rechts)
2. ✅ **"Keep this code private"** NICHT ankreuzen (Render.com braucht öffentliches Repo im Free Plan!)
3. Klicke auf **"Publish Repository"**
4. Fertig! 🎉

---

## Option 2: Git im Terminal (Falls Git installiert ist)

### Git installieren:
1. Lade Git herunter: [git-scm.com/download/win](https://git-scm.com/download/win)
2. Installiere es (Standard-Einstellungen sind OK)
3. **WICHTIG:** Starte PowerShell/CMD neu nach Installation!

### Dann diese Befehle ausführen:

```bash
cd C:\Users\mvp\Desktop\DiscordBot
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/DiscordBot.git
git push -u origin main
```

**WICHTIG:** Ersetze `DEIN-USERNAME` mit deinem GitHub Username!

---

## Nach dem Push auf GitHub:

1. Gehe zu [render.com](https://render.com)
2. Folge der Anleitung in `RENDER_DEPLOY.md`
3. Dein Bot läuft dann 24/7! 🚀

