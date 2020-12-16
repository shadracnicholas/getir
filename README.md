# getir

## Overview

A RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format

## Requirements

For development, you will need [Node.js](https://nodejs.org) and a node global package manager (yarn or npm)

## Installation

```
$ git clone https://github.com/shadracnicholas/getir

$ cd getir

$ npm install
```

## Running

```
$ npm start
```

Your app should now be running on [localhost:8080](http://localhost:3000/).

## Usage

The request payload will include a JSON with 4 fields;

- “startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format
- “minCount” and “maxCount” are for filtering the data. Sum of the “count” array in the documents should be between “minCount” and “maxCount”
- Sample: { "startDate": "2016-01-26", "endDate": "2018-02-02", "minCount": 2700, "maxCount": 3000 }

## API

The only endpoint of the API is 'api/search'.

## Postman Collection For Testing

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/collections/a14dc50c81d8d42fb9c3)

## Tests

[Jest](https://jestjs.io/) framework is used for test coverages.

```
$ npm run test
```
