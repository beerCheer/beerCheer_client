import { useState } from 'react';
import { useRouter } from 'next/router';

import HomeLayout from '../common/layout/layout';
import Beer from '../common/beer/beer';
import PreferenesModal from './preferenes-pop-up';
import { MainContainer, MainContent, MainTab, Text, TabButton } from './styled';

import { useRatesBeer } from '../../api/hook/beers';
import { IBeer } from '../../api/types/beers';
import { useUserQuery } from '../../api/hook/users';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loginPopupState, userIdState } from '../../recoils/atoms/users';

const Main = () => {
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

  const { data: ratesData } = useRatesBeer();

  return (
    <HomeLayout>
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
      <PreferenesModal
        isOpen={preferencePopupOpen}
        onClose={() => {
          setPreferencePopupOpen(false);
        }}
      />
    </HomeLayout>
  );
};

export default Main;
