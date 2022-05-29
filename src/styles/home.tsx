import styled from '@emotion/styled';

interface activeTabProps {
  activeTab?: string;
  tabName?: string;
}

export const MainContainer = styled.div`
  padding: 30px 16px 100px 16px;
  width: 100%;
`;

export const MainContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
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
