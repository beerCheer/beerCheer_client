import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedBeersState } from '../../states';

import HomeLayout from '../../components/common/layout/layout';
import { Title, Section, CardContainer, CompletedButton, ButtonText } from '../../styles/preferences';
import Beer from '../../components/common/beer/beer';
import Data from '../../components/main/dummy';
import { DummyProps } from '../../components/main/dummy';

const Preferences = () => {
  const selectedBeers = useRecoilValue(selectedBeersState);

  return (
    <Section>
      <Title>선호하는 맥주 고르기 ({selectedBeers.length} / 3)</Title>
      <CompletedButton disabled={selectedBeers.length !== 3}>
        <ButtonText>선택 완료</ButtonText>
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
