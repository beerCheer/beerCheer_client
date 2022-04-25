import styled from '@emotion/styled';
import { getContrastYIQ } from '../../../utils/getContrastYIQ';

interface ButtonStyleProps {
  primary: boolean;
  size: 'small' | 'medium' | 'large';
  color: string;
  block: boolean;
  disabled: boolean;
}

const StyledButton = styled.button<ButtonStyleProps>`
  outline: none;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  width: ${props => props.block && '100%'};
  font-weight: ${props => props.theme['font-light']};
  line-height: 1;
  color: ${props => (props.primary ? props.color && `${getContrastYIQ(props.color) ? '#000' : '#fff'}` : '#000')};
  background-color: ${props => (props.primary ? props.color : `transparent`)};
  padding: ${props => (props.size === 'small' ? `11px 16px` : props.size === 'medium' ? `12px 20px` : `13px 24px`)};
  font-size: ${props => (props.size === 'small' ? `12px` : props.size === 'medium' ? `14px` : ` 16px`)};

  &:hover {
    filter: brightness(0.95);
  }

  :disabled {
    background-color: ${props => (props.disabled ? `#878787` : props.theme['mainColor'])};
    opacity: ${props => (props.disabled ? `0.3` : `1`)};
    cursor: not-allowed;
  }
`;

export { StyledButton };
