import styled from '@emotion/styled';

interface HomecContentProps {
  padding?: string;
}

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const HomeWrapper = styled.div`
  max-width: 1200px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Content = styled.div<HomecContentProps>`
  min-height: 100vh;
  width: 100%;
  padding-top: ${props => (props.padding ? '' : '75px')};
`;

export const BackGround = styled.div`
  background-image: url('321321.jpeg');
  opacity: 0.7;
  width: 100%;
  height: 550px;
  background-size: 100% 100%;
`;
