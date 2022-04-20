import styled from '@emotion/styled';
interface HeaderContentProps {
  main?: string;
}
const mainColor = '#FF9900';

export const HeaderContainer = styled.div`
  height: 75px;
`;

export const HeaderContent = styled.div<HeaderContentProps>`
  display: flex;
  position: fixed;
  max-width: 1200px;
  width: 100%;
  height: 75px;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${props => (props.main ? '' : '0px 2px 32px -5px #0000001A')};
  background-color: ${props => (props.main ? '' : 'white')};
`;

export const Text = styled.div`
  font-size: 24px;
  color: #080575;
`;

export const SigninText = styled.div`
  font-size: 16px;
  color: ${mainColor};
`;
