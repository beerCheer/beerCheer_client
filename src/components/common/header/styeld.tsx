import styled from '@emotion/styled';
import { jsx, css, keyframes } from '@emotion/react';

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
  top: 0px;
  background-color: ${props => (props.main === 'main' ? 'transparent' : 'white')};
  box-shadow: ${props => (props.main === 'main' ? '' : '0px 2px 32px -5px #0000001A')};
  z-index: 1;
  transition: background-color 0.2s;
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

// const bounce = keyframes`
//   from, 20%, 53%, 80%, to {
//     transform: translate3d(0,0,0);
//   }

//   40%, 43% {
//     transform: translate3d(0, -30px, 0);
//   }

//   70% {
//     transform: translate3d(0, -15px, 0);
//   }

//   90% {
//     transform: translate3d(0,-4px,0);
//   }
// `;

//   css={css`
//       animation: ${bounce} 1s ease infinite;
//     `}
