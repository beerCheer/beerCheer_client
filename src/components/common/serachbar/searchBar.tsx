import SearchIcon from '../@Icons/searchIcon';
import { SearchBarContainer, Input } from './styeld';

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchIcon width={37} height={35} />
      <Input placeholder="맥주 이름" />
    </SearchBarContainer>
  );
};

export default SearchBar;
