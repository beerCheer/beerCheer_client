import styled from '@emotion/styled';

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0px;
  padding: 16px;
  width: 100%;
`;

const UnderLine = styled.div`
  border-top: 1px solid #808080;
  height: 1px;
  width: 100%;
`;

const Title = styled.header`
  font-size: 18px;
`;

const Section = styled.section`
  display: flex;
  gap: 64px;
`;

const Article = styled.article`
  display: flex;
  width: 100%;
  gap: 24px;
  flex-direction: column;
  background-color: #f3f3f3;
  padding: 20px;
  min-height: calc(100vh - 300px);
  background: #e6e2d6;
  box-shadow: 9px 9px 18px #c4c0b6, -9px -9px 18px #fffff6;
  border-radius: 39px;
`;

const ArticleTitle = styled.h1`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export { AdminContainer, Title, UnderLine, Section, Article, ArticleTitle };
