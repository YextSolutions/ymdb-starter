import * as React from "react";
import { VerticalResults } from "@yext/search-ui-react";
import { useSearchActions } from "@yext/search-headless-react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";

const SearchResults = () => {
  const searchActions = useSearchActions();

  useEffect(() => {
    // grab the vertical key and query from the URL, useSearchActions to set them in state, and run a vertical or universal search
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query") ?? "";
    searchActions.setQuery(query);
    searchActions.executeVerticalQuery();
  }, []);

  return (
    <>
      <h1 className="text-center text-2xl text-white">Results</h1>
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
