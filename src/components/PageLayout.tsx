import * as React from "react";
import { twMerge } from "tailwind-merge";
import Header from "./Header";
import {
  provideHeadless,
  SandboxEndpoints,
  SearchHeadlessProvider,
} from "@yext/search-headless-react";

type PageLayoutProps = {
  children: React.ReactNode;
  pageContainerStyle?: string;
  includeHeader?: boolean;
};

const searcher = provideHeadless({
  apiKey: import.meta.env.YEXT_PUBLIC_SEARCH_API_KEY,
  experienceKey: "ymdb",
  locale: "en",
  endpoints: SandboxEndpoints,
  verticalKey: "movie",
});

const PageLayout = ({
  children,
  pageContainerStyle,
  includeHeader = true,
}: PageLayoutProps): JSX.Element => {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <div
        className={twMerge(
          "min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-600 to-gray-900",
          pageContainerStyle
        )}
      >
        {includeHeader && <Header />}
        {children}
      </div>
    </SearchHeadlessProvider>
  );
};

export default PageLayout;
