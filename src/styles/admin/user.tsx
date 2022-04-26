import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0px;
  padding: 16px;
`;

const UnderLine = styled.div`
  border-top: 1px solid #808080;
`;

const Title = styled.header`
  font-size: 18px;
`;

const Section = styled.section`
  display: flex;
  background-color: #f3f3f3;
  min-height: calc(100vh - 225px);
  flex-direction: column;
  padding: 20px;
  gap: 20px 0px;
`;

const SectionTitle = styled.h1`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0px;
  padding: 0px 10px;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div``;

export { Container, Title, UnderLine, Section, SectionTitle, SectionContent, Text, ContentBox };
