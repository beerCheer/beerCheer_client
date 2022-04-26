import { useRouter } from 'next/router';
import React from 'react';
import ArrowRightIcon from '../../components/common/@Icons/arrowRightIcon';
import HomeLayout from '../../components/common/layout/layout';
import {
  AdminContainer,
  Title,
  UnderLine,
  Section,
  Article,
  ArticleContent,
  ArticleTitle,
  ContentBox,
  Text,
} from '../../styles/admin';
import AdminDuumy from './dummy';

const Admin = () => {
  const router = useRouter();

  return (
    <AdminContainer>
      <Title>어드민페이지</Title>
      <UnderLine />
      <Section>
        <Article>
          <ArticleTitle>
            유저관리
            <ArrowRightIcon onClick={() => router.push('/admin/user')} />
          </ArticleTitle>
          <ArticleContent>
            <ContentBox>
              <Text>닉네임</Text>
              <Text>가입일자</Text>
            </ContentBox>
            <UnderLine />
            {AdminDuumy.map(el => {
              return (
                <ContentBox key={el.id}>
                  <Text>{el.name}</Text>
                  <Text>{el.signUpdate}</Text>
                </ContentBox>
              );
            })}
          </ArticleContent>
        </Article>
        <Article>
          <ArticleTitle>
            댓글관리
            <ArrowRightIcon onClick={() => router.push('/admin/comments')} />
          </ArticleTitle>
          <ArticleContent>
            <ContentBox>
              <Text>닉네임</Text>
              <Text>등록일자</Text>
            </ContentBox>
            <UnderLine />

            {AdminDuumy.map(el => {
              return (
                <ContentBox key={el.id}>
                  <Text>{el.name}</Text>
                  <Text>{el.signUpdate}</Text>
                </ContentBox>
              );
            })}
          </ArticleContent>
        </Article>
      </Section>
    </AdminContainer>
  );
};

export default Admin;

Admin.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
