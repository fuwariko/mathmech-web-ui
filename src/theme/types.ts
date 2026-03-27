import { sizes, colors } from './tokens';  
  
export type Size = keyof typeof sizes;   // "sm" | "md" | "lg"  
export type Color = keyof typeof colors; // "primary" | "secondary"