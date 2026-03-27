
import type { colors, sizes } from "../../theme/tokens";

  
export type Size = keyof typeof sizes;  
export type Color = keyof typeof colors;  
  
export type Variant = 'solid' | 'outline' | 'ghost';  
  
export interface ButtonProps {  
  size?: Size;  
  color?: Color;  
  variant?: Variant;  
  disabled?: boolean;  
  children: React.ReactNode;  
  onClick?: () => void;  
}