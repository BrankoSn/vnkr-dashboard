# VNKR dashboard

**Doel:** tv-dashboard op kantoor (1920×1080) met: Nu bezig (groot), open projecten met belangrijke taken, kleine kalender (shoots/deadlines), lijstje "als er tijd over is", schijven/backup-status en editing-dagen per project.

**Status:** mockup met voorbeelddata (okt 2026), in het Engels. Staat **openbaar** op GitHub: repo `BrankoSn/vnkr-dashboard`, live op https://brankosn.github.io/vnkr-dashboard/ (GitHub Pages, branch main). Tv is (waarschijnlijk) een smart-tv die de link opent; Raspberry Pi is dan niet nodig.

**Skill voor Peter (baas):** `peter-skill/` (niet in git), kopie op `~/Desktop/VNKR-dashboard-Peter/`. Skill + INSTALLATION.md in het Engels (antwoordt in Peters taal); Peter mag alles aanpassen. Peter werkt met eigen GitHub-account als collaborator + Claude Code; skill in `~/.claude/skills/dashboard`. Nog te doen: **maandag 26/10/2026** met Peter zijn GitHub-account aanmaken en hem uitnodigen (rol Write); Branko's eigen skill staat in `~/Documents/Claude/.claude/skills/dashboard` (incl. dagafsluiting en collaborator toevoegen).

**Let op:** de repo en de site zijn openbaar. Klantnamen/taken zijn dus voor iedereen met de link zichtbaar; beslissen voor er echte data in komt.

**Opbouw:**
- `index.html`: de weergave (haalt `data.js` elke 60 s vers op).
- `data.js`: alle gegevens (`window.DASHBOARD = {...}`). Enkel dit bestand aanpassen om status/taken te wijzigen.

**Plan:**
- GitHub-repo als bron; Branko en zijn baas (eigen Claude) passen `data.js` aan door het tegen hun AI te zeggen.
- Weergave: smart-tv opent de Pages-link. Alternatief als het privé moet: Raspberry Pi met `git pull` elke minuut (geen AI nodig).
- Skill voor de baas (dashboard uitleggen + data aanpassen) en `/dagafsluiting` voor Branko (backup-status, +1 editing-dag, Nu bezig voor morgen).

**Afspraken:**
- Geen automatische schijf-checks: Branko meldt op het einde van de dag zelf wat gebackupt is.
- Geen teller bij "wacht op feedback" (sommige klanten doen er een maand over), alleen verzenddatum.
- Geen facturen op het dashboard.
