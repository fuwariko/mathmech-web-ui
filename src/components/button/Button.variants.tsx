
import { colors } from "../../theme/tokens";
import type { Color, Variant } from "./Button.types";

  
type VariantStyles = {  
  background: string;  
  color: string;  
  border?: string;  
};  
  
export const buttonVariants: Record<  
  Variant,  
  (color: Color) => VariantStyles  
> = {  
  solid: (color) => ({  
    background: colors[color],  
    color: '#fff',  
  }),  
  
  outline: (color) => ({  
    background: 'transparent',  
    color: colors[color],  
    border: `2px solid ${colors[color]}`,  
  }),  
  
  ghost: (color) => ({  
    background: 'transparent',  
    color: colors[color],  
  }),  
};
