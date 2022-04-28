import React from 'react';
import { useRouter } from 'next/router';

import HomeLayout from '../common/layout/layout';
import Beer from '../common/beer/beer';
import PreferenesModal from './preferenes-pop-up';
import { MainContainer, MainContent, MainTab, Text, TabButton } from './styled';

import { useRatesBeer } from '../../api/hook/beers';
import { IBeer } from '../../api/types/beers';

const Main = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = React.useState<string>('0');
  const { data: ratesData } = useRatesBeer();

  const tabMenuHandle = (tabNum: string): void => {
    // TODO : 유저 선호맥주 선택 여부 모달 띄워주기
    setActiveTab(() => tabNum);
  };

  return (
    <HomeLayout>
      <MainContainer>
        <MainTab>
          <TabButton
            activeTab={activeTab}
            id="0"
            onClick={() => {
              tabMenuHandle('0');
            }}
          >
            <Text>인기 맥주 TOP 12</Text>
          </TabButton>
          <Text> &nbsp;/&nbsp; </Text>
          <TabButton
            activeTab={activeTab}
            id="1"
            onClick={() => {
              tabMenuHandle('1');
            }}
          >
            <Text>추천 맥주 리스트</Text>
          </TabButton>
        </MainTab>
        <MainContent>
          {ratesData?.map((item: IBeer) => {
            return (
              <Beer
                onClick={() => router.push(`/${item.id}`)}
                key={item.id}
                name={item?.name}
                rate={item?.avg}
                imageUrl={item?.image_url}
              />
            );
          })}
        </MainContent>
      </MainContainer>
      <PreferenesModal />
    </HomeLayout>
  );
};

export default Main;
