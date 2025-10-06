// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// URL Shortener Types
export interface ShortUrlRequest {
  originalUrl: string;
}

export interface UrlPresenter {
  originalUrl: string;
  shortUrl: string;
  alias: string;
  domain: string;
  clicks: number;
}

// Click Counter Types (using UrlPresenter)
export interface ClickStatsRequest {
  shortUrl: string;
}

// Unshorten URL Types (using UrlPresenter)
export interface UnshortenUrlRequest {
  shortUrl: string;
}

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: "text" | "url" | "email" | "password";
  placeholder?: string;
  required?: boolean;
  validation?: {
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    custom?: (value: string) => string | boolean;
  };
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

// Loading States
export interface LoadingState {
  isLoading: boolean;
  error?: AppError;
}

// Theme Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  neutral: string;
  background: string;
  surface: string;
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface InputProps extends BaseComponentProps {
  type?: "text" | "url" | "email" | "password";
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}
