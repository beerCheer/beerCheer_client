import styled from '@emotion/styled';

interface activeTabProps {
  activeTab?: string;
  id?: string;
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 16px 100px 16px;
  width: 100%;
`;

export const MainContent = styled.div`
  display: grid;
  grid-gap: 70px 34px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  z-index: -1;
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
  color: ${props => (props.activeTab === props.id ? 'black' : '#CBCBCB')};
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 18px;
`;
