import React from 'react';
import { useRecoilValue } from 'recoil';

import { recommendBeerState } from '../../recoils/atoms/beers';
import HomeLayout from '../../components/common/layout/layout';
import Beer from '../../components/common/beer/beer';
import { Title, Section, CardContainer } from '../../styles/preferences';
import { DummyProps } from '../../components/main/dummy';
import LoginRoute from '../../components/common/routes/login';

const Recommend = () => {
  const recommendBeers = useRecoilValue(recommendBeerState);

  return (
    <Section>
      <Title>추천 맥주</Title>
      <CardContainer recommend>
        {recommendBeers.map((item: DummyProps) => {
          return <Beer key={item.id} name={item.name} rate={item.score} imageUrl={item.imageUrl} />;
        })}
      </CardContainer>
    </Section>
  );
};

export default Recommend;
Recommend.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <HomeLayout>
      <LoginRoute>{page}</LoginRoute>
    </HomeLayout>
  );
};
