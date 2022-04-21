import styled from '@emotion/styled';

interface activeTabProps {
  activeTab?: string;
  id?: string;
}

const high = '550px';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0px 100px 0px;
  width: 100%;
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 274px 274px 274px 274px;
  grid-gap: 70px 34px;
`;

export const MainTab = styled.div`
  display: flex;
  font-size: 20px;
  padding: 30px 0px;
`;

export const Text = styled.div<activeTabProps>`
  font-size: 18px;
  color: ${props => (props.activeTab === props.id ? 'black' : '#CBCBCB')};
  cursor: pointer;
`;
