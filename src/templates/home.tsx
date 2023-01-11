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
import SearchBar from "../components/SearchBar";

export const getPath: GetPath<TemplateProps> = () => {
  return "index.html";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: `YMBD`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Home: Template<TemplateRenderProps> = () => {
  return (
    <PageLayout
      includeHeader={false}
      pageContainerStyle="flex flex-col justify-center"
    >
      <div className="my-auto mx-auto w-[500px] ">
        <h1 className="font-extra-bold font-heading text-center text-7xl text-white">
          YMBD
        </h1>
        <SearchBar />
      </div>
    </PageLayout>
  );
};

export default Home;
