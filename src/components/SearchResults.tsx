import * as React from "react";
import { VerticalResults } from "@yext/search-ui-react";
import { useSearchActions } from "@yext/search-headless-react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";

const SearchResults = () => {
  const searchActions = useSearchActions();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query") ?? "";
    searchActions.setQuery(query);
    searchActions.executeVerticalQuery();
  }, []);

  return (
    <>
      <VerticalResults
        CardComponent={MovieCard}
        customCssClasses={{
          verticalResultsContainer:
            "grid grid-cols-4 py-8 gap-8 place-items-center",
        }}
      />
    </>
  );
};

export default SearchResults;
