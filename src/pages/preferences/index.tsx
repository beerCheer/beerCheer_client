import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { selectedBeersState, recommendBeerState } from '../../recoils/atoms/beers';

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
import { useAllBeers, usePreferenceBeers } from '../../api/hook/beers';
import { IBeer } from '../../api/types/beers';
import { flatten } from 'lodash';

const Preferences = () => {
  const router = useRouter();
  const [selectedBeers, setSelectedBeers] = useState<IBeer[]>([]);

  const getPreferenceBeer = () => {
    //TODO : 선호하는 맥주 리스트 받아오기

    router.push('/mypage/recommend');
  };

  const { data: beersData, isLoading } = usePreferenceBeers({ isPreferenceOrRateChecked: false });
  const beerList = beersData ?? [];

  const handleSelectedBeer = (beer: IBeer) => {
    const selected: boolean = selectedBeers.some(selected => selected.id === beer.id);

    if (selected) {
      const unCheck = selectedBeers.filter(selected => beer.id !== selected.id);
      setSelectedBeers(() => unCheck);
    } else {
      if (selectedBeers.length < 3) {
        setSelectedBeers(prev => [...prev, beer]);
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
        {beerList.map((item: IBeer) => {
          return (
            <BeerWrapper
              key={item.id}
              selected={selectedBeers.some(selected => selected.id === item.id)}
              onClick={() => handleSelectedBeer(item)}
            >
              <Beer name={item.name} rate={item.avg} imageUrl={item.image_url} />
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
