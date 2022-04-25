import React from 'react';
import { StyledButton } from './styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  block?: boolean;
  color?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Button = ({
  primary = false,
  size = 'medium',
  color = '#fba42a',
  block = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      size={size}
      primary={primary}
      color={color}
      block={block}
      disabled={disabled}
      {...props}
    ></StyledButton>
  );
};

export default Button;
