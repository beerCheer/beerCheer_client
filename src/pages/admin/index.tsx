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
  SignUpDateColumn,
  NicknameColumn,
} from '../../styles/admin';
import { AdminDummy } from '../../api/dummy';
import { useUserListQuery } from '../../api/hook/admin';
import { dateFormat } from '../../utils/dateFormat';

const Admin = () => {
  const router = useRouter();
  const { data: usersList } = useUserListQuery({ per_page: 10, page: 1 });

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
              <NicknameColumn>
                <div>닉네임</div>
                <UnderLine />
                {usersList?.rows.map(data => {
                  return (
                    <ContentBox key={data.id}>
                      <div>{data.nickname}</div>
                    </ContentBox>
                  );
                })}
              </NicknameColumn>
              <SignUpDateColumn>
                <div>가입일자</div>
                <UnderLine />
                {usersList?.rows.map(data => {
                  return (
                    <ContentBox key={data.id}>
                      <div>{dateFormat(data.createdAt)}</div>
                    </ContentBox>
                  );
                })}
              </SignUpDateColumn>
            </ContentBox>
          </ArticleContent>
        </Article>
        <Article>
          <ArticleTitle>
            댓글관리
            <ArrowRightIcon onClick={() => router.push('/admin/comments')} />
          </ArticleTitle>
          <ArticleContent>
            <ContentBox>
              <div>닉네임</div>
              <div>등록일자</div>
            </ContentBox>
            <UnderLine />

            {AdminDummy.map(el => {
              return (
                <ContentBox key={el.id}>
                  <div>{el.name}</div>
                  <div>{el.signUpdate}</div>
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
