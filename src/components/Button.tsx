import styled from '@emotion/styled';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = 'medium', label, ...props }: ButtonProps) => {
  return (
    <StyledButton type="button" size={size} primary={primary} {...props}>
      {label}
    </StyledButton>
  );
};

interface ButtonStyleProps {
  primary: boolean;
  size: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button<ButtonStyleProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: ${props => props.theme['font-light']};
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${props => (props.primary ? `white` : `#333`)};
  background-color: ${props => (props.primary ? `#1ea7fd` : ` transparent`)};
  padding: ${props => (props.size === 'small' ? `10px 16px` : props.size === 'medium' ? `11px 20px` : `12px 24px`)};
  font-size: ${props => (props.size === 'small' ? `12px` : props.size === 'medium' ? `14px` : ` 16px`)};
`;
