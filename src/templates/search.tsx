import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
} from "@yext/pages";
import "../index.css";
import PageLayout from "../components/PageLayout";
import SearchResults from "../components/SearchResults";

export const getPath: GetPath<TemplateProps> = () => {
  return "/search";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: `YMDB Search`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Search: Template<TemplateRenderProps> = () => {
  return (
    <PageLayout>
      <SearchResults />
    </PageLayout>
  );
};

export default Search;
