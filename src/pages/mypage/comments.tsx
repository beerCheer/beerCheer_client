import React from 'react';
import { useRecoilValue } from 'recoil';
import { useUserComments } from '../../api/hook/mypage';
import EmptyIcon from '../../components/common/@Icons/emptyIcon';
import HomeLayout from '../../components/common/layout/layout';
import Board from '../../components/mypage/comments/board';
import { userIdState } from '../../recoils/atoms/users';
import { EmptyFallback, Section, Title } from '../../styles/mypage/rates';

const Comments = () => {
  const userId = useRecoilValue(userIdState);

  const { data: commentsData } = useUserComments(userId as number);

  return (
    <Section>
      <Title>내가 작성한 한줄평</Title>
      {commentsData?.result?.length === 0 ? (
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
