# 💾 Render Disk einrichten - Datenbank bleibt erhalten!

## 🎯 Problem gelöst:
Deine `db.json` wird jetzt auf Render Disk gespeichert und bleibt auch nach Neustarts erhalten!

## 📋 Was du machen musst:

### Schritt 1: Code auf GitHub pushen
1. Öffne **GitHub Desktop**
2. Du siehst die Änderungen an `index.js`
3. Unten links: `Render Disk Support hinzugefügt`
4. Klicke auf **"Commit to main"**
5. Klicke auf **"Push origin"**

### Schritt 2: Render Disk auf Render.com hinzufügen

1. Gehe zu [render.com](https://render.com)
2. Klicke auf deinen **discord-bot** Service
3. Gehe zum Tab **"Disk"** (links)
4. Klicke auf **"Create Disk"**
5. Gib ein:
   - **Name:** `bot-data`
   - **Size:** `1 GB` (reicht völlig)
   - **Mount Path:** `/opt/render/project/src/.data`
6. Klicke auf **"Create Disk"**

### Schritt 3: Service neu deployen
1. Gehe zum Tab **"Settings"**
2. Scrolle runter zu **"Manual Deploy"**
3. Klicke auf **"Deploy latest commit"**
4. Warte 2-3 Minuten

### Schritt 4: Neu setup machen
1. Gehe zu deinem Discord Server
2. Tippe: `!reset`
3. Dann: `!setup`
4. Füge deine Clans/Spieler wieder hinzu

✅ **FERTIG!** Jetzt bleiben alle Daten erhalten, auch nach Neustarts!

---

## 🔍 Wie prüfen ob es funktioniert?

1. Füge einen Clan/Spieler hinzu
2. Gehe auf Render → Deinen Service → **"Settings"** → **"Restart"**
3. Warte bis der Bot wieder online ist
4. Prüfe: Die Daten sollten noch da sein! ✅

---

## ⚠️ WICHTIG:

- Die Datenbank wird jetzt auf Render Disk gespeichert
- Sie bleibt auch nach Neustarts erhalten
- Du musst nur EINMAL `!setup` machen, dann funktioniert es dauerhaft!

---

**Falls etwas nicht funktioniert:**
- Prüfe die Logs auf Render
- Stelle sicher, dass der Mount Path genau `/opt/render/project/src/.data` ist
- Prüfe, ob der Disk erstellt wurde (Tab "Disk")

