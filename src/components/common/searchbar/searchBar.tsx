import { useRouter } from 'next/router';
import { KeyboardEvent } from 'react';

import SearchIcon from '../@Icons/searchIcon';
import { SearchBarContainer, Input } from './styeld';

const SearchBar = () => {
  const { pathname, push } = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const searchKeyword = (e.target as HTMLInputElement).value;

    if (e.key === 'Enter') push(`/list?search=${searchKeyword}`);
  };

  return (
    <SearchBarContainer main={pathname}>
      <SearchIcon width={24} height={24} />
      <Input onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => handleSearch(e)} placeholder="맥주 이름" />
    </SearchBarContainer>
  );
};

export default SearchBar;
