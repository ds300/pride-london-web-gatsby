# pride-london-web-gatsby

This project is a community effort to release a brand new web platform to supplant and improve upon the product currently available at prideinlondon.org.

## Contributing

Want to help out? That's amazing! The [Contribution Guide](https://github.com/MarcelCutts/pride-london-web/blob/master/CONTRIBUTING.md) should hopefully get you on your way.

Check the [issues](https://github.com/kiraarghy/pride-london-web-gatsby/issues) section of the repo for tickets to pick up.

## Install

1.  Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

2.  Pull the repo.
3.  Install nvm from [here](https://github.com/creationix/nvm)
4.  Make sure you're using the correct version of node `nvm use`
5.  Ensure you have [yarn](https://yarnpkg.com/en/docs/install) installed. 
6.  Run yarn in the root directory to pull in dependencies.

## ENVIRONMENT VARIABLES

1.  Create a `.env.development` file in the root of the project.
2.  In the file, add the contentful space ID for space Pride Web Test after the equal sign, for example `CONTENTFUL_ID=123456`
3.  Do the same for the access token by defining the`CONTENTFUL_TOKEN`

## Running 🏃

Then you can run it by:

```sh
gatsby develop
```

## Tests

Test will be run using Jest + Enzyme. Can be run with:

```sh
yarn test
```

or to watch:

```sh
yarn test:watch
```

## Layout
Grid layout will be done via [Grid-Styled](http://jxnblk.com/grid-styled/). Breakpoints and spacing configuration can be found in `src/theme/theme.js`. See `src/grid/grid.js` to see how the Container, Column and Row components are made. Example of usage can be found on the events page on `src/pages/events.js`. Please see [Official Documentation](https://github.com/jxnblk/grid-styled) on how to set widths for your columns and set alignment.

## Styling

Styling will be done via [Styled-Components](https://www.styled-components.com/).

## Linting

This project uses **ESlint** with **Prettier**

To run the linter...

```sh
yarn lint
```

To apply Prettier formatting to all `.js` files...

```sh
yarn format
```
