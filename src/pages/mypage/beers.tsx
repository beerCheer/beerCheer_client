import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import Beer from '../../components/common/beer/beer';
import HomeLayout from '../../components/common/layout/layout';
import { ListContent } from '../../styles/list';
import { EmptyFallback, Section, Title } from '../../styles/mypage/rates';
import EmptyIcon from '../../components/common/@Icons/emptyIcon';

import { useFavoritesBeers } from '../../api/hook/mypage';
import { IFavoritesBeer } from '../../api/types/mypage';
import { loginState } from '../../recoils/selector/users';

const Beers = () => {
  const { data: favoritesBeersData } = useFavoritesBeers();

  const router = useRouter();
  const isLogin = useRecoilValue(loginState);

  useEffect(() => {
    if (!isLogin) {
      router.replace('/');
    }
  }, []);

  return (
    <Section>
      <Title>나의 맥주 창고</Title>
      {favoritesBeersData?.message ? (
        <EmptyFallback>
          <EmptyIcon width={150} height={150} />
          <p>아직 보관한 맥주가 없어요!</p>
        </EmptyFallback>
      ) : (
        <ListContent>
          {favoritesBeersData?.result?.map((beer: IFavoritesBeer) => {
            return <Beer key={beer.id} name={beer.name} imageUrl={beer.image_url} />;
          })}
        </ListContent>
      )}
    </Section>
  );
};

export default Beers;

Beers.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
