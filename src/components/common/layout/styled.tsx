import styled from '@emotion/styled';

interface HomecContentProps {
  padding?: string;
}

export const Content = styled.section<HomecContentProps>`
  max-width: 1200px;
  margin: auto;
  min-height: calc(100vh - 225px);
  width: 100%;
  height: 100%;
  padding-top: ${props => (props.padding ? '' : '75px')};
`;

export const Background = styled.div`
  background-image: url('mainback.jpeg');
  opacity: 0.8;
  width: 100%;
  height: 550px;
  background-size: 100% 100%;
  position: relative;
`;
