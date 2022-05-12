import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { useCommentListQuery, useUserListQuery } from '../../api/hook/admin';
import { useIsValidAdmin } from '../../hooks/useIsValidAdmin';

import HomeLayout from '../../components/common/layout/layout';
import ArrowRightIcon from '../../components/common/@Icons/arrowRightIcon';
import { AdminContainer, Title, UnderLine, Section, Article, ArticleTitle } from '../../styles/admin';
import ContentTable from '../../components/admin/ContentTable';

const Admin = () => {
  const router = useRouter();
  const isAdmin = useIsValidAdmin();

  const { data: userList } = useUserListQuery({
    per_page: 10,
    page: 1,
    options: {
      enabled: isAdmin,
    },
  });

  const { data: commentList } = useCommentListQuery({
    per_page: 10,
    page: 1,
    options: {
      enabled: isAdmin,
    },
  });

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
          {!!userList && <ContentTable userList={userList} firstHeader="닉네임" lastHeader="가입일자" />}
        </Article>

        <Article>
          <ArticleTitle>
            댓글관리
            <ArrowRightIcon onClick={() => router.push('/admin/comments')} />
          </ArticleTitle>

          {!!commentList && <ContentTable commentList={commentList} firstHeader="닉네임" lastHeader="내용" />}
        </Article>
      </Section>
    </AdminContainer>
  );
};

export default Admin;

Admin.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { req } = ctx;

  const token = req.cookies['accessToken'];

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  } else {
    //TODO : server 주소 변경
    const isAdmin = await fetch(`http://localhost:3001/adminCheck?query=${token}`).then(res => res.json());
    if (!isAdmin) {
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
      };
    }
  }

  return {
    props: {},
  };
};
