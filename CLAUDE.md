# VNKR dashboard

**Doel:** tv-dashboard op kantoor (1920×1080) met: Nu bezig (groot), open projecten met belangrijke taken, kleine kalender (shoots/deadlines), lijstje "als er tijd over is", schijven/backup-status en editing-dagen per project.

**Status:** mockup met voorbeelddata (okt 2026). Nog niet op GitHub, nog geen Raspberry Pi.

**Opbouw:**
- `dashboard.html`: de weergave (leest `data.js`, herlaadt elke 60 s).
- `data.js`: alle gegevens (`window.DASHBOARD = {...}`). Enkel dit bestand aanpassen om status/taken te wijzigen.

**Plan:**
- Privé GitHub-repo als bron; Branko en zijn baas (eigen Claude) passen `data.js` aan door het tegen hun AI te zeggen.
- Raspberry Pi achter de tv: `git pull` elke minuut (cron, read-only deploy key), Chromium in kiosk-modus. Geen AI nodig op de Pi.
- Skill voor de baas (dashboard uitleggen + data aanpassen) en `/dagafsluiting` voor Branko (backup-status, +1 editing-dag, Nu bezig voor morgen).

**Afspraken:**
- Geen automatische schijf-checks: Branko meldt op het einde van de dag zelf wat gebackupt is.
- Geen teller bij "wacht op feedback" (sommige klanten doen er een maand over), alleen verzenddatum.
- Geen facturen op het dashboard.
