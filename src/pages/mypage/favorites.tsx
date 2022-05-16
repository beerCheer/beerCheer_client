import React from 'react';
import { useRouter } from 'next/router';

import { IBeer } from '../../api/types/beers';
import { useFavoritesBeers } from '../../api/hook/mypage';

import Beer from '../../components/common/beer/beer';
import HomeLayout from '../../components/common/layout/layout';
import { EmptyFallback, Section, Title } from '../../styles/mypage/rates';
import { ListContent } from '../../styles/list';
import EmptyIcon from '../../components/common/@Icons/emptyIcon';

const Beers = () => {
  const router = useRouter();
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
          {favoritesBeersData?.result?.map((beer: IBeer) => {
            return (
              <Beer
                key={beer.id}
                name={beer.name}
                imageUrl={beer.image_url}
                id={beer.id}
                favorite={beer.favorite}
                onClick={() => router.push(`/${beer.id}`)}
              />
            );
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
