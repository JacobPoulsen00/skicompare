const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const db = new sqlite3.Database('./rejser.sqlite'); //Find a way to update sqlite with rejser

const app = express();
app.use(cors());

const lowerCaseObjectKeys = (questionableKeys) => {
  // Valid SQL commands are case-insensitive, but JavaScript is case-sensitive
  let lowerCaseKeys = {};
  for (const prop in questionableKeys) {
    if (prop.toLowerCase().indexOf('count') !== -1) {
      lowerCaseKeys.count = questionableKeys[prop];
    } else {
      lowerCaseKeys[prop.toLowerCase()] = questionableKeys[prop];
    }
  }
  return lowerCaseKeys;
};
