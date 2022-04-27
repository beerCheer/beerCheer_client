import React from 'react';
import Beer from '../../components/common/beer/beer';
import HomeLayout from '../../components/common/layout/layout';
import Data from '../../components/main/dummy';
import { ListContent } from '../../styles/list';
import { Section, Title } from '../../styles/mypage/rates';
import { DummyProps } from '../list';

const Beers = () => {
  return (
    <Section>
      <Title>나의 맥주 창고</Title>
      <ListContent>
        {Data.map((item: DummyProps) => {
          return <Beer key={item.id} name={item.name} score={item.score} imageUrl={item.imageUrl} />;
        })}
      </ListContent>
    </Section>
  );
};

export default Beers;

Beers.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
