# Mutch

> [!IMPORTANT]
> This repository is archived and is no longer actively maintained. The website was built around JSONP-based data requests, an approach that is no longer available in its original environment. The Google Apps Script API used by the application has also been deprecated, so the website is no longer functional without replacing its data integration.

Mutch is a browser-based song guessing game. It loads song collections from a Google Spreadsheet, lets players choose a genre, and tracks correct and incorrect answers across a 10-song round.

## Features

- Load song data from a Google Spreadsheet ID
- Browse the available genres
- Play randomized 10-song rounds
- Reveal song, artist, alias, Spotify, and YouTube information
- Mark answers as correct or incorrect
- View the final score and restart a round
- Responsive layout for desktop and mobile screens

## Tech stack

- React 15
- Redux, Redux Thunk, and Immutable.js
- jQuery JSONP requests
- Sass
- Webpack 3 and Babel 6

## Getting started

### Prerequisites

This project uses a legacy JavaScript toolchain. Node.js 8 with npm 6 is recommended for compatibility, particularly with `node-sass@4`.

### Installation

```bash
git clone https://github.com/erozak/mutch.git
cd mutch
npm install
```

### Development

Start the Webpack development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

> The existing `npm start` script points to a server entry file that is not included in this repository. Use `npm run dev` to run the application locally.

### Production build

The repository does not define a build script, but Webpack can be invoked directly:

```bash
./node_modules/.bin/webpack --config webpack.config.js
```

The generated files are written to `dist/`.

## How to play

1. Enter a Google Spreadsheet ID. A sample ID is pre-filled in the app.
2. If access is required, select **Auth** and sign in to Google.
3. Select **Get Datas** to load the spreadsheet's genres.
4. Choose a genre to begin a 10-song round.
5. Open each song, check its details, and mark the answer correct or incorrect.
6. Review the score after all songs have been answered.

## Project structure

```text
assets/             Static images
origin/             Original static prototype
sass/               Global, component, and element styles
src/
  actions/          Redux actions and asynchronous data loading
  components/       Presentational React components
  containers/       Redux-connected components
  models/           Initial state, action types, and external URLs
  reducers/         Data and UI reducers
  store/            Redux store configuration
  index.html        HTML template
  index.js          Browser entry point
webpack.config.js   Development and production bundling
```

## Data source

The frontend was designed to retrieve spreadsheet data through the Google Apps Script endpoint configured in [`src/models/path.js`](src/models/path.js). Requests use JSONP and support two operations:

- `getInitData` loads available genres.
- `getGenreSongs` loads 10 songs for a selected genre.

This integration is retained for historical reference only. JSONP is unavailable in the original deployment environment, and the API endpoint used by the project is deprecated. Restoring the application would require replacing the endpoint and migrating the requests to a supported mechanism such as `fetch` with a CORS-enabled API.

The app expects each song to include a title, an `artists` list, an optional `alias` list, and Spotify/YouTube link data.

## License

This project is licensed under the ISC License, as declared in [`package.json`](package.json).
