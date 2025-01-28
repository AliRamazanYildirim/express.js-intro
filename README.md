# ExpressIntro

Eine einfache Express.js-API, die Zugriff auf Bücher-, Auto- und Benutzerdaten bietet.

## Installation

Um das Projekt lokal einzurichten, folgen Sie diesen Schritten:

```bash
# Repository klonen
git clone git@github.com:AliRamazanYildirim/express.js-intro.git

# In das Projektverzeichnis wechseln
cd expressintro

# Abhängigkeiten installieren
bun install
```

## Verwendung

Starten Sie den Entwicklungsserver mit:

```bash
bun run server
```

Der Server wird auf Port 3000 gestartet. Sie können dann auf die folgenden Endpunkte zugreifen:

### API-Endpunkte

- `GET /books` - Gibt eine Liste aller Bücher zurück
- `GET /cars` - Gibt eine Liste aller Autos zurück
- `GET /users` - Gibt eine Liste aller Benutzer zurück

## Projektstruktur

```
expressintro/
├── main.js          # Hauptanwendungsdatei
├── package.json     # Projekt-Konfiguration und Abhängigkeiten
└── data/           
    ├── booksData.json   # Bücherdaten
    ├── carsData.json    # Autodaten
    └── usersData.json   # Benutzerdaten
```

## Technische Details

- **Node.js & Express**: Das Projekt verwendet Express.js als Web-Framework
- **ES Modules**: Das Projekt verwendet ES Module (`type: "module"` in package.json)
- **Bun**: Als JavaScript-Laufzeitumgebung und Paketmanager
- **Nodemon**: Für automatisches Neuladen während der Entwicklung

## Abhängigkeiten

- Express.js (^4.21.2)
- Nodemon (^3.1.9)

## Entwicklung

Der Server wird mit Nodemon über Bun ausgeführt, was bedeutet, dass er sich bei Änderungen am Code automatisch neu startet.

## Lizenz

Copyright (c) [2025] [Ali Ramazan Yildirim]

Hiermit wird unentgeltlich jeder Person, die eine Kopie der Software und der zugehörigen Dokumentationen (die "Software") erhält, die Erlaubnis erteilt, sie uneingeschränkt zu nutzen, inklusive und ohne Ausnahme mit dem Recht, sie zu verwenden, zu kopieren, zu ändern, zusammenzuführen, zu veröffentlichen, zu verbreiten, zu unterlizenzieren und/oder zu verkaufen, und Personen, denen diese Software überlassen wird, diese Rechte zu verschaffen, unter den folgenden Bedingungen:

Der obige Urheberrechtsvermerk und dieser Erlaubnisvermerk sind in allen Kopien oder Teilkopien der Software beizulegen.

DIE SOFTWARE WIRD OHNE JEDE AUSDRÜCKLICHE ODER IMPLIZIERTE GARANTIE BEREITGESTELLT, EINSCHLIESSLICH DER GARANTIE ZUR BENUTZUNG FÜR DEN VORGESEHENEN ODER EINEM BESTIMMTEN ZWECK SOWIE JEGLICHER RECHTSVERLETZUNG, JEDOCH NICHT DARAUF BESCHRÄNKT. IN KEINEM FALL SIND DIE AUTOREN ODER COPYRIGHTINHABER FÜR JEGLICHEN SCHADEN ODER SONSTIGE ANSPRÜCHE HAFTBAR ZU MACHEN, OB INFOLGE DER ERFÜLLUNG EINES VERTRAGES, EINES DELIKTES ODER ANDERS IM ZUSAMMENHANG MIT DER SOFTWARE ODER SONSTIGER VERWENDUNG DER SOFTWARE ENTSTANDEN.
