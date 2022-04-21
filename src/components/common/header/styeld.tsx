import styled from '@emotion/styled';
interface HeaderContainerProps {
  main?: string;
}
const mainColor = '#FF9900';

export const HeaderContainer = styled.div<HeaderContainerProps>`
  height: 75px;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: ${props => (props.main ? '' : 'white')};
  box-shadow: ${props => (props.main ? '' : '0px 2px 32px -5px #0000001A')};
  z-index: 1;
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
  font-size: 18px;
  color: #080575;
  left: 300px;
  flex: 0.6;
`;

export const SigninText = styled.div`
  font-size: 16px;
  color: ${mainColor};
`;
