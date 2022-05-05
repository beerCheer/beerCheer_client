import React from 'react';
import Beer from '../../components/common/beer/beer';
import HomeLayout from '../../components/common/layout/layout';
import { ListContent } from '../../styles/list';
import { EmptyFallback, Section, Title } from '../../styles/mypage/rates';
import { useFavoritesBeers } from '../../api/hook/mypage';
import EmptyIcon from '../../components/common/@Icons/emptyIcon';
import { IFavoritesBeer } from '../../api/types/mypage';
import { useRecoilValue } from 'recoil';
import { userIdState } from '../../recoils/atoms/users';

const Beers = () => {
  const userId = useRecoilValue(userIdState);

  const { data: favoritesBeersData } = useFavoritesBeers();

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
