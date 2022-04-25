import React from 'react';
import { useRecoilValue } from 'recoil';

import { recommendBeerState } from '../../states';
import HomeLayout from '../../components/common/layout/layout';
import Beer from '../../components/common/beer/beer';
import { Title, Section, CardContainer } from '../../styles/preferences';
import { DummyProps } from '../../components/main/dummy';

const Beers = () => {
  const recommendBeers = useRecoilValue(recommendBeerState);

  return (
    <Section>
      <Title>추천 맥주</Title>
      <CardContainer recommend>
        {recommendBeers.map((item: DummyProps) => {
          return <Beer key={item.id} id={item.id} name={item.name} score={item.score} imageUrl={item.imageUrl} />;
        })}
      </CardContainer>
    </Section>
  );
};

export default Beers;
Beers.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
