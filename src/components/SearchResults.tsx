import * as React from "react";
import {
  CardProps,
  VerticalResults,
  StandardCard,
} from "@yext/search-ui-react";
import Ce_Movie from "../types/movies";
import { Image } from "@yext/pages/components";
import { useSearchActions } from "@yext/search-headless-react";
import { useEffect } from "react";

const MovieCard = ({ result }: CardProps<Ce_Movie>) => {
  const movie = result.rawData;

  return (
    <a href={movie.slug}>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {movie.c_moviePoster && (
            <Image
              layout="fixed"
              image={movie.c_moviePoster}
              height={300}
              width={200}
            />
          )}
          <h1 className="text-2xl font-bold text-white">{movie.name}</h1>
        </div>
      </div>
    </a>
  );
};

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
          verticalResultsContainer: "grid grid-cols-3 py-8 gap-4",
        }}
      />
    </>
  );
};

export default SearchResults;
