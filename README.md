# Udacity Front End Web Developer Nanodegree
---
#### Project 6 _MyReads: A Book Tracking App_ by Holly Jordan

##Table of Contents

* Project Overview
* Specifications
* Instructions
* Considerations
* Important
* Acknowledgements
* [Contributing](#contributing)

## Specifications

In the MyReads project, I created a bookshelf app that allows you to search, select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application. This project will demonstrate the skills I have learned for using React and APIs, as well as javascript.


## Instructions

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

##Considerations

* React favors categorizing functionalities into components
* How to display books and shelves 
* How books will move from one shelf to another
* Routing between Home page and Search page
* Correct implementation of the provided Books API
* Search functionality

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Acknowledgements

* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
* [Udacity](https://www.udacity.com/), for creating this degree program, and providing me with education and endless support
* [JQuery](https://jquery.com/), for useful, time-saving shortcuts as well as help blogs
* [stackoverflow](https://stackoverflow.com/), for the collaborative forums and discussions which helped answer many of my questions
* [Mozilla Developer Network](https://developer.mozilla.org/en-US/), for so many resources and instructions

## Contributing

This repository is a project for the Udacity Front-End Web Developer Nanodegree. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
