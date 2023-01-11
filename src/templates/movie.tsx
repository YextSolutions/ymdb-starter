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
import { Image } from "@yext/pages/components";
import "../index.css";
import PageLayout from "../components/PageLayout";

export const config: TemplateConfig = {
  stream: {
    $id: "movies",
    fields: [
      "id",
      "name",
      "slug",
      "c_backdropImage",
      "c_genres",
      "description",
      "c_releaseDate",
      "c_actors.name",
      "c_actors.headshot",
      "c_actors.slug",
    ],
    filter: {
      entityTypes: ["ce_movie"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
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

const movie: Template<TemplateRenderProps> = ({
  document,
}: TemplateRenderProps) => {
  const { name, c_backdropImage, c_genres, description, c_releaseDate } =
    document;

  const getReleaseYear = () => {
    const releaseDate = new Date(c_releaseDate);
    return releaseDate.getFullYear();
  };

  return (
    <PageLayout>
      <div className="flex items-center justify-center">
        <div className="relative p-8">
          <div className="w-[1280px]">
            <Image
              className="rounded-2xl"
              layout="fill"
              image={c_backdropImage}
            />
          </div>
          <div className="absolute top-16 left-16 w-96 py-4 ">
            <div className="flex flex-col items-center justify-center rounded-lg bg-gray-600 p-4 opacity-80 shadow-2xl">
              <div className="rounded-lg bg-stone-200 py-2 px-8">
                <h2 className="text-4xl font-extrabold">{name}</h2>
              </div>
              <div className="font-body px-6">
                <div className="flex-wrap py-4 text-white">
                  {getReleaseYear() + " "}
                  &#183;
                  {" " + c_genres.join(", ")}
                </div>
                <div className="text-white">{description}</div>
                <div className="flex-wrap py-4">
                  <p className="text-white">Starring: </p>
                  {document.c_actors?.map((actor, i) => (
                    <a
                      key={actor.name}
                      href={actor.slug}
                      className="pr-0.5 text-white"
                    >
                      <span className="hover:underline">{`${actor.name}`}</span>
                      <span>{`${
                        i < document.c_actors.length - 1 ? ", " : ""
                      }`}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default movie;
