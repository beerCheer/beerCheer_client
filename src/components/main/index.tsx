import React from 'react';

import HomeLayout from '../common/layout/layout';
import Beer from '../common/beer/beer';
import PreferenesModal from './preferenes-pop-up';

import { MainContainer, MainContent, MainTab, Text, TabButton } from './styled';

import Data, { DummyProps } from './dummy';

const Main = () => {
  const [activeTab, setActiveTab] = React.useState<string>('0');

  const tabMenuHandle = (name: string): void => {
    // if(name === "preferences" && !performance){
    // TODO : 모달 띄워주기
    // }
    setActiveTab((prev: string) => name);
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
          {Data.map((item: DummyProps) => {
            return <Beer key={item.id} name={item.name} score={item.score} imageUrl={item.imageUrl} />;
          })}
        </MainContent>
      </MainContainer>
      <PreferenesModal />
    </HomeLayout>
  );
};

export default Main;
