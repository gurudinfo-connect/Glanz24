# Glanz24 GmbH – One-Page-Website

React + Vite + Lucide React. Deutsch, statisch (keine Animationen). Alles auf einer Seite,
Navigation über Anker (#start, #ueber-uns, #leistungen, #gebaeudemanagement … #kontakt).

## Start

```bash
npm install
npm run dev      # Entwicklung
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal ansehen
```

Da es nur eine Seite gibt, ist kein Server-Routing nötig (kein SPA-Fallback).

## Aufbau der Seite

Header (Logo, Navigation mit Dropdown „Unsere Leistungen“, Telefon) → Hero → Einleitung →
Leistungs-Kacheln → sechs Detailabschnitte → Über uns → Kontakt → Impressum →
Datenschutzerklärung → Footer.

## Bilder

Standardmäßig werden Vektor-Illustrationen verwendet (`src/components/Illustration.jsx`).
Echte Fotos in `src/assets/images/` (jpg, png, webp) ersetzen sie automatisch:
`hero`, `gebaeudemanagement`, `it-services`, `automobile`, `unfallfahrzeuge`,
`personalvermittlung`, `import-export`.

## Logo

`src/components/Logo.jsx` enthält eine Wortmarke als Platzhalter. Ein Original-Logo
aus `src/assets/logo/` dort einsetzen.

## Kontaktformular

Ohne Konfiguration öffnet das Formular das E-Mail-Programm mit einer vorausgefüllten
Nachricht an die Firmen-E-Mail. Für Versand ohne E-Mail-Programm: `.env.example` nach
`.env` kopieren und `VITE_CONTACT_ENDPOINT` auf einen freigegebenen Formular-Endpunkt setzen.

## Inhalte pflegen

- Firmendaten: `src/data/company.js`
- Leistungen (neuer Bereich = neuer Eintrag, erscheint automatisch in Nav, Kacheln, Abschnitt, Footer): `src/data/services.js`
  (für die Illustration zusätzlich eine Szene in `Illustration.jsx` ergänzen)

## Rechtliches

Impressum und Datenschutzerklärung enthalten nur die vorliegenden Angaben (Firmenname, Adresse,
Telefon, E-Mail). Weitere Pflichtangaben können bei Bedarf in `src/pages/Home.jsx` ergänzt
und rechtlich geprüft werden.
