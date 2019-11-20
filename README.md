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


## Candidate Notes

I did not complete the exercise, however I feel for good reason. By going the route of a state machine, I have
created a flexible, extensible system fot the type of form described.

I have a family and other code tests to complete and having spent a decent amount of time on this
code, I feel I should stop and focus efforts elsewhere.

But some of the things I could and would do next would be:

1. Actually display the Preview step. This would be straight forward as all the information is there in the state machine.
2. Get Jest and Enzyme working. I couldn't get them working and didn't have the time to debug the issues. And write some Tests.
3. Extract the INITIAL_STATE to a different file, and create a model like interface for extending the form.

And a lot more, but all things I just didn't have time for.
