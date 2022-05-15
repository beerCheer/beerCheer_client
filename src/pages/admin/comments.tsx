import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import axios from 'axios';

import { useCommentListQuery } from '../../api/hook/admin';
import { API_END_POINT } from '../../constants';

import HomeLayout from '../../components/common/layout/layout';
import Button from '../../components/common/button';
import ArrowLeftIcon from '../../components/common/@Icons/arrowLeftIcon';
import ArrowRightIcon from '../../components/common/@Icons/arrowRightIcon';
import { Container, Title, Section, PageContent } from '../../styles/admin/user';
import DataListTable from '../../components/admin/DataListTable';

const Comments = ({ data: isAdmin }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [page, setPage] = React.useState<number>(1);
  const [totalPage, setTotalPage] = React.useState<number>(0);

  const { data: commentList } = useCommentListQuery({
    per_page: 10,
    page,
    options: {
      onSuccess: data => {
        setTotalPage(Math.ceil(data.count / 10));
      },
      enabled: !!isAdmin,
    },
  });

  return (
    <Container>
      <Title>어드민페이지_댓글관리</Title>
      <Section>
        <DataListTable commentList={commentList} th_1="닉네임" th_2="내용" th_3="댓글삭제" page={page} />
      </Section>

      <PageContent>
        <Button onClick={() => setPage(old => Math.max(old - 1, 1))}>
          <ArrowLeftIcon />
        </Button>
        <Button>{page}</Button>
        <Button onClick={() => setPage(old => (totalPage > page ? old + 1 : old))}>
          <ArrowRightIcon />
        </Button>
      </PageContent>
    </Container>
  );
};

export default Comments;

Comments.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { req } = ctx;

  const token = req.cookies['accessToken'];
  let isAdmin;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  } else {
    isAdmin = await axios.get(`${API_END_POINT}/adminCheck`, {
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
  }

  return {
    props: {
      data: isAdmin.data,
    },
  };
};
