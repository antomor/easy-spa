# Easy single-page-application routing
This project represents a custom implementation of routing.

## Components

- **router**: it is used as routes container
- **route**: it identifies a single route with the scope of managing the pages
- **page**: a single component view

## Installation
Before running the project is is necessary to install all the dependencies by means of:
1. `bower install`
2. `npm install`

For running the project instead, [Gulp](https://gulpjs.com/) is required.
- `gulp serve` for running a development server
- `gulp serve:dist` for build the project for production
- `gulp serve:test` for running unit-tests

### Notes
The project has been built with [Yeoman](http://yeoman.io/), and in particular byt using the generator-webapp 3.0.1 .