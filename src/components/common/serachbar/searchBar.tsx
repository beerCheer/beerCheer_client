import { useRouter } from 'next/router';

import SearchIcon from '../@Icons/searchIcon';
import { SearchBarContainer, Input } from './styeld';

const SearchBar = () => {
  const router = useRouter();

  return (
    <SearchBarContainer main={router.route === '/' ? 'main' : ''}>
      <SearchIcon width={37} height={35} />
      <Input placeholder="맥주 이름" />
    </SearchBarContainer>
  );
};

export default SearchBar;
