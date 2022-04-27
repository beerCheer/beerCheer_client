import React from 'react';
import HomeLayout from '../../components/common/layout/layout';
import {
  Container,
  Title,
  UnderLine,
  Section,
  SectionTitle,
  SectionContent,
  Text,
  ContentBox,
} from '../../styles/admin/user';
import AdminDuumy from './dummy';
import GarbageIcon from '../../components/common/@Icons/garbageIcon';

const Comments = () => {
  return (
    <Container>
      <Title>어드민페이지_댓글관리</Title>
      <UnderLine />
      <Section>
        <SectionTitle>
          <Text>닉네임</Text>
          <Text>내용</Text>
          <Text>삭제</Text>
        </SectionTitle>
        <UnderLine />
        <SectionContent>
          {AdminDuumy.map(el => {
            return (
              <ContentBox key={el.id}>
                <Text>{el.name}</Text>
                <Text>{el.signUpdate}</Text>
                <GarbageIcon />
              </ContentBox>
            );
          })}
        </SectionContent>
      </Section>
    </Container>
  );
};

export default Comments;

Comments.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
