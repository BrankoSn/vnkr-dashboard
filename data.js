// VNKR dashboard: all data lives here. Only edit this file.
// status: "in_progress" | "todo" | "feedback" | "done"
// phase (0-4): Pre-production, Shoot, Edit, Feedback, Delivery
// backup: "ok" | "not" (only on the drive) | "newer" (newer version on the drive, not on the server)
// SAMPLE DATA for the mockup.

// Pages from before the animation update reload themselves to get the new code
if (!window.dashboardUpdate) location.reload();

window.DASHBOARD = {
  "updated": { "at": "2026-10-22T14:32", "by": "Branko" },
  "current": "conveo-v4",
  "projects": [
    {
      "id": "conveo-v5", "client": "Conveo", "title": "Video 5",
      "status": "in_progress", "phase": 2, "deadline": "2026-10-26",
      "editDays": 6, "drive": "T7", "backup": "ok",
      "tasks": [
        { "text": "Rough cut", "done": true },
        { "text": "Pick music", "done": true },
        { "text": "Intro motion graphics", "done": true },
        { "text": "Colour grade", "done": true },
        { "text": "Subtitles", "done": true },
        { "text": "Export V1", "done": false }
      ]
    },
    {
      "id": "sara-sainte", "client": "Sara Sainte", "title": "Brand video · V2",
      "status": "in_progress", "phase": 3, "version": "V2", "deadline": "2026-10-30",
      "editDays": 5, "drive": "T7", "backup": "newer",
      "tasks": [
        { "text": "Add subtitles", "done": true },
        { "text": "Audio mix", "done": true },
        { "text": "Process V1 feedback", "done": false },
        { "text": "Export V2", "done": false },
        { "text": "Send V2 to Sara Sainte", "done": false }
      ]
    },
    {
      "id": "conveo-v4", "client": "Conveo", "title": "Video 4 · V2",
      "status": "feedback", "phase": 3, "version": "V2", "sent": "2026-10-22", "deadline": "2026-10-29",
      "editDays": 5, "drive": "Server", "backup": "ok",
      "tasks": [
        { "text": "Feedback V1 received", "done": true },
        { "text": "Process feedback", "done": true },
        { "text": "Export V2", "done": true },
        { "text": "Send V2 to Conveo", "done": true }
      ]
    },
    {
      "id": "gimv-2026", "client": "Gimv", "title": "Annual results",
      "status": "todo", "phase": 0, "deadline": "2026-11-14",
      "editDays": 2, "drive": "T9", "backup": "ok",
      "tasks": [
        { "text": "Receive artboards", "done": true },
        { "text": "Animatic", "done": false },
        { "text": "Logo outro", "done": false }
      ]
    }
  ],
  "calendar": [
    { "date": "2026-10-23", "time": "09:00", "type": "shoot", "title": "Sara Sainte shoot", "place": "Ghent" },
    { "date": "2026-10-26", "type": "deadline", "title": "Conveo Video 5 · V1" },
    { "date": "2026-10-27", "time": "14:00", "type": "call", "title": "Gimv briefing" },
    { "date": "2026-10-28", "time": "08:30", "type": "shoot", "title": "Conveo office shoot", "place": "Antwerp" },
    { "date": "2026-10-30", "type": "deadline", "title": "Sara Sainte · delivery" }
  ],
  "spare": [
    { "text": "Cut reels from Conveo footage", "done": false },
    { "text": "Clean up T9 archive", "done": false },
    { "text": "Update VNKR showreel", "done": false },
    { "text": "Test new LUT", "done": true }
  ],
  "drives": [
    { "name": "T7", "status": "warn", "text": "Sara Sainte: newer version not on server" },
    { "name": "T9", "status": "ok", "text": "All backed up" },
    { "name": "Server", "status": "ok", "text": "1.2 TB free" }
  ],
  "stats": { "deliveredThisMonth": 8 }
};
