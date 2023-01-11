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

const PageLayout = ({
  children,
  pageContainerStyle,
  includeHeader = true,
}: PageLayoutProps): JSX.Element => {
  return (
    <div
      className={twMerge(
        "min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-600 to-gray-900",
        pageContainerStyle
      )}
    >
      {includeHeader && <Header />}
      {children}
    </div>
  );
};

export default PageLayout;
