import React from 'react';
import { useRouter } from 'next/router';

import { useCommentListQuery, useUserListQuery } from '../../api/hook/admin';
import { dateFormat } from '../../utils/dateFormat';
import { useIsValidAdmin } from '../../hooks/useIsValidAdmin';

import HomeLayout from '../../components/common/layout/layout';
import ArrowRightIcon from '../../components/common/@Icons/arrowRightIcon';
import { AdminContainer, Title, UnderLine, Section, Article, ArticleTitle } from '../../styles/admin';
import { Td, Tr } from '../../styles/admin/user';

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
  return <HomeLayout>{page}</HomeLayout>;
};
