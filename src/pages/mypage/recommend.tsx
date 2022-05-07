import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import HomeLayout from '../../components/common/layout/layout';
import Beer from '../../components/common/beer/beer';
import { Title, Section, CardContainer } from '../../styles/preferences';
import { DummyProps } from '../../components/main/dummy';

import { recommendBeerState } from '../../recoils/atoms/beers';
import { loginState } from '../../recoils/selector/users';

const Recommend = () => {
  const recommendBeers = useRecoilValue(recommendBeerState);

  const router = useRouter();
  const isLogin = useRecoilValue(loginState);

  useEffect(() => {
    if (!isLogin) {
      router.replace('/');
    }
  }, []);

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
  return <HomeLayout>{page}</HomeLayout>;
};
