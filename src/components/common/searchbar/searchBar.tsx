import { useRouter } from 'next/router';

import SearchIcon from '../@Icons/searchIcon';
import { SearchBarContainer, Input } from './styeld';

const SearchBar = () => {
  const { pathname } = useRouter();

  return (
    <SearchBarContainer main={pathname}>
      <SearchIcon width={24} height={24} />
      <Input placeholder="맥주 이름" />
    </SearchBarContainer>
  );
};

export default SearchBar;
