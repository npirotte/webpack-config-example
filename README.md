[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

[![Build Status](https://travis-ci.org/npirotte/webpack-config-example.svg?branch=master)](https://travis-ci.org/npirotte/webpack-config-example)

![Deps Status](https://david-dm.org/npirotte/webpack-config-example.svg)

# Webpack configuration example

## Summary

This project is a little starter showing how to set up a flexible and maintenable webpack configuration
for building javascript project.

Article available here on my [developer blog](http://blog.npirotte.be/a-strong-development-webpack-configuration/)

## Technologies

### Building

Webpack with Babel loader for javascript and css & style loaders for stylesheets.

The configuration is managed with [webpack-config](https://www.npmjs.com/package/webpack-config).

### Linting

EsLint with standat code style ruleset.

### Testing

Karma and Jasmine ruinning on phantomJs.

### Sample application

The sample application uses ReactJs.

## Commands

Please use npm command instead of native script commands.

```bash
> npm run test
```

Run unit test

Lint the app code with eslint.

```bash
> npm run build
```

Build a production vertion of the application.

```bash
> npm run start
```

Launch a dev server to test the application.

## Test the app

To test the app, first built it with the `npm run build` command,
then run `npm start` command to lauch the index.html in a server.