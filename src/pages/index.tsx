import React from 'react';
import HomeLayout from '../components/common/layout/layout';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import Beer from '../components/common/beer/beer';
import PreferenesModal from '../components/main/preferenes-pop-up';
import { MainContainer, MainContent, MainTab, Text, TabButton } from '../styles/home';

import { useRatesBeer, useRecommendationsQuery } from '../api/hook/beers';
import { IBeer } from '../api/types/beers';
import { useUserQuery } from '../api/hook/users';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loginPopupState, userIdState } from '../recoils/atoms/users';

const Home = () => {
  const router = useRouter();
  const homeTabs = { RATES: 'RATES', PREFERENCE: 'PREFERENCE' };
  Object.freeze(homeTabs);

  const [preferencePopupOpen, setPreferencePopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(homeTabs.RATES);
  const setLoginPopup = useSetRecoilState(loginPopupState);
  const userId = useRecoilValue(userIdState);
  const { data: user } = useUserQuery(userId as number);
  const onClickRecommendList = (tabName: string): void => {
    if (!userId) {
      setLoginPopup(true);
    } else if (user && user.isPreferenceOrRateChecked) {
      setActiveTab(tabName);
    } else {
      setPreferencePopupOpen(true);
    }
  };

  const handleOnClickTabMenu = (tabName: string) => {
    if (tabName === homeTabs.PREFERENCE) {
      onClickRecommendList(tabName);
    } else {
      setActiveTab(tabName);
    }
  };

  const { data: ratesData } = useRatesBeer(userId);
  const { data: recommendsData } = useRecommendationsQuery({ enabled: !!userId || !!user?.isPreferenceOrRateChecked });

  const beers = useMemo(
    () => (activeTab === homeTabs.RATES ? ratesData : recommendsData),
    [recommendsData, ratesData, activeTab]
  );

  return (
    <MainContainer>
      <MainTab>
        <TabButton
          activeTab={activeTab}
          tabName={homeTabs.RATES}
          onClick={() => {
            handleOnClickTabMenu(homeTabs.RATES);
          }}
        >
          <Text>인기 맥주 TOP 12</Text>
        </TabButton>
        <Text> &nbsp;/&nbsp; </Text>
        <TabButton
          activeTab={activeTab}
          tabName={homeTabs.PREFERENCE}
          onClick={() => {
            handleOnClickTabMenu(homeTabs.PREFERENCE);
          }}
        >
          <Text>추천 맥주 리스트</Text>
        </TabButton>
      </MainTab>
      <MainContent>
        {beers?.map((item: IBeer) => {
          return (
            <Beer
              id={item.id}
              onClick={() => router.push(`/${item.id}`)}
              key={item.id}
              name={item?.name}
              rate={item?.avg}
              favorite={item?.favorite}
              imageUrl={item?.image_url}
            />
          );
        })}
      </MainContent>

      <PreferenesModal
        isOpen={preferencePopupOpen}
        onClose={() => {
          setPreferencePopupOpen(false);
        }}
      />
    </MainContainer>
  );
};

export default Home;
Home.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
