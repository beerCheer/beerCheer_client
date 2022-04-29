import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { selectedBeersState, isLoadingState, recommendBeerState } from '../../recoils/states';

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
  const [selectedBeers, setSelectedBeers] = useState<string[]>([]);

  const getPreferenceBeer = () => {
    //TODO : 선호하는 맥주 리스트 받아오기

    router.push('/mypage/recommend');
  };

  const { data: beersData, isLoading } = usePreferenceBeers({ isPreferenceOrRateChecked: false });
  const beerList = beersData ?? [];

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
        {beerList.map((item: IBeer) => {
          return (
            <BeerWrapper
              key={item.id}
              selected={selectedBeers.includes(String(item.id))}
              onClick={() => handleSelectedBeer(String(item.id))}
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
