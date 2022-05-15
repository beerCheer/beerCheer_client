import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

import { useUserListQuery } from '../../api/hook/admin';
import { API_END_POINT } from '../../constants';
import { deleteUser } from '../../api/fetcher/admin';

import HomeLayout from '../../components/common/layout/layout';
import Button from '../../components/common/button';
import ArrowLeftIcon from '../../components/common/@Icons/arrowLeftIcon';
import ArrowRightIcon from '../../components/common/@Icons/arrowRightIcon';
import { Container, Title, Section, PageContent } from '../../styles/admin/detail';
import DataTable from '../../components/admin/data-table';

const Users = ({ data: isAdmin }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const queryClient = useQueryClient();

  const [page, setPage] = React.useState<number>(1);
  const [totalPage, setTotalPage] = React.useState<number>(0);

  const { data: userList } = useUserListQuery({
    per_page: 10,
    page,
    options: {
      onSuccess: data => {
        setTotalPage(Math.ceil(data.count / 10));
      },
      enabled: !!isAdmin,
    },
  });

  const { mutate: deleteUserMutation } = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['USERLIST', page]);
    },
  });

  const handleUserWithdraw = (id: number) => {
    deleteUserMutation(id);
  };

  return (
    <Container>
      <Title>어드민페이지_유저관리</Title>
      <Section>
        <DataTable
          data={userList}
          tableHead={['닉네임', '가입일자', '유저탈퇴']}
          onClick={handleUserWithdraw}
          user
          icon
        />
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

export default Users;

Users.getLayout = function getLayout(page: React.ReactElement) {
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
