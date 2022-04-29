import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import flatten from 'lodash/flatten';
import HomeLayout from '../components/common/layout/layout';
import Beer from '../components/common/beer/beer';
import { ListContanier, ListContent, ListTitle, EmptyContent, EmptyListImage } from '../styles/list';
import { useAllBeers, useSearchBeer } from '../api/hook/beers';
import { LIST_PER_PAGE } from '../constants';
import { IBeer } from '../api/types/beers';
import { useInView } from 'react-intersection-observer';

const List = () => {
  const router = useRouter();
  const { search } = router.query;

  const [ref, inView] = useInView();
  const {
    data: beersData,
    fetchNextPage,
    isFetched,
    hasNextPage,
  } = useAllBeers({
    isPreferenceOrRateChecked: true,
  });
  const { data: searchList } = useSearchBeer({ name: `${search}` });

  const beerList = useMemo(() => flatten(beersData?.pages?.map(page => page.result) ?? []), [beersData]);
  const beers = useMemo(() => (search ? searchList : beerList), [beerList, searchList, search]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <ListContanier>
      <ListTitle>{search ? `"${search}"에 대한 검색 결과` : '전체 맥주'}</ListTitle>
      {search && searchList?.length === 0 && (
        <EmptyContent>
          <div>검색결과가 없어요</div>
          <EmptyListImage src="/emptyList.svg" alt="검색결과가 없습니다" />
        </EmptyContent>
      )}

      <ListContent>
        {beers?.map((item: IBeer) => (
          <React.Fragment key={item.id}>
            <Beer
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
