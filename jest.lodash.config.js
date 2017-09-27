"use strict";
const _ = require("lodash/fp");
const config = require("./jest.config.js");

module.exports = _.merge(config, {
  moduleNameMapper: {
    __curry__: "lodash/curry"
  }
});
