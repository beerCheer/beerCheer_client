import React from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
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
  BeerWrapper,
} from '../../styles/preferences';
import Beer from '../../components/common/beer/beer';
import Data from '../../components/main/dummy';
import { DummyProps } from '../../components/main/dummy';

const Preferences = () => {
  const router = useRouter();
  const [selectedBeers, setSelectedBeers] = useRecoilState(selectedBeersState);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  const setRecommenBeer = useSetRecoilState(recommendBeerState);

  const getPreferenceBeer = () => {
    //TODO : 선호하는 맥주 리스트 받아오기
    setIsLoading(true);
    setRecommenBeer(() => Data.slice(0, 2));

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    router.push('/mypage/recommend');
  };

  const handleSelectedBeer = (id: string) => {
    const selected: boolean = selectedBeers.includes(id);

    if (selected) {
      const unCheck = selectedBeers.filter(el => el !== id);
      setSelectedBeers(() => unCheck);
    } else {
      if (selectedBeers.length < 3) {
        setSelectedBeers(prev => [...prev, id]);
      }
    }
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
          return (
            <BeerWrapper
              key={item.id}
              selected={selectedBeers.includes(String(item.id))}
              onClick={() => handleSelectedBeer(String(item.id))}
            >
              <Beer name={item.name} rate={item.score} imageUrl={item.imageUrl} />
            </BeerWrapper>
          );
        })}
      </CardContainer>
    </Section>
  );
};

export default Preferences;
Preferences.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
