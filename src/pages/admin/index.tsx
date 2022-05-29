import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';

import { useCommentListQuery, useUserListQuery } from '../../api/hook/admin';
import { API_END_POINT } from '../../constants';

import HomeLayout from '../../components/common/layout/layout';
import ArrowRightIcon from '../../components/common/@Icons/arrowRightIcon';
import { AdminContainer, Title, UnderLine, Section, Article, ArticleTitle } from '../../styles/admin';
import DataTable from '../../components/admin/data-table';

const Admin = ({ data: isAdmin }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const { data: userList } = useUserListQuery({
    per_page: 10,
    page: 1,
    options: {
      enabled: !!isAdmin,
    },
  });

  const { data: commentList } = useCommentListQuery({
    per_page: 10,
    page: 1,
    options: {
      enabled: !!isAdmin,
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

          <DataTable data={userList} tableHead={['닉네임', '가입일자']} user />
        </Article>

        <Article>
          <ArticleTitle>
            댓글관리
            <ArrowRightIcon onClick={() => router.push('/admin/comments')} />
          </ArticleTitle>

          <DataTable data={commentList} tableHead={['닉네임', '내용']} comment />
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
  }

  const isAdmin = await axios.get(`${API_END_POINT}/adminCheck`, {
    params: {
      query: token,
    },
  });

  if (!isAdmin) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return {
    props: {
      data: isAdmin.data,
    },
  };
};
