import { StyledButton } from './Button.styles';  
import type { ButtonProps } from './Button.types';

  
export const Button = ({  
  children,  
  size = 'md',  
  color = 'primary',  
  variant = 'solid',  
  ...rest  
}: ButtonProps) => {  
  return (  
    <StyledButton  
      size={size}  
      color={color}  
      variant={variant}  
      {...rest}  
    >  
      {children}  
    </StyledButton>  
  );  
};
