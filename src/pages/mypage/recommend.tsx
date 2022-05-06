import React from 'react';

import HomeLayout from '../../components/common/layout/layout';
import Beer from '../../components/common/beer/beer';
import { Title, Section, CardContainer } from '../../styles/preferences';
import { useRecommendationsQuery } from '../../api/hook/beers';
import { IBeer } from '../../api/types/beers';

const Recommend = () => {
  const { data } = useRecommendationsQuery();
  const recommendBeers = data ?? [];

  return (
    <Section>
      <Title>추천 맥주</Title>
      <CardContainer recommend>
        {recommendBeers.map((item: IBeer) => {
          return <Beer id={item.id} key={item.id} name={item.name} rate={item.avg} imageUrl={item.image_url} />;
        })}
      </CardContainer>
    </Section>
  );
};

export default Recommend;
Recommend.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
