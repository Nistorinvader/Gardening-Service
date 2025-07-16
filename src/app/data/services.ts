export interface SubService {
  title: string;
}

export interface Service {
  slug: string;
  title: string;
  mainDescription: string;
  heroImage: string;
  subServices: SubService[];
  galleryImage: string;
  galleryVideos: string[];
  poster: string[];
}

export const servicesData: Service[] = [
  {
    slug: 'gartenpflege',
    title: 'Gartenpflege & Landschaftsbau',
    mainDescription: 'Wir verwandeln Ihren Garten in eine grüne Oase der Erholung. Von der regelmäßigen Rasenpflege über den präzisen Heckenschnitt bis hin zur Neupflanzung – wir sorgen für ein gesundes und ästhetisch ansprechendes Gesamtbild Ihres Grundstücks.',
    heroImage: '/Images/Services/service1.svg',
    subServices: [
      { title: 'Verlegung von Rollrasen'},
      { title: 'Rasenmähen und Pflege'},
      { title: 'Pflanzung von Hecken, Sträuchern und Bäumen'},
      { title: 'Baumfällung und Wurzelentfernung'},
      { title: 'Baumschnitt und Heckenschnitt'},
      { title: 'Gestaltung von Beeten mit Rindenmulch oder Zierkies'},
      { title: 'Installation von Bewässerungssystemen'},
    ],
    galleryImage: '/Images/img15.jpg',
    galleryVideos: ['/Videos/video5.mp4', '/Videos/video6.mp4'],
    poster: ['/Images/poster5.svg', '/Images/poster6.svg'],
  },
  {
    slug: 'pflaster',
    title: 'Pflaster- & Stein­arbeiten',
    mainDescription: 'Wir schaffen hochwertige Wege, Terrassen und Einfahrten durch professionelle Pflaster- und Steinarbeiten. Ein fachmännisch verlegter Belag ist nicht nur langlebig und funktional, sondern prägt auch maßgeblich den Charakter Ihres Anwesens.',
    heroImage: '/Images/Services/service2.svg',
    subServices: [
      { title: 'Verlegen von Pflastersteinen und Terrassenplatten'},
      { title: 'Terrassenbau (Stein, Holz, WPC)'},
      { title: 'Einfassungen für Beete und Wege setzen'},
      { title: 'Bau von Stützmauern und dekorativen Abgrenzungen'},
      { title: 'Vorbereitung und Nivellierung des Untergrunds'},
    ],
    galleryImage: '/Images/img1.jpg',
    galleryVideos: ['/Videos/video2.mp4', '/Videos/video7.mp4'],
    poster: ['/Images/poster2.svg', '/Images/poster7.svg'],
  },
  {
    slug: 'weitere-dienstleistungen',
    title: 'Weitere Dienstleistungen',
    mainDescription: 'Über unsere Kernbereiche hinaus bieten wir eine Vielzahl weiterer Dienstleistungen an, um Ihr Gartenprojekt abzurunden. Von der Zaunmontage über Drainagesysteme bis hin zum Abtransport von Bauschutt – wir sind Ihr zuverlässiger Partner für alle anfallenden Arbeiten.',
    heroImage: '/Images/Services/service3.svg',
    subServices: [
      { title: 'Montage von Zäunen und Sichtschutz'},
      { title: 'Rückbau und Entfernung alter Beläge und Strukturen'},
      { title: 'Lieferung und Verteilung von Mutterboden'},
      { title: 'Verlegen von Vlies, Einbau von Schotter und Drainagen'},
      { title: 'Abtransport von überschüssigem Erdmaterial und Bauschutt'},
      { title: 'Hilfsarbeiten und individuelle Leistungen nach Absprache'},
    ],
    galleryImage: '/Images/img10.jpg',
    galleryVideos: ['/Videos/video4.mp4', '/Videos/video8.mp4'],
    poster: ['/Images/poster4.svg', '/Images/poster8.svg'],
  },
  {
    slug: 'baggerarbeiten',
    title: 'Baggerarbeiten',
    mainDescription: 'Mit unserem modernen Maschinenpark führen wir Erdarbeiten jeder Art zuverlässig und präzise durch. Ob Aushub von Gräben für Fundamente, Geländemodellierung oder die Bodenvorbereitung – unsere Baggerarbeiten schaffen die perfekte Grundlage für Ihr Projekt.',
    heroImage: '/Images/Services/service4.svg',
    subServices: [
      { title: 'Erdarbeiten jeder Art'},
      { title: 'Aushub von Gruben und Gräben (für Fundamente, Leitungen, Drainage)'},
      { title: 'Bodenvorbereitung für Bau oder Gartengestaltung'},
      { title: 'Modellierung und Planierung von Gelände'},
      { title: 'Verladen und Transportieren von Erde, Steinen und Materialien'},
      { title: 'Abtragen von Grasnarbe und Oberboden'},
      { title: 'Vertiefung und Nivellierung von Baugruben'},
    ],
    galleryImage: '/Images/img11.jpg',
    galleryVideos: ['/Videos/video9.mp4', '/Videos/video10.mp4'],
    poster: ['/Images/poster9.svg', '/Images/poster10.svg'],
  },
];