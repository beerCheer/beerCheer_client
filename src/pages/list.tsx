import React, { useState } from 'react';
import { useRouter } from 'next/router';

import HomeLayout from '../components/common/layout/layout';
import Beer from '../components/common/beer/beer';

import { ListContanier, ListContent, ListTitle } from '../styles/list';
import { useAllBeers } from '../api/hook/beers';
import { LIST_PER_PAGE } from '../constants';
import { IBeers } from '../api/types/beers';
import Link from 'next/link';

export interface DummyProps {
  id: number;
  name: string;
  score: number;
  imageUrl: string;
}

const List = () => {
  const router = useRouter();
  const { search } = router.query;
  const [page, setPage] = useState(1);
  const { data } = useAllBeers({ page, per_page: LIST_PER_PAGE, isPreferenceOrRateChecked: true });

  return (
    <ListContanier>
      <ListTitle>{search ? `"${search}"에 대한 검색 결과` : '전체 맥주'}</ListTitle>
      <ListContent>
        {data?.map((item: IBeers) => {
          return (
            <React.Fragment key={item.id}>
              <Beer id={item.id} name={item.name} score={item.avg} imageUrl={item.image_url} />
            </React.Fragment>
          );
        })}
      </ListContent>
    </ListContanier>
  );
};

export default List;

List.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
