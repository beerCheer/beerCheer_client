import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 225px;
  background-color: ${props => props.theme.color['secondary-dark']};
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 30px 0px 50px 0px;
`;

export const FooterTop = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ffffff;
  gap: 10px;
  padding: 0px 0px 6px 24px;
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
`;

export const Creators = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Creator = styled.a`
  color: #ffffff;
  font-size: 12px;
  height: 18px;
`;

export const Text = styled.span`
  color: #ffffff;
  font-size: 14px;
`;
