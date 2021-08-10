<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![cover][cover]][cover-url]
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

Now, you can import sh file.
```
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

[npm]: https://img.shields.io/npm/v/sh-loader.svg
[npm-url]: https://npmjs.com/package/sh-loader
[node]: https://img.shields.io/node/v/sh-loader.svg
[node-url]: https://nodejs.org
[cover]: https://codecov.io/gh/qinhua/sh-loader/branch/main/graph/badge.svg?token=KSB3Z41HLW
[cover-url]: https://codecov.io/gh/qinhua/sh-loader
[size]: https://packagephobia.now.sh/badge?p=sh-loader
[size-url]: https://packagephobia.now.sh/result?p=sh-loader