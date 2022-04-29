import { useRouter } from 'next/router';
import React, { ChangeEvent, KeyboardEvent } from 'react';

import SearchIcon from '../@Icons/searchIcon';
import { SearchBarContainer, Input } from './styeld';

const SearchBar = () => {
  const { pathname, push } = useRouter();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const KorExp = new RegExp(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/);

    if (KorExp.test(e.target.value)) {
      e.target.placeholder = '영문 입력만 가능합니다';
    } else {
      setSearchQuery(e.target.value);
    }
  };

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>): void => {
    const searchKeyword = (e.target as HTMLInputElement).value;
    if (e.key === 'Enter' && searchQuery) push(`/list?search=${searchKeyword}`);
  };

  return (
    <SearchBarContainer main={pathname}>
      <SearchIcon width={24} height={24} />
      <Input placeholder="맥주 이름" onChange={handleOnChange} onKeyDown={handleSearch} value={searchQuery} />
    </SearchBarContainer>
  );
};

export default SearchBar;
