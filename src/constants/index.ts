// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.link.marquesdev.com',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
} as const;

// Application Configuration
export const APP_CONFIG = {
  NAME: 'Link Shortener',
  DOMAIN: 'link.marquesdev.com',
  DESCRIPTION: 'Encurte suas URLs de forma rápida e confiável',
  VERSION: '1.0.0',
} as const;

// Navigation Items
export const NAV_ITEMS = [
  {
    id: 'shortener',
    label: 'Encurtador',
    path: '/',
    icon: 'Link',
  },
  {
    id: 'counter',
    label: 'Contador de Cliques',
    path: '/counter',
    icon: 'Analytics',
  },
  {
    id: 'unshorten',
    label: 'Desencurtar URL',
    path: '/unshorten',
    icon: 'UnfoldMore',
  },
] as const;

// Feature Configurations
export const FEATURES = {
  SHORTENER: {
    title: 'Encurtador de URL',
    subtitle: 'Transforme URLs longas em links curtos e fáceis de compartilhar',
    placeholder: 'Cole sua URL aqui...',
    buttonText: 'Encurtar URL',
  },
  COUNTER: {
    title: 'Contador de Cliques',
    subtitle: 'Acompanhe quantas vezes sua URL foi acessada',
    placeholder: 'Cole sua URL encurtada...',
    buttonText: 'Ver Estatísticas',
  },
  UNSHORTEN: {
    title: 'Desencurtar URL',
    subtitle: 'Descubra qual é a URL original por trás do link encurtado',
    placeholder: 'Cole sua URL encurtada...',
    buttonText: 'Desencurtar',
  },
} as const;

// Validation Rules
export const VALIDATION = {
  URL: {
    pattern: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
    message: 'Por favor, insira uma URL válida (ex: https://exemplo.com)',
  },
  SHORT_URL: {
    pattern: /^https?:\/\/[^\/]+\/[a-zA-Z0-9]+$/,
    message: 'Por favor, insira uma URL encurtada válida',
  },
  CUSTOM_ALIAS: {
    pattern: /^[a-zA-Z0-9_-]+$/,
    minLength: 3,
    maxLength: 20,
    message: 'O alias deve conter apenas letras, números, hífens e underscores (3-20 caracteres)',
  },
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Erro de conexão. Verifique sua internet e tente novamente.',
  SERVER_ERROR: 'Erro interno do servidor. Tente novamente em alguns instantes.',
  NOT_FOUND: 'URL não encontrada ou expirada.',
  INVALID_URL: 'URL inválida. Verifique o formato e tente novamente.',
  ALIAS_EXISTS: 'Este alias já está em uso. Escolha outro.',
  GENERIC: 'Algo deu errado. Tente novamente.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  URL_SHORTENED: 'URL encurtada com sucesso!',
  URL_COPIED: 'Link copiado para a área de transferência!',
  STATS_LOADED: 'Estatísticas carregadas com sucesso!',
  URL_UNSHORTENED: 'URL original encontrada!',
} as const;

// Theme Colors
export const THEME_COLORS = {
  PRIMARY: '#27AE60',
  PRIMARY_LIGHT: '#58D68D',
  PRIMARY_DARK: '#1E8449',
  SECONDARY: '#F39C12',
  SECONDARY_LIGHT: '#F7DC6F',
  SECONDARY_DARK: '#D68910',
  NEUTRAL: '#1C1C1C',
  NEUTRAL_LIGHT: '#F7F7F7',
  BACKGROUND: '#FFFFFF',
  SURFACE: '#F7F7F7',
} as const;

// GitHub Repository
export const GITHUB_REPO = {
  URL: 'https://github.com/RodrigoLMarques/url-shortener-web',
  NAME: 'url-shortener-web',
  OWNER: 'marquesdev',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'link-shortener-theme',
  RECENT_URLS: 'link-shortener-recent-urls',
  USER_PREFERENCES: 'link-shortener-preferences',
} as const;

// Query Keys for React Query
export const QUERY_KEYS = {
  SHORTEN_URL: 'shorten-url',
  CLICK_STATS: 'click-stats',
  UNSHORTEN_URL: 'unshorten-url',
} as const;

// Animation Durations
export const ANIMATIONS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;
