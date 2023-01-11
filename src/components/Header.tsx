import * as React from "react";
import SearchBar from "./SearchBar";

const Header = (): JSX.Element => {
  return (
    <div className="flex items-center justify-between px-16">
      <h1 className="font-extra-bold py-4 text-center text-7xl text-white">
        YMBD
      </h1>
      <div className="w-96">
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
