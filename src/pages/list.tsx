import React, { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import flatten from 'lodash/flatten';
import HomeLayout from '../components/common/layout/layout';
import Beer from '../components/common/beer/beer';
import { ListContanier, ListContent, ListTitle, EmptyContent, EmptyListImage } from '../styles/list';
import { useAllBeers, useSearchBeer } from '../api/hook/beers';
import { IBeer } from '../api/types/beers';
import { useInView } from 'react-intersection-observer';
import { Loading, LoadingContainer } from '../styles/preferences';
import { useRecoilValue } from 'recoil';
import { userIdState } from '../recoils/atoms/users';

const List = () => {
  const router = useRouter();
  const { search } = router.query;
  const userId = useRecoilValue(userIdState);
  const [ref, inView] = useInView();
  const {
    data: beersData,
    fetchNextPage,
    isFetched,
    hasNextPage,
  } = useAllBeers({
    isPreferenceOrRateChecked: true,
    id: userId,
  });
  const { data: searchData, isLoading } = useSearchBeer({ name: `${search}`, id: userId });

  const beerList = useMemo(() => flatten(beersData?.pages?.map(page => page.result) ?? []), [beersData]);
  const searchBeerList = useMemo(() => flatten(searchData?.result ?? []), [searchData]);

  const beers = useMemo(() => (search ? searchBeerList : beerList), [beerList, searchBeerList, search]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <LoadingContainer>
        <Loading src="/loading.gif" alt="이미지 로딩" />
      </LoadingContainer>
    );
  }
  return (
    <ListContanier>
      <ListTitle>{search ? `"${search}"에 대한 검색 결과` : '전체 맥주'}</ListTitle>
      {search && searchBeerList.length === 0 && (
        <EmptyContent>
          <div>검색결과가 없어요</div>
          <EmptyListImage src="/emptyList.svg" alt="검색결과가 없습니다" />
        </EmptyContent>
      )}

      <ListContent>
        {beers?.map((item: IBeer) => (
          <React.Fragment key={item.id}>
            <Beer
              favorite={item.favorite}
              id={item.id}
              onClick={() => router.push(`/${item.id}`)}
              name={item.name}
              rate={item.avg}
              imageUrl={item.image_url}
            />
          </React.Fragment>
        ))}

        {isFetched && <div ref={ref} />}
      </ListContent>
    </ListContanier>
  );
};

export default List;

List.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
