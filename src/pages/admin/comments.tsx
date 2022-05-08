import React from 'react';

import { useMutation, useQueryClient } from 'react-query';

import { useCommentListQuery } from '../../api/hook/admin';
import { deleteComment } from '../../api/fetcher/admin';

import HomeLayout from '../../components/common/layout/layout';
import { Container, Title, Section, Tr, Td, PageContent } from '../../styles/admin/user';
import Button from '../../components/common/button';
import ArrowLeftIcon from '../../components/common/@Icons/arrowLeftIcon';
import ArrowRightIcon from '../../components/common/@Icons/arrowRightIcon';
import GarbageIcon from '../../components/common/@Icons/garbageIcon';
import AdminRoute from '../../components/common/routes/admin';

const Comments = () => {
  const [page, setPage] = React.useState<number>(1);
  const [totalPage, setTotalPage] = React.useState<number>(0);

  const queryClient = useQueryClient();
  const { data: commentList } = useCommentListQuery({
    per_page: 10,
    page,
    options: {
      onSuccess: data => {
        setTotalPage(Math.ceil(data.count / 10));
      },
    },
  });

  const { mutate: deleteCommentMutation } = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['COMMENTSLIST', page]);
    },
  });

  return (
    <Container>
      <Title>어드민페이지_댓글관리</Title>
      <Section>
        <table>
          <thead>
            <Tr header>
              <th>닉네임</th>
              <th>내용</th>
              <th>댓글삭제</th>
            </Tr>
          </thead>
          <tbody>
            {commentList?.rows?.map(data => (
              <tr key={data.id}>
                <Td>{data?.User?.nickname}</Td>
                <Td>{data.content}</Td>
                <Td>
                  <GarbageIcon onClick={() => deleteCommentMutation(data.id)} />
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

export default Comments;

Comments.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <HomeLayout>
      <AdminRoute>{page} </AdminRoute>
    </HomeLayout>
  );
};
