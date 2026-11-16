import { Building2, Laptop, Car, Wrench, Users, Package } from 'lucide-react';

// Alle sechs Geschäftsbereiche. Neue Leistungen = neuen Eintrag ergänzen.
// Inhalte beschreiben ausschließlich die im Briefing genannten Leistungen.
export const services = [
  {
    slug: 'gebaeudemanagement',
    path: '/gebaeudemanagement',
    navLabel: 'Gebäudemanagement',
    title: 'Gebäudemanagement',
    icon: Building2,
    cardText:
      'Professionelle Reinigung und Pflege von Büros, Gebäuden und gewerblichen Objekten.',
    intro:
      'Im Bereich Gebäudemanagement bietet Glanz24 GmbH Reinigungsleistungen für Büros, Gebäude und geeignete gewerbliche Räumlichkeiten an.',
    paragraphs: [
      'Saubere, gepflegte Räume prägen den Eindruck, den Mitarbeitende, Kunden und Besucher von einem Unternehmen gewinnen. Glanz24 GmbH übernimmt Reinigungsleistungen für Büros, Gebäude und geeignete gewerbliche Räumlichkeiten – von der regelmäßigen Unterhaltsreinigung bis zur gründlichen Grundreinigung.',
      'Ob einzelne Leistungen wie die Glas- und Fensterreinigung oder mehrere Leistungen im Zusammenspiel: Schildern Sie uns Ihren Bedarf, wir besprechen mit Ihnen die passenden Reinigungsleistungen.',
    ],
    note:
      'Unser Angebot konzentriert sich auf Büros, Gebäude und geeignete gewerbliche Räumlichkeiten.',
    inquiry: [
      'Art des Objekts (z. B. Büro, Gebäude, gewerbliche Räume)',
      'Gewünschte Reinigungsleistung(en)',
      'Gewünschter Turnus (einmalig oder regelmäßig)',
      'Standort des Objekts',
    ],
    items: [
      ['Büroreinigung', 'Reinigung von Büroräumen, Arbeitsplätzen, Besprechungsräumen und Gemeinschaftsflächen für ein gepflegtes Arbeitsumfeld.'],
      ['Gebäudereinigung', 'Reinigung von Gebäuden und ihren Räumlichkeiten für ein sauberes Gesamtbild im Innenbereich.'],
      ['Glasreinigung', 'Reinigung von Glasflächen wie Glastüren, Trennwänden und Verglasungen in und an Gebäuden.'],
      ['Fensterreinigung', 'Reinigung von Fenstern und Fensterrahmen für klare Sicht und ein gepflegtes Erscheinungsbild.'],
      ['Fassadenreinigung', 'Reinigung von Gebäudefassaden zur Pflege des äußeren Erscheinungsbildes.'],
      ['Grundreinigung', 'Gründliche, intensive Reinigung von Räumen und Flächen, beispielsweise vor dem Bezug von Räumlichkeiten.'],
      ['Unterhaltsreinigung', 'Regelmäßige Reinigung in vereinbarten Abständen, um ein dauerhaft sauberes Umfeld zu erhalten.'],
      ['Treppenhausreinigung', 'Reinigung von Treppenhäusern, Stufen, Geländern und Zugangsbereichen.'],
      ['Bodenreinigung', 'Reinigung und Pflege von Bodenflächen in Büros, Fluren und Gebäuden.'],
      ['Sanitärreinigung', 'Hygienische Reinigung von Sanitärbereichen wie WC- und Waschräumen.'],
      ['Allgemeine gewerbliche Reinigung', 'Allgemeine Reinigungsleistungen für geeignete gewerbliche Räumlichkeiten.'],
    ],
  },
  {
    slug: 'it-services',
    path: '/it-services',
    navLabel: 'IT Services',
    title: 'IT Services',
    icon: Laptop,
    cardText:
      'Moderne IT-Lösungen, Webentwicklung, SAP-Beratung und digitaler Support.',
    intro:
      'Glanz24 GmbH unterstützt Unternehmen mit IT Services rund um Software, Web und SAP.',
    paragraphs: [
      'Digitale Prozesse und ein funktionierender Web-Auftritt sind für Unternehmen heute selbstverständlich. Glanz24 GmbH unterstützt Sie bei Softwaremanagement, Webentwicklung und Webanwendungen sowie bei Beratung, Services und Support im SAP-Umfeld.',
      'Von der Entwicklung einer Website über deren laufende Wartung bis zu digitalen Lösungen für Ihre Abläufe: Schildern Sie uns Ihr Vorhaben, wir besprechen mit Ihnen die passende Umsetzung.',
    ],
    inquiry: [
      'Ihr Vorhaben (z. B. neue Website, Webanwendung oder SAP-Thema)',
      'Bestehende Systeme oder Websites, falls vorhanden',
      'Gewünschter Zeitrahmen',
      'Ansprechpartner in Ihrem Unternehmen',
    ],
    items: [
      ['Softwaremanagement', 'Verwaltung, Organisation und Betreuung von Software in Ihrem Unternehmen.'],
      ['Webentwicklung', 'Konzeption und Entwicklung von Websites passend zu Ihrem Unternehmen.'],
      ['Web Applications / Webanwendungen', 'Entwicklung webbasierter Anwendungen, die direkt im Browser genutzt werden können.'],
      ['Website-Wartung und Support', 'Laufende Pflege, Aktualisierung und Unterstützung für bestehende Websites.'],
      ['SAP-Beratung', 'Beratung rund um SAP-Themen in Ihrem Unternehmen.'],
      ['SAP Services und Support', 'Services und Support im SAP-Umfeld.'],
      ['Digitale Lösungen', 'Digitale Lösungen, die Abläufe in Ihrem Unternehmen unterstützen.'],
    ],
  },
  {
    slug: 'automobile',
    path: '/automobile',
    navLabel: 'Automobile',
    title: 'Automobileinkauf & -verkauf',
    icon: Car,
    cardText:
      'Ankauf, Verkauf und Vermittlung von Fahrzeugen sowie Gebrauchtwagenhandel.',
    intro: 'Glanz24 GmbH ist im Ein- und Verkauf von Fahrzeugen tätig.',
    paragraphs: [
      'Glanz24 GmbH ist im Handel mit Fahrzeugen tätig: Wir kaufen und verkaufen Automobile und handeln mit Gebrauchtwagen. Je nach Anliegen vermitteln wir außerdem Fahrzeuge.',
      'Sie möchten ein Fahrzeug verkaufen oder suchen ein bestimmtes Fahrzeug? Schreiben Sie uns, wir melden uns bei Ihnen.',
    ],
    inquiry: [
      'Marke, Modell und Baujahr des Fahrzeugs',
      'Ob Sie kaufen, verkaufen oder vermitteln möchten',
      'Ihre Kontaktdaten für Rückfragen',
    ],
    items: [
      ['Automobileinkauf', 'Ankauf von Fahrzeugen.'],
      ['Autoverkauf', 'Verkauf von Fahrzeugen.'],
      ['Gebrauchtwagenhandel', 'Handel mit gebrauchten Fahrzeugen.'],
      ['Fahrzeugvermittlung', 'Vermittlung von Fahrzeugen, sofern im Einzelfall zutreffend.'],
    ],
  },
  {
    slug: 'unfallfahrzeuge',
    path: '/unfallfahrzeuge',
    navLabel: 'Unfallfahrzeuge',
    title: 'Unfallfahrzeuge & Reparatur',
    icon: Wrench,
    cardText:
      'Reparatur, Instandsetzung und Reparaturvermittlung von Unfallfahrzeugen.',
    intro:
      'Glanz24 GmbH kümmert sich um die Reparatur und Instandsetzung von Unfallfahrzeugen.',
    paragraphs: [
      'Nach einem Unfall stellt sich die Frage, wie das Fahrzeug wieder instand gesetzt werden kann. Glanz24 GmbH kümmert sich um die Reparatur und die Instandsetzung von Unfallfahrzeugen.',
      'Zusätzlich vermitteln wir Reparaturen, sofern dies im Einzelfall zutrifft. Beschreiben Sie uns den Schaden, wir besprechen mit Ihnen das weitere Vorgehen.',
    ],
    inquiry: [
      'Fahrzeug (Marke, Modell, Baujahr)',
      'Kurze Beschreibung des Schadens',
      'Fotos des Schadens, falls vorhanden (gern per E-Mail)',
    ],
    items: [
      ['Reparatur von Unfallfahrzeugen', 'Reparatur von Fahrzeugen, die bei einem Unfall beschädigt wurden.'],
      ['Instandsetzung von Unfallfahrzeugen', 'Instandsetzung unfallbeschädigter Fahrzeuge.'],
      ['Reparaturvermittlung', 'Vermittlung von Reparaturleistungen, sofern im Einzelfall zutreffend.'],
    ],
  },
  {
    slug: 'personalvermittlung',
    path: '/personalvermittlung',
    navLabel: 'Personalvermittlung',
    title: 'Personalvermittlung',
    icon: Users,
    cardText:
      'Internationale Personalvermittlung und Rekrutierung qualifizierter Fachkräfte.',
    intro:
      'Glanz24 GmbH unterstützt Unternehmen bei der Personalvermittlung und der Rekrutierung, auch international.',
    paragraphs: [
      'Unternehmen suchen Personal und Fachkräfte – oft auch über Ländergrenzen hinaus. Glanz24 GmbH unterstützt Sie bei der Personalvermittlung und Personalbeschaffung und vermittelt internationale Fachkräfte an Unternehmen.',
      'Mit internationaler Rekrutierung (Worldwide Recruitment) erweitern Sie den Kreis möglicher Bewerberinnen und Bewerber. Teilen Sie uns Ihren Personalbedarf mit, wir besprechen mit Ihnen das weitere Vorgehen.',
    ],
    inquiry: [
      'Gesuchte Position bzw. Tätigkeit',
      'Anzahl der benötigten Mitarbeitenden',
      'Gewünschter Einsatzort und Zeitraum',
      'Anforderungen an die Fachkräfte',
    ],
    items: [
      ['Internationale Personalvermittlung', 'Vermittlung von Personal auf internationaler Ebene.'],
      ['Personalbeschaffung', 'Unterstützung bei der Beschaffung von Personal für Ihr Unternehmen.'],
      ['Vermittlung internationaler Fachkräfte', 'Vermittlung von Fachkräften aus dem Ausland an Unternehmen.'],
      ['Personalvermittlung für Unternehmen', 'Personalvermittlung, ausgerichtet auf den Bedarf von Unternehmen.'],
      ['Internationale Rekrutierung / Worldwide Recruitment', 'Rekrutierung von Personal weltweit.'],
    ],
  },
  {
    slug: 'import-export',
    path: '/import-export',
    navLabel: 'Import & Export',
    title: 'Import & Export',
    icon: Package,
    cardText:
      'Import, Export und internationaler Handel mit zuverlässigen Prozessen.',
    intro:
      'Glanz24 GmbH ist im Import und Export sowie im internationalen Handel tätig.',
    paragraphs: [
      'Der Handel über Ländergrenzen hinweg erfordert Organisation und Erfahrung im Umgang mit Ein- und Ausfuhr. Glanz24 GmbH ist im Import, im Export und im internationalen Handel tätig und bietet Import- und Exportdienstleistungen an.',
      'Beschreiben Sie uns Ihr Vorhaben, wir besprechen mit Ihnen die nächsten Schritte.',
    ],
    inquiry: [
      'Art der Waren',
      'Herkunfts- bzw. Zielland',
      'Ob Import, Export oder beides',
      'Gewünschter Zeitrahmen',
    ],
    items: [
      ['Import', 'Einfuhr von Waren.'],
      ['Export', 'Ausfuhr von Waren.'],
      ['Internationaler Handel', 'Handel über Ländergrenzen hinweg.'],
      ['Import- und Exportdienstleistungen', 'Dienstleistungen rund um Import und Export.'],
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
