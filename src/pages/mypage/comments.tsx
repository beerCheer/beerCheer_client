import React, { useState } from 'react';
import EmptyIcon from '../../components/common/@Icons/emptyIcon';
import HomeLayout from '../../components/common/layout/layout';
import Board from '../../components/mypage/comments/board';
import { EmptyFallback, Section, Title } from '../../styles/mypage/rates';

const dummyData = [
  { name: '맛있는 beer', comment: '12345678901234567890', createAt: '2022-08-4' },
  { name: '정말 맛있는 맛있는 beer', comment: '댓글 최대 몇 글자 까지? 이건20자', createAt: '2022-02-13 13:16:46' },
  { name: '진짜 beer', comment: '댓글 최대 몇 글자 까지? 이것은 뛰어쓰기 포함 30자', createAt: '2022-08-4' },
  { name: '별로인 beer', comment: '아니면 백처럼 255 자 ? 고고고 ?', createAt: '2022-08-4' },
  {
    name: '맛없는 beer',
    comment: 'commne니면 백처럼 255 자 ? 고고니면 백처럼 255 자 ? 고고니면 백처럼 255 자 ? 고고tneefasdfasdfasdf',
    createAt: '2022-08-4',
  },
  { name: '그냥 beer', comment: 'commnetneefasdfasdfasdf', createAt: '2022-08-4' },
  { name: 'Cass', comment: 'commnetneefasdfasdfasdf', createAt: '2022-08-4' },
  { name: 'Terra', comment: 'commnetneefasdfasdfasdf', createAt: '2022-08-4' },
  { name: 'Asahi', comment: 'commnetneefasdfasdfasdf', createAt: '2022-08-4' },
  { name: 'Sapporo', comment: 'commnetneefasdfasdfasdf', createAt: '2022-08-4' },
];

const Comments = () => {
  const [datas, setData] = useState(dummyData);
  return (
    <Section>
      <Title>내가 작성한 한줄평</Title>
      {datas.length === 0 ? (
        <EmptyFallback>
          <EmptyIcon width={150} height={150} />
          <p>아직 작성한 한줄평이 없어요!</p>
        </EmptyFallback>
      ) : (
        <section>
          <Board datas={datas} />
        </section>
      )}
    </Section>
  );
};

export default Comments;
Comments.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
