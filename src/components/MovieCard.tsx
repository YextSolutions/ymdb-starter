import * as React from "react";
import Ce_Movie from "../types/movie";
import { Image } from "@yext/pages/components";
import { CardProps } from "@yext/search-ui-react";

const MovieCard = ({ result }: CardProps<Ce_Movie>) => {
  const movie = result.rawData;

  return (
    <a href={movie.slug}>
      <div className="w-64 h-96 flex flex-col rounded-lg relative group transition duration-100 ease-linear hover:scale-105">
        {movie.c_moviePoster && (
          <Image
            className="rounded-lg shadow-movie"
            image={movie.c_moviePoster}
          />
        )}
      </div>
    </a>
  );
};

export default MovieCard;
