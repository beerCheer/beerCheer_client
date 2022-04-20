import React from 'react';

import Search from '../@Icons/Search';
import { Container, Input } from './Styeld';

const SearchBar = () => {
  return (
    <Container>
      <Search />
      <Input placeholder="맥주 이름" />
    </Container>
  );
};

export default SearchBar;
