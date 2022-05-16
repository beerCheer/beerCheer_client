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
  flex-direction: column;
  padding: 20px;
  gap: 20px 0px;
`;

const PageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, Title, Section, PageContent };
