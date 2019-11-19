# SH:24 Front End Code Test

## Installation

To get started, clone this repository and follow these instructions:

1. Run `yarn install`
2. Run `yarn dev` to start the development server (Standard config uses port 3000, so you may need to stop any other services using this port.)
3. Open http://localhost:3000 in a browser


## Running Integration Tests

The end to end tests have been written using the cypress.io tool.

To run the specs, `yarn run cypress open`. This will open the Cypress testing electron app that will
list all the specs available to run, which are run in a real browser.
