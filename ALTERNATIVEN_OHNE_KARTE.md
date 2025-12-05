# 🆓 Bot hosten OHNE Kreditkarte

## ✅ Option 1: Replit (KEINE KARTE NÖTIG!)

**Vorteile:**
- ✅ Komplett kostenlos
- ✅ Keine Kreditkarte nötig
- ✅ Läuft 24/7 (mit "Always On" - kostenlos für kleine Bots)
- ✅ Sehr einfach zu nutzen

**Nachteile:**
- ⚠️ Bot kann nach 1 Stunde Inaktivität einschlafen (startet aber wieder)

### So geht's:

1. **Account erstellen:**
   - Gehe zu [replit.com](https://replit.com)
   - Klicke auf **"Sign up"** → Mit GitHub anmelden

2. **Neues Repl erstellen:**
   - Klicke auf **"Create Repl"**
   - Wähle **"Import from GitHub"**
   - Gib dein Repository ein: `DEIN-USERNAME/DiscordBot`
   - Klicke auf **"Import"**

3. **Bot starten:**
   - Warte, bis alles geladen ist
   - Klicke auf **"Secrets"** (Schloss-Symbol links)
   - Füge hinzu:
     - **Key:** `DISCORD_TOKEN`
     - **Value:** Dein Bot Token
   - Klicke auf **"Run"** (oben)

4. **24/7 laufen lassen:**
   - Klicke auf **"Always On"** (oben rechts)
   - Bot läuft jetzt dauerhaft!

✅ **FERTIG!** Bot läuft 24/7 ohne Karte!

---

## ✅ Option 2: Fly.io (KEINE KARTE NÖTIG im Free Plan!)

**Vorteile:**
- ✅ Kostenloser Plan ohne Karte
- ✅ Läuft wirklich 24/7
- ✅ Professionell

**Nachteile:**
- ⚠️ Etwas komplizierter einzurichten

### So geht's:

1. **Account erstellen:**
   - Gehe zu [fly.io](https://fly.io)
   - Klicke auf **"Sign Up"** → Mit GitHub anmelden

2. **Fly CLI installieren:**
   - Lade herunter: [fly.io/docs/hands-on/install-flyctl](https://fly.io/docs/hands-on/install-flyctl)
   - Installiere es

3. **Bot deployen:**
   - Öffne PowerShell im DiscordBot Ordner
   - Führe aus:
     ```bash
     fly launch
     ```
   - Folge den Anweisungen
   - Wenn gefragt: `DISCORD_TOKEN` als Secret setzen

✅ **FERTIG!** Bot läuft 24/7!

---

## ✅ Option 3: Render.com (Karte nur zur Verifizierung)

**WICHTIG:** Render verlangt eine Karte, ABER:
- ✅ Es wird **NICHTS abgebucht** im Free Plan
- ✅ Die Karte dient nur zur **Verifizierung**
- ✅ Du kannst sie später wieder entfernen

**Wenn du trotzdem Render nutzen willst:**
- Karte hinzufügen (wird nicht belastet)
- Bot deployen
- Nach erfolgreichem Deploy kannst du die Karte wieder entfernen

---

## 🎯 MEINE EMPFEHLUNG:

**Nutze Replit!** 
- ✅ Am einfachsten
- ✅ Keine Karte nötig
- ✅ Funktioniert sofort
- ✅ Läuft 24/7 mit "Always On"

---

## 📝 Replit - Detaillierte Anleitung:

### Schritt 1: Repl erstellen
1. Gehe zu [replit.com](https://replit.com)
2. Klicke auf **"Create Repl"**
3. Klicke auf **"Import from GitHub"**
4. Gib ein: `DEIN-USERNAME/DiscordBot` (ersetze DEIN-USERNAME!)
5. Klicke auf **"Import"**

### Schritt 2: Secrets setzen
1. Links siehst du ein **Schloss-Symbol** → Klicke drauf
2. Klicke auf **"New secret"**
3. Gib ein:
   - **Key:** `DISCORD_TOKEN`
   - **Value:** Dein Bot Token
4. Klicke auf **"Add secret"**

### Schritt 3: Code anpassen (falls nötig)
- Replit nutzt automatisch die Secrets als Environment Variables
- Dein Code sollte funktionieren!

### Schritt 4: Bot starten
1. Klicke auf **"Run"** (oben)
2. Warte, bis du siehst: `Eingeloggt als [Bot-Name]!`

### Schritt 5: 24/7 laufen lassen
1. Klicke oben rechts auf **"Always On"**
2. ✅ Bot läuft jetzt dauerhaft!

---

**Das war's! Viel einfacher als Render!** 🚀

