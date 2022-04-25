import React from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { selectedBeersState, isLoadingState, recommendBeerState } from '../../states';

import HomeLayout from '../../components/common/layout/layout';
import {
  Title,
  Section,
  CardContainer,
  CompletedButton,
  ButtonText,
  LoadingContainer,
  Loading,
} from '../../styles/preferences';
import Beer from '../../components/common/beer/beer';
import Data from '../../components/main/dummy';
import { DummyProps } from '../../components/main/dummy';

const Preferences = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  const setRecommenBeer = useSetRecoilState(recommendBeerState);

  const selectedBeers = useRecoilValue(selectedBeersState);

  const getPreferenceBeer = () => {
    //TODO : 선호하는 맥주 리스트 받아오기
    setIsLoading(true);
    setRecommenBeer(() => Data.slice(0, 2));

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    router.push('/preferences/beers');
  };

  if (isLoading)
    return (
      <LoadingContainer>
        <Loading src="/loading.gif" alt="이미지 로딩" />
      </LoadingContainer>
    );

  return (
    <Section>
      <Title>선호하는 맥주 고르기 ({selectedBeers.length} / 3)</Title>
      <CompletedButton disabled={selectedBeers.length !== 3}>
        <ButtonText onClick={getPreferenceBeer}>선택 완료</ButtonText>
      </CompletedButton>
      <CardContainer>
        {Data.map((item: DummyProps) => {
          return <Beer key={item.id} id={item.id} name={item.name} score={item.score} imageUrl={item.imageUrl} />;
        })}
      </CardContainer>
    </Section>
  );
};

export default Preferences;
Preferences.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
