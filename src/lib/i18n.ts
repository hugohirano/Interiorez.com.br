import type { Lang, Sector } from './projects';

export const SOCIAL = {
  instagram: 'https://www.instagram.com/interiorez.arch',
  direct: 'https://ig.me/m/interiorez.arch',
  linkedin: 'https://www.linkedin.com/in/andrezza-de-deus-120a42102/',
};

const B = import.meta.env.BASE_URL.replace(/\/$/, '');
export const base = B;

const route = {
  home: { pt: `${B}/`, en: `${B}/en/` },
  portfolio: { pt: `${B}/portfolio/`, en: `${B}/en/portfolio/` },
  blog: { pt: `${B}/blog/`, en: `${B}/en/blog/` },
  contact: { pt: `${B}/contato/`, en: `${B}/en/contact/` },
};
export type Route = keyof typeof route;
export const href = (name: Route, lang: Lang) => route[name][lang];
export const alternates = (name: Route) => route[name];
export const projectHref = (slug: string, lang: Lang) => `${route.portfolio[lang]}${slug}/`;
export const articleHref = (slug: string, lang: Lang) => `${route.blog[lang]}${slug}/`;

export const navItems = (lang: Lang) => [
  { name: 'portfolio', label: ui[lang].nav.portfolio, href: route.portfolio[lang] },
  { name: 'about', label: ui[lang].nav.about, href: `${route.home[lang]}#sobre` },
  { name: 'blog', label: ui[lang].nav.blog, href: route.blog[lang] },
  { name: 'contact', label: ui[lang].nav.contact, href: route.contact[lang] },
];

export const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en' };
export const sectorName: Record<Sector, Record<Lang, string>> = {
  residencial: { pt: 'Residencial', en: 'Residential' },
  comercial: { pt: 'Comercial', en: 'Commercial' },
  corporativo: { pt: 'Corporativo', en: 'Corporate' },
};

export const ui = {
  pt: {
    tagline: 'Interior Architecture Atelier',
    nav: { portfolio: 'Projetos', about: 'Sobre', blog: 'Artigos', contact: 'Contato' },
    skip: 'Pular para o conteúdo',
    start: 'Iniciar conversa',
    switchLang: 'Read in English',
    switchShort: 'EN',
    proposal: 'Proposta de projeto',
    viewProject: 'Ver o projeto',
    allProjects: 'Ver todos os projetos',
    all: 'Todos',
    sector: 'Setor',
    place: 'Local',
    next: 'Próximo',
    back: 'Todos os projetos',
    readArticle: 'Ler artigo',
    allArticles: 'Ver todos os artigos',
    minutes: 'min de leitura',
    draft: 'Rascunho para revisão',
    footer: 'Arquitetura & Interiores. Projetos residenciais, comerciais e corporativos.',
    notFound: 'Página não encontrada.',
    notFoundBody: 'A página que você procura não existe ou mudou de lugar.',
    notFoundLink: 'Voltar ao início',
    form: {
      name: 'Seu nome',
      type: 'Tipo de projeto',
      city: 'Cidade do projeto',
      optional: 'opcional',
      message: 'Conte sobre o projeto',
      messageHint: 'O que você quer construir ou transformar, e em que momento está.',
      submit: 'Copiar mensagem e abrir o Direct',
      needName: 'Escreva seu nome para continuar.',
      needMessage: 'Conte um pouco sobre o projeto para continuar.',
      copied: 'Mensagem copiada. Cole no Direct que acabou de abrir.',
      notCopied: 'Não foi possível copiar automaticamente. Selecione o texto abaixo e cole no Direct.',
      greeting: 'Olá, Andreza! Meu nome é',
      projectType: 'Tipo de projeto',
      cityLine: 'Cidade',
    },
  },
  en: {
    tagline: 'Interior Architecture Atelier',
    nav: { portfolio: 'Projects', about: 'About', blog: 'Articles', contact: 'Contact' },
    skip: 'Skip to content',
    start: 'Start a conversation',
    switchLang: 'Ler em português',
    switchShort: 'PT',
    proposal: 'Project proposal',
    viewProject: 'View the project',
    allProjects: 'See all projects',
    all: 'All',
    sector: 'Sector',
    place: 'Location',
    next: 'Next',
    back: 'All projects',
    readArticle: 'Read article',
    allArticles: 'See all articles',
    minutes: 'min read',
    draft: 'Draft for review',
    footer: 'Architecture & Interiors. Residential, commercial and corporate projects.',
    notFound: 'Page not found.',
    notFoundBody: 'The page you are looking for does not exist or has moved.',
    notFoundLink: 'Back to the start',
    form: {
      name: 'Your name',
      type: 'Project type',
      city: 'Project city',
      optional: 'optional',
      message: 'Tell us about the project',
      messageHint: 'What you want to build or transform, and where you are in the process.',
      submit: 'Copy message and open Instagram',
      needName: 'Enter your name to continue.',
      needMessage: 'Tell us a little about the project to continue.',
      copied: 'Message copied. Paste it into the Instagram chat that just opened.',
      notCopied: 'We could not copy it automatically. Select the text below and paste it into the chat.',
      greeting: 'Hello, Andreza! My name is',
      projectType: 'Project type',
      cityLine: 'City',
    },
  },
} as const;
