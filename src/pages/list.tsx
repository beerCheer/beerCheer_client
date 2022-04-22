import React from 'react';
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
  return (
    <HomeLayout>
      <ListContanier>
        <ListTitle>전체 페이지</ListTitle>
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
