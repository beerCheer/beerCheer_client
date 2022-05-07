import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import EmptyIcon from '../../components/common/@Icons/emptyIcon';
import HomeLayout from '../../components/common/layout/layout';
import Board from '../../components/mypage/comments/board';
import { EmptyFallback, Section, Title } from '../../styles/mypage/rates';

import { useUserComments } from '../../api/hook/mypage';
import { loginState } from '../../recoils/selector/users';

const Comments = () => {
  const { data: commentsData } = useUserComments();

  const router = useRouter();
  const isLogin = useRecoilValue(loginState);

  useEffect(() => {
    if (!isLogin) {
      router.replace('/');
    }
  }, []);

  return (
    <Section>
      <Title>내가 작성한 한줄평</Title>
      {commentsData?.message ? (
        <EmptyFallback>
          <EmptyIcon width={150} height={150} />
          <p>아직 작성한 한줄평이 없어요!</p>
        </EmptyFallback>
      ) : (
        <section>{commentsData && <Board datas={commentsData?.result} />}</section>
      )}
    </Section>
  );
};

export default Comments;
Comments.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
