export type Story = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  status: 'concepto' | 'publicado';
  art: 'giant' | 'dna' | 'forest';
  teaser: string;
  question: string;
  whyItMatters: string;
  logline: string;
  tags: string[];
};

export const stories: Story[] = [
  {
    slug: 'gigantopithecus',
    number: '001',
    title: 'El gigante que desapareció',
    subtitle: 'Gigantopithecus y el límite del cambio',
    category: 'EVOLUCIÓN / EXTINCIÓN',
    status: 'concepto',
    art: 'giant',
    teaser: 'Dientes, mandíbulas y una pregunta: ¿cómo desaparece un gigante?',
    question: '¿Qué revelan unos pocos fósiles sobre la vida y extinción de Gigantopithecus?',
    whyItMatters: 'Porque esta historia habla de tamaño, especialización y vulnerabilidad.',
    logline: 'Un expediente sobre el gran simio que no sobrevivió al cambio.',
    tags: ['Paleoantropología', 'Extinción', 'Primates', 'Historia natural'],
  },
  {
    slug: 'adn-evidencia',
    number: '002',
    title: 'El ADN no sabe que es evidencia',
    subtitle: 'Historia escrita en moléculas',
    category: 'GENÓMICA / HISTORIA',
    status: 'concepto',
    art: 'dna',
    teaser: 'Leemos pasado en moléculas que solo intentaban persistir.',
    question: '¿Cómo convertimos fragmentos de ADN en historia evolutiva?',
    whyItMatters: 'Porque la genómica se ha vuelto una forma de arqueología.',
    logline: 'Moléculas, tiempo y el problema de reconstruir el pasado.',
    tags: ['ADN antiguo', 'Genómica', 'Evolución humana', 'Método científico'],
  },
  {
    slug: 'extincion-silenciosa',
    number: '003',
    title: 'La extinción no siempre hace ruido',
    subtitle: 'Finales lentos y señales tardías',
    category: 'ECOLOGÍA / HISTORIA NATURAL',
    status: 'concepto',
    art: 'forest',
    teaser: 'Muchas especies desaparecen sin un momento claro del final.',
    question: '¿Cómo reconocemos una extinción cuando ocurre poco a poco?',
    whyItMatters: 'Porque así avanza buena parte de la crisis de biodiversidad.',
    logline: 'Una exploración sobre ausencias discretas y finales lentos.',
    tags: ['Ecología', 'Biodiversidad', 'Conservación', 'Extinción'],
  },
];

export const storyAssets = [
  {
    type: 'Escrito maestro',
    state: 'Base',
    description: 'Texto central, fuentes y argumento.',
    note: 'Archivo principal.',
    icon: '✦',
  },
  {
    type: 'Editorial',
    state: 'Postura',
    description: 'Una idea clara nacida de la investigación.',
    note: 'No resume: toma posición.',
    icon: '↗',
  },
  {
    type: 'Podcast',
    state: 'Audio',
    description: 'La historia convertida en voz y ritmo.',
    note: 'Investigación que se escucha.',
    icon: '◉',
  },
  {
    type: 'Documental',
    state: 'Visual',
    description: 'La pregunta llevada a imagen y secuencia.',
    note: 'La historia con cámara.',
    icon: '▣',
  },
  {
    type: 'Posts',
    state: 'Satélite',
    description: 'Piezas breves que regresan al archivo.',
    note: 'Fragmentos útiles.',
    icon: '✳',
  },
  {
    type: 'Educación',
    state: 'Clase',
    description: 'La historia convertida en aprendizaje.',
    note: 'Ideas que se enseñan.',
    icon: '⌁',
  },
];
