import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0px;
  padding: 16px;
`;

const Title = styled.header`
  font-size: 18px;
`;

const Section = styled.section`
  display: flex;
  background-color: #f3f3f3;
  /* min-height: calc(100vh - 300px); */
  flex-direction: column;
  padding: 20px;
  gap: 20px 0px;
`;

const PageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Td = styled.td`
  vertical-align: center;
  text-align: center;
  padding: 10px;
`;

const Tr = styled.tr<{ header?: boolean }>`
  border-bottom: ${props => props.header && `1px solid #808080`};
  height: 24px;
`;

export { Container, Title, Section, PageContent, Td, Tr };
