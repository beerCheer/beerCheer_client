import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import flatten from 'lodash/flatten';
import HomeLayout from '../components/common/layout/layout';
import Beer from '../components/common/beer/beer';
import { ListContanier, ListContent, ListTitle } from '../styles/list';
import { useAllBeers } from '../api/hook/beers';
import { LIST_PER_PAGE } from '../constants';
import { IBeer } from '../api/types/beers';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const List = () => {
  const { ref, visible } = useIntersectionObserver();
  const router = useRouter();
  const { search } = router.query;
  const [page, setPage] = useState(1);
  const {
    data: beersData,
    fetchNextPage,
    isLoading,
  } = useAllBeers({
    page,
    per_page: LIST_PER_PAGE,
    isPreferenceOrRateChecked: true,
  });

  const beerList = useMemo(() => flatten(beersData?.pages?.map(page => page.result) ?? []), [beersData]);

  useEffect(() => {
    if (visible && !isLoading) {
      console.log('v');
      fetchNextPage();
    }
  }, [visible]);

  return (
    <ListContanier>
      <ListTitle>{search ? `"${search}"에 대한 검색 결과` : '전체 맥주'}</ListTitle>
      <ListContent>
        {beerList?.map((item: IBeer) => {
          return (
            <React.Fragment key={item.id}>
              <Beer
                onClick={() => router.push(`/${item.id}`)}
                name={item.name}
                score={item.avg}
                imageUrl={item.image_url}
              />
            </React.Fragment>
          );
        })}

        <div ref={ref} />
      </ListContent>
    </ListContanier>
  );
};

export default List;

List.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
