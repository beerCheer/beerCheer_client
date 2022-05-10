import styled from '@emotion/styled';

interface activeTabProps {
  activeTab?: string;
  tabName?: string;
}

export const MainContainer = styled.div`
  padding: 30px 16px 100px 16px;
  width: 100%;
`;

export const MainContent = styled.div`
  display: grid;
  grid-gap: 70px 34px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  z-index: -1;

  ${props => props.theme.mq.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  ${props => props.theme.mq.phone} {
    grid-template-columns: 1fr;
  }
`;
export const MainTab = styled.nav`
  display: flex;
  padding: 30px 0px;
`;

export const TabButton = styled.button<activeTabProps>`
  font-size: 18px;
  background: none;
  outline: none;
  border: none;
  color: ${props => (props.activeTab === props.tabName ? 'black' : '#CBCBCB')};
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 18px;
`;
