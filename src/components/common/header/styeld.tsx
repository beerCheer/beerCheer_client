import styled from '@emotion/styled';
import Button from '../button';

export const HeaderContainer = styled.header<{ main?: boolean }>`
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

export const Text = styled.div`
  cursor: pointer;
  white-space: nowrap;
  color: ${props => props.theme.color.secondary};
  font-size: ${props => props.theme['font-lg']};
  font-weight: ${props => props.theme['font-semibold']};

  ${props => props.theme.mq.tablet} {
    font-size: ${props => props.theme['font-sm']};
  }
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
  padding: 0px 10px;
  cursor: pointer;
`;

export const Span = styled.span<{ main?: boolean }>`
  white-space: nowrap;
  font-size: ${props => props.theme['font-lg']};
  font-weight: ${props => props.theme['font-medium']};
  color: ${props => (props.main ? '#FFFDE7' : '#363636')};

  ${props => props.theme.mq.tablet} {
    font-size: ${props => props.theme['font-sm']};
  }
`;
