import React from 'react';

import HomeLayout from '../components/common/layout/layout';
import Beer from '../components/common/beer/beer';
import { MainContainer, MainContent, MainTab, Text } from './styled';

import Data from './dummy';
interface DummyProps {
  id: number;
  name: string;
  socre: number;
  imageUrl: string;
}

const Home = () => {
  const [activeTab, setActiveTab] = React.useState<string>('0');
  const [isModal, setIsModal] = React.useState<boolean>(false);
  // const preferences: boolean = false; // User 선호맥주 고르기 여부

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
          <Text
            activeTab={activeTab}
            id="0"
            onClick={() => {
              tabMenuHandle('0');
            }}
          >
            인기 맥주 TOP 12
          </Text>
          <Text> &nbsp;/&nbsp; </Text>
          <Text
            activeTab={activeTab}
            id="1"
            onClick={() => {
              tabMenuHandle('1');
            }}
          >
            추천 맥주 리스트
          </Text>
        </MainTab>
        <MainContent>
          {Data.map((item: DummyProps) => {
            return <Beer key={item.id} id={item.id} name={item.name} socre={item.socre} imageUrl={item.imageUrl} />;
          })}
        </MainContent>
      </MainContainer>
    </HomeLayout>
  );
};

export default Home;
