<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![tests][tests]][tests-url]
[![size][size]][size-url]

# sh-loader

A sh loader for webpack. Tranform .sh file to object.

## Getting Started

To begin, you'll need to install `sh-loader`:

```console
npm install sh-loader --save-dev
```

Then add the loader to your `webpack` config. For example:

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.sh$/,
        use: "sh-loader"
      },
    ],
  },
};
```

You can import the sh file
```js
import sh from './xxx.sh'
console.log(sh)
```

And run `webpack` via your preferred method.

## Options

|      Name         |      Type      |     Default    |  Description    |
| :---------------: | :------------: | :------------: | -------------   |
| **parse**         |   `{Boolean}`  |   `true`       | Enable/Disable parse|  

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/less-loader.svg
[npm-url]: https://npmjs.com/package/less-loader
[node]: https://img.shields.io/node/v/less-loader.svg
[node-url]: https://nodejs.org
[tests]: https://github.com/webpack-contrib/less-loader/workflows/sh-loader/badge.svg
[tests-url]: https://github.com/webpack-contrib/sh-loader/actions
[cover]: https://codecov.io/gh/webpack-contrib/sh-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/less-loader
[size]: https://packagephobia.now.sh/badge?p=less-loader
[size-url]: https://packagephobia.now.sh/result?p=less-loader