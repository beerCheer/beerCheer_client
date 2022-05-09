import styled from '@emotion/styled';
import Button from '../button';

interface HeaderContainerProps {
  main?: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  height: 75px;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0px;
  background-color: ${props => (props.main ? 'transparent' : 'white')};
  box-shadow: ${props => (props.main ? 'none' : '0px 2px 32px -5px #0000001A')};
  transition: all 0.2s;
`;

export const HeaderContent = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 75px;
`;

export const Text = styled.div<{ isTablet: boolean }>`
  font-size: ${props => (props.isTablet ? props.theme['font-sm'] : props.theme['font-lg'])};
  color: ${props => props.theme.color.secondary};
  cursor: pointer;
`;

export const SigninButton = styled(Button)`
  color: ${props => props.theme.color.primary};
`;

export const HiddenSearchBar = styled.div`
  height: 45px;
  width: 40%;
  visibility: hidden;
`;

export const Icon = styled.div`
  cursor: pointer;
`;
