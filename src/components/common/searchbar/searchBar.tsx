import { useRouter } from 'next/router';

import SearchIcon from '../@Icons/searchIcon';
import { SearchBarContainer, Input } from './styeld';

const SearchBar = () => {
  const { pathname } = useRouter();

  return (
    <SearchBarContainer main={pathname}>
      <SearchIcon width={37} height={35} />
      <Input placeholder="맥주 이름" />
    </SearchBarContainer>
  );
};

export default SearchBar;
