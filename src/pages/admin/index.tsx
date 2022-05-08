import React from 'react';
import { useRouter } from 'next/router';

import { useCommentListQuery, useUserListQuery } from '../../api/hook/admin';
import { dateFormat } from '../../utils/dateFormat';

import HomeLayout from '../../components/common/layout/layout';
import ArrowRightIcon from '../../components/common/@Icons/arrowRightIcon';
import { AdminContainer, Title, UnderLine, Section, Article, ArticleTitle } from '../../styles/admin';
import { Td, Tr } from '../../styles/admin/user';
import AdminRoute from '../../components/common/routes/admin';

const Admin = () => {
  const router = useRouter();

  const { data: userList, isError: userError } = useUserListQuery({ per_page: 10, page: 1 });
  const { data: commentList, isError: commentError } = useCommentListQuery({ per_page: 10, page: 1 });

  if (userError || commentError) {
    router.replace('/');
  }

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

          <table>
            <thead>
              <Tr header>
                <th>닉네임</th>
                <th>가입일자</th>
              </Tr>
            </thead>
            <tbody>
              {userList?.rows?.map(data => (
                <tr key={data.id}>
                  <Td>{data.nickname}</Td>
                  <Td>{dateFormat(data.createdAt)}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </Article>
        <Article>
          <ArticleTitle>
            댓글관리
            <ArrowRightIcon onClick={() => router.push('/admin/comments')} />
          </ArticleTitle>

          <table>
            <thead>
              <Tr header>
                <th>닉네임</th>
                <th>내용</th>
              </Tr>
            </thead>
            <tbody>
              {commentList?.rows?.map(data => (
                <tr key={data.id}>
                  <Td>{data?.User?.nickname}</Td>
                  <Td>{data.content}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </Article>
      </Section>
    </AdminContainer>
  );
};

export default Admin;

Admin.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <HomeLayout>
      <AdminRoute>{page} </AdminRoute>
    </HomeLayout>
  );
};
