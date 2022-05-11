import React from 'react';
import { GetServerSideProps } from 'next';
import { useMutation, useQueryClient } from 'react-query';

import { useUserListQuery } from '../../api/hook/admin';
import { dateFormat } from '../../utils/dateFormat';
import { deleteUser } from '../../api/fetcher/admin';
import { useIsValidAdmin } from '../../hooks/useIsValidAdmin';

import Button from '../../components/common/button';
import ArrowLeftIcon from '../../components/common/@Icons/arrowLeftIcon';
import ArrowRightIcon from '../../components/common/@Icons/arrowRightIcon';
import HomeLayout from '../../components/common/layout/layout';
import { Container, Title, Section, Tr, PageContent, Td } from '../../styles/admin/user';
import GarbageIcon from '../../components/common/@Icons/garbageIcon';

const Users = () => {
  const [page, setPage] = React.useState<number>(1);
  const [totalPage, setTotalPage] = React.useState<number>(0);
  const isAdmin = useIsValidAdmin();

  const queryClient = useQueryClient();
  const { data } = useUserListQuery({
    per_page: 10,
    page,
    options: {
      onSuccess: data => {
        setTotalPage(Math.ceil(data.count / 10));
      },
      enabled: isAdmin,
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
        <table>
          <thead>
            <Tr header>
              <th>닉네임</th>
              <th>가입일자</th>
              <th>유저탈퇴</th>
            </Tr>
          </thead>
          <tbody>
            {data?.rows?.map(data => (
              <tr key={data.id}>
                <Td>{data.nickname}</Td>
                <Td>{dateFormat(data.createdAt)}</Td>
                <Td>
                  <GarbageIcon onClick={() => handleUserWithdraw(data.id)} />
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
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
