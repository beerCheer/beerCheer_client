import styled from '@emotion/styled';

interface HeaderContainerProps {
  main?: boolean;
}
const mainColor = '#FF9900';

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
  max-width: 1320px;
  padding: 0px 60px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 75px;
`;

export const Text = styled.div`
  font-size: 18px;
  color: #080575;
  left: 300px;
`;

export const SigninText = styled.div`
  font-size: 16px;
  color: ${mainColor};
`;

export const HiddenSearchBar = styled.div`
  height: 45px;
  width: 40%;
  visibility: hidden;
`;
