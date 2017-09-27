"use strict";
const path = require("path");
const { rollup } = require("rollup");
const alias = require("rollup-plugin-alias");
const minify = require("babel-minify");
const convert = require("convert-source-map");
const fs = require("fs-extra");
const _ = require("lodash/fp");

const extendInputConfig = _.merge({ input: "./src/index.js" });

const extendOutputConfig = _.merge({ name: "reiter" });

const formats = [
  {
    format: "es",
    extension: "mjs"
  },
  {
    format: "cjs",
    extension: "common.js"
  },
  {
    format: "umd",
    extension: "js"
  }
];
const curries = [
  {
    name: "",
    source: "./internal/curry.js",
    exclude: false
  },
  {
    name: "lodash",
    source: "lodash/curry",
    exclude: true
  }
];

async function build({ curryOptions, formatOptions }) {
  const bundle = await rollup(
    extendInputConfig({
      external: curryOptions.exclude ? [curryOptions.source] : [],
      plugins: [alias({ __curry__: curryOptions.source })]
    })
  );
  const { code, map } = await bundle.generate(
    extendOutputConfig({
      format: formatOptions.format,
      sourcemap: true
    })
  );
  const minifiedResult = minify(
    code,
    { mangle: { topLevel: true } },
    { sourceMaps: true, inputSourceMap: map }
  );
  const sourceFile = curryOptions.name
    ? `reiter.${curryOptions.name}.${formatOptions.extension}`
    : `reiter.${formatOptions.extension}`;
  const mapFile = `${sourceFile}.map`;
  const sourceMap = convert.fromObject(minifiedResult.map);
  return Promise.all([
    fs.writeFile(path.join(__dirname, "dist", mapFile), sourceMap.toJSON()),
    fs.writeFile(
      path.join(__dirname, "dist", sourceFile),
      minifiedResult.code + "\n" + convert.generateMapFileComment(mapFile)
    )
  ]);
}

async function buildAll() {
  const builds = [];
  for (const formatOptions of formats) {
    for (const curryOptions of curries) {
      builds.push(build({ curryOptions, formatOptions }));
    }
  }
  await Promise.all(builds);
}

buildAll().catch(error => {
  console.log(error);
});
