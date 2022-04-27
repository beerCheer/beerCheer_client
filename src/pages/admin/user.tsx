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
import { AdminDummy } from './dummy';
import GarbageIcon from '../../components/common/@Icons/garbageIcon';

const Admin = () => {
  return (
    <Container>
      <Title>어드민페이지_유저관리</Title>
      <UnderLine />
      <Section>
        <SectionTitle>
          <Text>닉네임</Text>
          <Text>가입일자</Text>
          <Text>유저탈퇴</Text>
        </SectionTitle>
        <UnderLine />
        <SectionContent>
          {AdminDummy.map(el => {
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

export default Admin;

Admin.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
