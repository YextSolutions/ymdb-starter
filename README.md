# YMDB Starter

This repository provides a starter for building an IMDB clone with Yext Pages and Search. See the section on adding more data if you would like to add more Movies and Actors to your Knowledge Graph and Search Experience.

## Getting Started

### Prerequisites

1. Have the Yext CLI installed: https://hitchhikers.yext.com/guides/cli-getting-started-resources/01-install-cli/
1. Have Deno installed, version 1.21.0 or later: https://deno.land/manual/getting_started/installation
1. Have node installed, version 17: https://nodejs.org/en/download/

   - It's recommend to use nvm: https://github.com/nvm-sh/nvm#installing-and-updating or via brew `brew install nvm`

1. Have a Yext account. You can sign up for a free account here: https://hitchhikers.yext.com/create-playground-account


### _Recommended_: Set up with `pages new` 
Once you have the prerequisites installed, we recommend running `yext pages new` which will guide you through the setup flow. Alternatively, you can clone this repo directly by following the directions below. 

### Clone this repo and install dependencies

```shell
git clone https://github.com/yext/empty-starter
cd empty-starter
npm install
```

### Recommended Development Flow

While _developing locally_, run the following command:

```
npm run dev
```

This command will start a Vite-powered dev server that will enable hot-reloading. Additionally, the command will generate a `localData` directory that contains a subset of your Knowledge Graph data. This command is automatically in "dynamic" mode, which means it will pull data updates automatically from your Knowledge graph, so real-time data changes in your Yext account will be reflected in your local dev site.

NOTE: Whenever you make changes to your stream definitions, you must re-run `npm run dev` for the system to update the `features.json` and the required entities to power your site. 

_Before committing_ your code, we recommend running the following command:
```
npm run build:serve
``` 

This command will generate a production build of your site, so you can ensure there are no build errors or unexpected behavior. This build step replicates the production build environment used in the Yext system, and serves your data at `localhost:8000`.

In practice, development builds (via `npm run dev`) and production builds compile and bundle assets differently. For local development, ES Modules are loaded directly by the browser, allowing fast iteration during local development and also allows for hot module replacement (HMR). Other things like CSS are also loaded directly by the browser, including linking to sourcemaps. During a production build all of the different files are compiled (via ESBuild for jsx/tsx) and minified, creating assets as small as possible so that the final html files load quickly when served to a user. Tree-shaking also occurs during the build step, in which any unused dependencies are removed from your final build. 

### Other Useful commands

`yext init` - Authenticates the Yext CLI with your Yext account

`yext pages generate-test-data` - pull an example set of `localData` from your account. This command is packaged within `npm run dev'. 

`npm run build` - Runs a production build against your `localData`: part one of `npm run build:serve`

`npm run serve` - Runs a local server against your production-built files: part two of `npm run build:serve`

`npm run fmt` - Automatically formats all code

`npm run lint` - Run ESLint to check for errors and warnings

## Repository Layout

```
root
└───localData
└───sites-config
│   │   ci.json
└───src
│   │   index.css
│   │
│   └───components
│   │
│   └───templates
│       │   location.tsx
│       │   robots.ts
│       │   static.tsx
│   │
│   └───types
```

### localData

Contains example stream documents that are used while local developing. By default this repo contains example files that work with the provided example templates. You can generate real stream documents specific to your Yext account via `yext pages generate-test-data`.

NOTE: You normally wouldn't want to check in the localData folder as it's only used for local dev. It is gitignored by default.

### sites-config

Contains a single `ci.json` file. This file defines how the Yext CI system will build your project. It is not used during local dev. However, it is used when running a local production build (i.e. `yext pages build`).

NOTE: A `features.json` file will automatically be generated during CI build for you based on the template configs defined in your templates. If this file doesn't exist then `yext pages build` will implicitly generate a new one when it calls `npm run build:local` (defined in `sites-config/ci.json`). In the recommended devleopment flow with `npm run dev`, the `features.json` will be automatically generated.

NOTE: After changing your stream definitions, you should rerun `yext pages generate` and `yext pages generate-text-data` to ensure your local build pulls in the required data from the Knowledge Graph

### src

#### components

This is where all of your custom components _may_ live. This folder is not required and you can set up your own custom folder structure for your own components in any way you'd like, as long as it lives in the `src` directory.

#### templates

Required. This is where your actual templates live. There are effectively two types of `components:

1. stream-based templates: those that have an exported `config`
1. static templates: those that don't have an exported `config`.

#### types

Here you can define any custom TypeScript types you need.

#### index.css

Not required. In this example this sets up Tailwind CSS.

### vite.config.js

Vite is now a first class member of the starter! This file defines any custom Vite configuration you want, giving you full control over your setup. Specifically, it will allows users to pass additional configuration options to the vite-plugin-yext-sites-ssg plugin when they become more widely available.

### Everything else

The rest of the files are basic config setup common to many other React projects. In this example we've enabled:

1. Tailwind CSS (which leverages PostCSS) - used for easy styling
1. ESLint - catches errors in your code
1. Prettier - formats your code (you can add .prettierrc to override any default settings)
1. TypeScript - adds typing to Javascript for a better developer experience

## Adding More Data to Your Account

Assuming that you uploaded everything in the `platform-config` folder to your account with `yext pages new`, you will see two connectors in your account: Get Movies and Get Actors for Movies. Both use the Movie DB to fetch data and require and API Key. If you want to use either connector to add more entities, sign up for a free account and get an API Key [here](https://developers.themoviedb.org/3/getting-started/introduction).

### Get Movies

This connector pulls in movies from the The Movie DB Discover API. To run it, follow these steps:

1. Navigate to Knowledge Graph > Connectors within your Yext Account. Click on the Get Movies Connector.
2. Click Edit Configuration. In step 2, add API Key as the authentication method. Here, add `api_key` as the key and your Movie DB API Key as the value.
3. (Optional) Add other [query parameters](https://developers.themoviedb.org/3/discover/movie-discover) such as a specific release year or language.
4. (Optional) Add pagination settings to grab multiple pages of movies.
5. Save your connector and run it!

### Get Actors for Movies

This connector iterates on all the movies in the Knowledge Graph, creates the top 3 actors for each movie, and links the movies and actors together. It relies on some functions in a plugin that has already been added to your account. However, you will need to edit some configuration files in the Admin Console to add your Movie DB API key to the existing function. To run this connector, follow these steps.

1. Navigate to the Admin Console in your account. Navigate to the `_resource.json` file in the `ymdb-plugin`: 

```
/
└───answers
└───km
└───pages
└───platform
│   │   account-features.json
│   └───plugin
|       └───ymdb-plugin 
│           │   _resource.json
│           │   mod.ts
│           │   types.ts
```
2. Add your Movie DB API Key as the `MOVIE_DB_API_KEY`. Click Apply after you make this change.
3. Navigate to the Developer Console in your Yext Account. Click Add an App. Give your app a name and create it.
3. Click on API Credentials. Add the Knowledge API > Entities endpoint. Add the Read-Only permission.
4. Copy your API Key.
4. Navigate to Knowledge Graph > Connectors within your Yext Account. Click on the Get Actors for Movies Connector.
5. Click Edit Configuration. In step 2, add API Key as the authentication method. Here, add `api_key` as the key and your new App API Key as the value.
6. Save the connector and run it!



