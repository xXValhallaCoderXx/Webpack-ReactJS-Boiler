# React JS + Webpack Build Config

![alt text](https://brainhub.eu/static/media/reactjs-brainhub-development.9ea94b0d.png "React!")

This is a basic React JS boilerplate, bootstrapped with a few other features to allow users to get up and going straight off the bat with a development enviroment, for quick prototyping.

It makes use of Babel, to allow us to use ES6 and all the latest features which JS has to bring to the table.

## Core Features
- **Multiple Enviroment Configs** - Different enviroment for depening on use case: development, staging, production
- **Babel**: Use all the shiny new things in the world of JS
- **CSS Modules + SASS**: Write composable CSS that's co-located with your components for complete modularity, parses the CSS on production to add vendor prefixes
- **Code Formatting**: IDE linting with Prettier to allow enforces a consistent style , parsing through the code and checks its format is aligned with Prettiers own rules.
- **Git Hooks**: Using git hooks, easily automate dev processes to happen, before you push your code to the repo. 
- **Build Optimizations**: Tree shaking, minification, image optimizations etc

### Development Features
- **Hot Module Reloading**: HMR Ready - Keep application state while making live changes to your code!
**WIP**

### Production Features
**WIP**

## Getting Started

Getting started is simple! The directions below will get you up and running to get hacking in no time!

### Prerequisites

Ensure you to have the latest Node LTS ensured globally on your system, you can download it from [HERE](https://nodejs.org/en/).

### Installing

1. Clone this repo using `git clone https://github.com/xXValhallaCoderXx/Webpack-V3-React-HMR.git`.
2. Move to the appropriate directory.
3. Run `npm -i` or `yarn` in order to install dependencies.<br />

## Development

1. Run `npm start` or `yarn start` to start the development enviroment<br />
2. Go to browser and visit: `localhost:8080`.

This will start up a webpack dev server to allow for local development of your application.

### CLI Scripts
The development enviroment has various commands in the `package.json` which we are able to run via the CLI, which are as follows:

- `lint:fix-js` - Runs prettier will auto-format any code which may not be formatted correctly.
- `lint:js`: This will provide feedback via the CLI if there are currently any linting errors.
- `start`: Starts the development server on localhost:8080 by default.
- `start:lint`: Starts the development server, with linter, any code formatted incorrectly results in errors dislayed via CLI.
- `stats`: Provides a .json file of the build output, can be used with other applications for analyzing the output
- `build`: Builds the application into a bundle and prepare for deployment.

## Deployment
The build script will run several optimizations and preapre a single `.html` file which will link to the static files (`.js` and `.css`) as an application that will be ready to be served via a server.

1. Run `yarn build` or `npm run build`
2 Files will output in the `build` directory

## Tests
Unit-tests are created with Jest and Enzyme,
Snapshots are also made use of to allow for quicker coverage and a simple way of monitoring changes to components.

### Test Commands

**Running Tests**
1. Run `yarn jest` or `npm run jest`
2. Tests will begin and output result in CLI

***Update Snapshots***
1. Run `jest:snapshot` or `npm run jest:snapshot` to update snapshots
2. Output result of successfully updated snapshots shown in CLI

