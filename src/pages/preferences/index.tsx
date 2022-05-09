import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';

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
import { usePreferenceBeers } from '../../api/hook/beers';
import { IBeer } from '../../api/types/beers';
import { useMutation, useQueryClient } from 'react-query';
import { savePreferenceBeers } from '../../api/fetcher/beers';
import { updateIsPreferenceOrRate } from '../../api/fetcher/users';
import { USER_QUERY_KEY } from '../../api/hook/users';

const Preferences = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [selectedBeers, setSelectedBeers] = useState<IBeer[]>([]);
  const { mutateAsync: isPreferenceTrue } = useMutation(updateIsPreferenceOrRate, {
    onSuccess: () => {
      queryClient.invalidateQueries(USER_QUERY_KEY.USERS);
    },
  });
  const { mutateAsync: saveBeers, isLoading: resultLoading } = useMutation(savePreferenceBeers, {
    onSuccess: () => {
      isPreferenceTrue();
      router.push('/mypage/recommend');
    },
    onError: () => {
      alert('다시 시도해주세요');
    },
  });

  const getPreferenceBeer = () => {
    const preferenceBeers = selectedBeers.map(beer => {
      const malt = beer.ingredients.malt[0];
      return { beerId: beer.id, malt: malt.name, quantity: malt.amount.value };
    });

    saveBeers(preferenceBeers);
  };

  const { data: beersData, isLoading: listLoading } = usePreferenceBeers({ isPreferenceOrRateChecked: false });
  const beerList = beersData ?? [];
  const isLoading = useMemo(() => listLoading || resultLoading, [listLoading, resultLoading]);

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
              <Beer name={item.name} rate={item.avg} imageUrl={item.image_url} id={item.id} />
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
