import React from 'react';
import { useRouter } from 'next/router';

import HomeLayout from '../components/common/layout/layout';
import Beer from '../components/common/beer/beer';

import Data from '../components/main/dummy';

import { ListContanier, ListContent, ListTitle } from '../styles/list';

interface DummyProps {
  id: number;
  name: string;
  score: number;
  imageUrl: string;
}

const List = () => {
  const router = useRouter();
  const { search } = router.query;

  return (
    <HomeLayout>
      <ListContanier>
        <ListTitle>{search ? `"${search}"에 대한 검색 결과` : '전체 맥주'}</ListTitle>
        <ListContent>
          {Data.map((item: DummyProps) => {
            return <Beer key={item.id} id={item.id} name={item.name} score={item.score} imageUrl={item.imageUrl} />;
          })}
        </ListContent>
      </ListContanier>
    </HomeLayout>
  );
};

export default List;
