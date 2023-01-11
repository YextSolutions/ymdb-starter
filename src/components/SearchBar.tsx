import * as React from "react";
import {
  onSearchFunc,
  SearchBar as SB,
  SearchBarProps,
} from "@yext/search-ui-react";

const SearchBar = (props: SearchBarProps): JSX.Element => {
  const handleSearch: onSearchFunc = ({
    query,
    verticalKey,
  }: {
    verticalKey?: string;
    query?: string;
  }) => {
    let queryParams = "";

    if (query) {
      queryParams += `?query=${query}`;
    }

    if (verticalKey) {
      queryParams += `&verticalKey=${verticalKey}`;
    }

    window.location.href = `/search${queryParams}`;
  };

  return <SB {...props} onSearch={handleSearch} />;
};

export default SearchBar;
