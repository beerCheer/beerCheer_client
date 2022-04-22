import styled from '@emotion/styled';

const AnimatedSymbol = styled.div`
  display: inline-block;
  transform: rotate(-40deg);
  margin-left: -6px;
`;

const AnimatedLogo = styled.div`
  display: inline-block;
  &:hover {
    ${AnimatedSymbol} {
      transform: rotate(-50deg);
      transition: all 0.5s ease;
    }
  }
`;

export { AnimatedLogo, AnimatedSymbol };
