import React from 'react';
import HomeLayout from '../../components/common/layout/layout';
import { Container, Title, Section, Tr, PageContent, Td } from '../../styles/admin/user';
import GarbageIcon from '../../components/common/@Icons/garbageIcon';
import { useUserListQuery } from '../../api/hook/admin';
import Button from '../../components/common/button';
import ArrowLeftIcon from '../../components/common/@Icons/arrowLeftIcon';
import ArrowRightIcon from '../../components/common/@Icons/arrowRightIcon';
import { dateFormat } from '../../utils/dateFormat';

const Admin = () => {
  const [page, setPage] = React.useState<number>(1);
  const [totalPage, setTotalPage] = React.useState<number>(0);

  const { data } = useUserListQuery({
    per_page: 10,
    page,
    options: {
      onSuccess: data => {
        setTotalPage(Math.ceil(data.count / 10));
      },
    },
  });

  return (
    <Container>
      <Title>어드민페이지_유저관리</Title>
      <Section>
        <table>
          <Tr header>
            <th>닉네임</th>
            <th>가입일자</th>
            <th>유저탈퇴</th>
          </Tr>
          {data?.rows?.map(data => {
            return (
              <tr key={data.id}>
                <Td>{data.nickname}</Td>
                <Td>{dateFormat(data.createdAt)}</Td>
                <Td>
                  <GarbageIcon />
                </Td>
              </tr>
            );
          })}
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

export default Admin;

Admin.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
