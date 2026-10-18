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
    subtitle: 'Gigantopithecus y la fragilidad de lo colosal',
    category: 'EVOLUCIÓN / EXTINCIÓN',
    status: 'concepto',
    art: 'giant',
    teaser:
      'En algún momento, los bosques de Asia perdieron a uno de los primates más extraordinarios que han existido. Quedaron dientes, mandíbulas y una pregunta enorme: ¿cómo se extingue un gigante?',
    question:
      '¿Qué nos puede decir un puñado de fósiles sobre la vida, la dieta y la desaparición de un primate gigantesco al que nadie vio vivir?',
    whyItMatters:
      'Porque la historia de Gigantopithecus no trata solo sobre tamaño. Trata sobre especialización, cambio ambiental y la vulnerabilidad de organismos que parecían imposibles de desaparecer.',
    logline:
      'Un expediente científico que sigue la pista del primate gigante que no sobrevivió al cambio.',
    tags: ['Paleoantropología', 'Extinción', 'Primates', 'Historia natural'],
  },
  {
    slug: 'adn-evidencia',
    number: '002',
    title: 'El ADN no sabe que es evidencia',
    subtitle: 'Leer historia en moléculas que nunca pretendieron contarla',
    category: 'GENÓMICA / HISTORIA',
    status: 'concepto',
    art: 'dna',
    teaser:
      'Un genoma no conserva la memoria de quienes lo portaron. Nosotros hacemos preguntas; la molécula apenas sobrevive. Lo asombroso es que eso suele bastar.',
    question:
      '¿Cómo convertimos secuencias degradadas y fragmentarias en inferencias sobre migraciones, parentesco e historia evolutiva?',
    whyItMatters:
      'Porque la biología molecular se ha convertido en una forma de arqueología. Leer ADN es leer procesos que jamás fueron escritos para nosotros.',
    logline:
      'Una historia sobre moléculas, ruinas biológicas y el extraño acto de reconstruir pasado con materia que se está deshaciendo.',
    tags: ['ADN antiguo', 'Genómica', 'Evolución humana', 'Método científico'],
  },
  {
    slug: 'extincion-silenciosa',
    number: '003',
    title: 'La extinción no siempre hace ruido',
    subtitle: 'Sobre finales lentos, ausencias y señales que llegan tarde',
    category: 'ECOLOGÍA / HISTORIA NATURAL',
    status: 'concepto',
    art: 'forest',
    teaser:
      'Algunas especies desaparecen sin una catástrofe cinematográfica. Sin explosiones. Sin un momento claro en que alguien diga: esto fue el final.',
    question:
      '¿Cómo identificamos una desaparición cuando el proceso es lento, parcial y disperso en el tiempo y el espacio?',
    whyItMatters:
      'Porque gran parte de la crisis de biodiversidad contemporánea avanza así: como una suma de silencios, retrasos y registros incompletos.',
    logline:
      'Una exploración sobre ausencias discretas y el problema de reconocer el final cuando nadie lo anuncia.',
    tags: ['Ecología', 'Biodiversidad', 'Conservación', 'Extinción'],
  },
];

export const storyAssets = [
  {
    type: 'Escrito maestro',
    state: 'Base de investigación',
    description: 'El texto fuente donde viven la bibliografía, el argumento y la voz principal de la historia.',
    note: 'El archivo central del proyecto.',
    icon: '✦',
  },
  {
    type: 'Editorial',
    state: 'Tesis y postura',
    description: 'Una pieza breve para defender la idea más incómoda o sugerente que surge de la investigación.',
    note: 'No resume: discute.',
    icon: '↗',
  },
  {
    type: 'Podcast',
    state: 'Guion de audio',
    description: 'La historia traducida a voz, ritmo, silencios y escucha sostenida.',
    note: 'Una investigación que se oye.',
    icon: '◉',
  },
  {
    type: 'Documental',
    state: 'Tratamiento visual',
    description: 'La misma pregunta expandida a imagen, secuencias, mapas, atmósferas y evidencia visual.',
    note: 'La historia cuando pide cámara.',
    icon: '▣',
  },
  {
    type: 'Posts',
    state: 'Piezas satélite',
    description: 'Fragmentos breves para encender curiosidad y devolver al archivo principal.',
    note: 'La pregunta repartida en pequeñas dosis.',
    icon: '✳',
  },
  {
    type: 'Educación',
    state: 'Aplicación didáctica',
    description: 'Actividades, talleres o clases que convierten la historia en una herramienta de aprendizaje.',
    note: 'Ideas que se ponen a prueba.',
    icon: '⌁',
  },
];
