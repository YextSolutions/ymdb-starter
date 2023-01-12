import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
  TemplateConfig,
} from "@yext/pages";
import "../index.css";
import PageLayout from "../components/PageLayout";
import { Image } from "@yext/pages/components";

export const config: TemplateConfig = {
  stream: {
    $id: "actors",
    fields: [
      "id",
      "name",
      "slug",
      "c_birthDate",
      "headshot",
      "c_bio",
      "c_birthPlace",
      "c_movies.name",
      "c_movies.slug",
    ],
    filter: {
      entityTypes: ["ce_actor"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ? document.slug : document.id.toString();
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const actor: Template<TemplateRenderProps> = ({
  document,
}: TemplateRenderProps) => {
  const { name, c_birthDate, headshot, c_bio, c_birthPlace, c_movies } =
    document;

  return (
    <PageLayout>
      <div className="flex items-center justify-center">
        <div className="grid w-[1280px] grid-cols-2 bg-gray-600 py-4">
          <div className="w-96">
            <div className="flex flex-col items-center justify-center rounded-lg  p-4 opacity-80 shadow-2xl">
              <div className="rounded-lg bg-stone-200 py-2 px-8">
                <h2 className="text-4xl font-extrabold font-heading">{name}</h2>
              </div>
            </div>
            <div className="font-body px-8 py-2 text-white">
              <p className="">Born: {c_birthDate}</p>
              <p>Birthplace: {c_birthPlace}</p>
              <div className="py-2">
                <p className=" line-clamp-6">{c_bio}</p>
              </div>
              <p className="font-title text-2xl font-extrabold">Movies</p>
              <ul className="list-inside list-disc">
                {c_movies.map((movie) => (
                  <li key={movie.name}>
                    <a className="hover:underline" href={`/${movie.slug}`}>
                      {movie.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-4">
            <Image className="rounded-2xl" layout="fill" image={headshot} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default actor;
