export type Lang = 'pt' | 'en';
export type Text = Record<Lang, string>;
export type Sector = 'residencial' | 'comercial' | 'corporativo';

export interface Photo { key: string; alt: Text }
export interface Project {
  slug: string;
  sector: Sector;
  title: Text;
  place?: Text;
  text: Text;
  proposal?: boolean;
  room?: boolean;
  photos: Photo[];
}

export const projects: Project[] = [
  {
    slug: 'fp-house', sector: 'residencial', title: { pt: 'FP House', en: 'FP House' },
    text: {
      pt: 'Tons suaves, luz natural e uma composição minimalista, pensados para trazer conforto e funcionalidade ao dia a dia. Uma casa em que cada espaço se conecta com calma, aconchego e simplicidade.',
      en: 'Soft tones, natural light and a minimalist composition designed to bring comfort and functionality into everyday living. A home where every space connects with calm, warmth and simplicity.',
    },
    photos: [
      { key: 'fp-cozinha', alt: { pt: 'Cozinha em tons claros com ilha curva em pedra natural', en: 'Light-toned kitchen with a curved natural stone island' } },
      { key: 'fp-suite', alt: { pt: 'Suíte principal com cabeceira curva iluminada e cortinas leves', en: 'Principal suite with a lit curved headboard and light curtains' } },
      { key: 'fp-sala', alt: { pt: 'Sala clara com sofá, home office e claraboia', en: 'Bright living area with sofa, home office and skylight' } },
    ],
  },
  {
    slug: 'ap-house', sector: 'residencial', title: { pt: 'AP House', en: 'AP House' },
    text: {
      pt: 'Caixilhos finos, linhas horizontais limpas e uma composição que valoriza a leveza da arquitetura e do entorno. Grandes áreas envidraçadas fortalecem a ligação entre dentro e fora.',
      en: 'Slim frames, clean horizontal lines and a composition that enhances the lightness of the architecture and its surroundings. Large areas of glazing strengthen the connection between inside and outside.',
    },
    photos: [
      { key: 'ap-fachada', alt: { pt: 'Fachada contemporânea de dois pavimentos com grandes panos de vidro', en: 'Two-storey contemporary facade with large glazed areas' } },
      { key: 'ap-office', alt: { pt: 'Home office claro com bancada, cortinas e sofá', en: 'Bright home office with desk, curtains and sofa' } },
    ],
  },
  {
    slug: 'foros-de-salvaterra', sector: 'residencial',
    title: { pt: 'Moradia em Foros de Salvaterra', en: 'House in Foros de Salvaterra' },
    place: { pt: 'Portugal', en: 'Portugal' },
    text: {
      pt: 'Um projeto pensado para aproveitar cada momento ao ar livre, com áreas de convívio integradas, fire pit e churrasqueira que valorizam conforto, lazer e bem-estar.',
      en: 'A project designed to make the most of every moment outdoors, with integrated social areas, a fire pit and a barbecue that bring comfort, leisure and wellbeing.',
    },
    photos: [
      { key: 'foros', alt: { pt: 'Moradia térrea iluminada ao entardecer, com jardim e muro baixo', en: 'Single-storey house lit at dusk, with lawn and low wall' } },
    ],
  },
  {
    slug: 'suite-principal-portugal', sector: 'residencial',
    title: { pt: 'Suíte principal', en: 'Principal suite' }, place: { pt: 'Portugal', en: 'Portugal' },
    text: {
      pt: 'Uma suíte principal contemporânea em Portugal, onde texturas acolhedoras, luz suave e materiais atemporais se unem para criar um espaço sereno e sofisticado.',
      en: 'A contemporary principal suite in Portugal, where warm textures, soft lighting and timeless materials come together to create a serene and sophisticated space.',
    },
    photos: [
      { key: 'suite-pt', alt: { pt: 'Suíte com painéis azul-marinho, manta bordô e madeira escura', en: 'Suite with navy panels, burgundy throw and dark wood' } },
    ],
  },
  {
    slug: 'escritorio-advocacia', sector: 'corporativo', proposal: true,
    title: { pt: 'Escritório de advocacia', en: 'Law office' },
    text: {
      pt: 'Um escritório pensado para transmitir sofisticação, conforto e credibilidade em cada detalhe. Linhas leves, iluminação integrada e uma paleta neutra criam um ambiente elegante e acolhedor para receber clientes.',
      en: 'An office designed to convey sophistication, comfort and credibility in every detail. Light lines, integrated lighting and a neutral palette create an elegant, welcoming setting for receiving clients.',
    },
    photos: [
      { key: 'recepcao', alt: { pt: 'Recepção com balcão mineral, painel de madeira e luz linear no rodapé', en: 'Reception with a mineral desk, timber panel and linear light at floor level' } },
      { key: 'reuniao', alt: { pt: 'Sala de reuniões com mesa clara, cadeiras bordô e parede curva em madeira', en: 'Meeting room with a pale table, burgundy chairs and a curved timber wall' } },
    ],
  },
  {
    slug: 'villa-caffe', sector: 'comercial', title: { pt: 'Villa Caffè & Co.', en: 'Villa Caffè & Co.' },
    place: { pt: 'Itália', en: 'Italy' },
    text: {
      pt: 'Um café pensado para ser um ambiente acolhedor, com detalhes que unem charme mediterrâneo, leveza e conforto em cada espaço.',
      en: 'A café designed as a welcoming place, with details that bring together Mediterranean charm, lightness and comfort in every space.',
    },
    photos: [
      { key: 'villa', alt: { pt: 'Fachada de café com arcos, toldos verdes, oliveiras e vasos de terracota', en: 'Café facade with arches, green awnings, olive trees and terracotta pots' } },
    ],
  },
  {
    slug: 'cafeteria-vilamoura', sector: 'comercial', proposal: true,
    title: { pt: 'Cafeteria em Vilamoura', en: 'Café in Vilamoura' }, place: { pt: 'Algarve, Portugal', en: 'Algarve, Portugal' },
    text: {
      pt: 'Um espaço onde o café encontra a leveza do ambiente de praia, entre materiais naturais, luz suave e muito verde.',
      en: 'A space where coffee meets the lightness of the beach, among natural materials, soft light and plenty of greenery.',
    },
    photos: [
      { key: 'vilamoura', alt: { pt: 'Cafeteria sob arco, com balcão ripado, plantas e luminárias de fibra', en: 'Café beneath an arch, with a ribbed counter, plants and woven pendants' } },
    ],
  },
  {
    slug: 'farmacias-portuguesas', sector: 'comercial',
    title: { pt: 'Farmácias Portuguesas', en: 'Farmácias Portuguesas' },
    text: {
      pt: 'Projeto de farmácia onde design e funcionalidade caminham juntos. A setorização clara dos produtos, aliada à materialidade em madeira e iluminação estratégica, cria um ambiente intuitivo, acolhedor e eficiente para o dia a dia.',
      en: 'A pharmacy project where design and functionality go hand in hand. Clear product zoning, together with timber materiality and strategic lighting, creates an intuitive, welcoming and efficient space for every day.',
    },
    photos: [
      { key: 'farmacia', alt: { pt: 'Farmácia com forro ripado de madeira, prateleiras iluminadas e plantas', en: 'Pharmacy with a timber slatted ceiling, lit shelving and plants' } },
    ],
  },
  {
    slug: 'holmes-place-lisboa', sector: 'comercial', proposal: true,
    title: { pt: 'Holmes Place Lisboa', en: 'Holmes Place Lisbon' }, place: { pt: 'Lisboa, Portugal', en: 'Lisbon, Portugal' },
    text: {
      pt: 'Cycling: um espaço imersivo onde a arquitetura intensifica a experiência, com iluminação linear e paleta escura. Studio de Pilates: um espaço onde a arquitetura acompanha o movimento, com materiais naturais, iluminação suave e uma linguagem minimalista.',
      en: 'Cycling: an immersive space where architecture intensifies the experience, with linear lighting and a dark palette. Pilates studio: a space where architecture follows movement, with natural materials, soft lighting and a minimalist language.',
    },
    photos: [
      { key: 'pilates-1', alt: { pt: 'Studio de pilates com painéis ripados e piso de madeira', en: 'Pilates studio with slatted panels and timber floor' } },
      { key: 'cycling-1', alt: { pt: 'Sala de cycling escura com linhas de luz no teto', en: 'Dark cycling room with lines of light across the ceiling' } },
      { key: 'pilates-2', alt: { pt: 'Studio de pilates com janelas amplas e aparelhos em madeira', en: 'Pilates studio with wide windows and timber equipment' } },
      { key: 'cycling-2', alt: { pt: 'Sala de cycling escura com plataforma iluminada', en: 'Dark cycling room with a lit platform' } },
    ],
  },
  {
    slug: 'lavabo', sector: 'residencial', room: true, title: { pt: 'Lavabo', en: 'Powder room' },
    text: { pt: 'Tons quentes, luz suave. Um espaço pequeno com identidade forte.', en: 'Warm tones, soft light. A small space with a strong identity.' },
    photos: [
      { key: 'lavabo', alt: { pt: 'Lavabo em madeira escura, bancada de pedra verde e espelho orgânico', en: 'Powder room in dark wood with a green stone vanity and organic mirror' } },
    ],
  },
  {
    slug: 'sala-de-vinhos', sector: 'residencial', room: true, title: { pt: 'Sala de vinhos', en: 'Wine room' },
    text: { pt: 'Morar com refinamento. Textura, luz e um espaço feito para aproveitar cada momento.', en: 'Refined living. Texture, lighting and a space made to enjoy every moment.' },
    photos: [{ key: 'adega', alt: { pt: 'Parede de pedra com garrafas, sofá bordô e mesa redonda de pedra', en: 'Stone wall with bottles, burgundy sofa and round stone table' } }],
  },
  {
    slug: 'sala-com-lareira', sector: 'residencial', room: true, title: { pt: 'Sala com lareira', en: 'Living room with fireplace' },
    text: { pt: 'Acolhedor, calmo e elevado. Um espaço pensado para desacelerar e aproveitar.', en: 'Warm, calm and elevated. A space designed to slow down and enjoy.' },
    photos: [{ key: 'lareira', alt: { pt: 'Sala com lareira em pedra escura e paredes de madeira', en: 'Living room with a dark stone fireplace and timber walls' } }],
  },
  {
    slug: 'banho-em-pedra', sector: 'residencial', room: true, title: { pt: 'Banho em pedra natural', en: 'Natural stone bathroom' },
    text: { pt: 'Um equilíbrio de textura, luz e materialidade. Iluminação suave e superfícies em pedra natural moldam um espaço calmo, refinado e luxuoso.', en: 'A balance of texture, light and materiality. Soft illumination and natural stone surfaces shape a calm, refined and luxurious space.' },
    photos: [{ key: 'banho', alt: { pt: 'Banheiro em pedra clara e escura com metais dourados', en: 'Bathroom in pale and dark stone with gold fittings' } }],
  },
  {
    slug: 'area-externa', sector: 'residencial', room: true, title: { pt: 'Área externa com fire pit', en: 'Outdoor fire pit' },
    text: { pt: 'Pôr do sol, fogo e boa companhia. O refúgio perfeito ao ar livre.', en: 'Sunset, fire and good company. The perfect outdoor retreat.' },
    photos: [{ key: 'fogueira', alt: { pt: 'Fire pit de pedra ao pôr do sol diante de uma moradia térrea', en: 'Stone fire pit at sunset in front of a single-storey house' } }],
  },
  {
    slug: 'teen-girly-room', sector: 'residencial', room: true, title: { pt: 'Teen Girly Room', en: 'Teen Girly Room' },
    text: { pt: 'Delicado, acolhedor e cheio de personalidade. Um espaço leve, pensado para o dia a dia e para os pequenos momentos.', en: 'Delicate, welcoming and full of personality. A light space, designed for everyday life and small moments.' },
    photos: [{ key: 'teen', alt: { pt: 'Quarto em tons rosados com cabeceira em arco iluminado', en: 'Rose-toned bedroom with a lit arched headboard' } }],
  },
];

export const project = (slug: string) => {
  const found = projects.find((p) => p.slug === slug);
  if (!found) throw new Error(`Unknown project: ${slug}`);
  return found;
};
