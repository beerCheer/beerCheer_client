import React from 'react';
import { StyledButton } from './styled';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  block?: boolean;
  color?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button = ({
  primary = false,
  size = 'medium',
  color = '#fba42a',
  block = false,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton type="button" size={size} primary={primary} color={color} block={block} {...props}></StyledButton>
  );
};

export default Button;
