<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

<h1 align="center">sh-loader</h1>

<p align="center">A sh loader for webpack. Transform .sh file to an object.</p>

<p align="center">
  <a href="https://npmjs.com/package/sh-loader">
    <img alt="npm" src="https://img.shields.io/badge/npm-v5.0.0-blue" />
  </a>
  <a href="https://nodejs.org">
    <img alt="npm" src="https://img.shields.io/node/v/sh-loader.svg" />
  </a>
  <a href="https://codecov.io/gh/qinhua/sh-loader">
    <img alt="coverage" src="https://codecov.io/gh/qinhua/sh-loader/branch/main/graph/badge.svg?token=KSB3Z41HLW" />
  </a>
  <a href="https://packagephobia.now.sh/result?p=sh-loader">
    <img alt="size" src="https://packagephobia.now.sh/badge?p=sh-loader" />
  </a>
</p>


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
        use: "sh-loader",
      },
    ],
  },
};
```

Now, you can import `.sh` file.

```js
import sh from './mongod.sh'
console.log(sh)

// eventually converted to this type of JSON
{
  origin: "mongod --dbpath db --logpath log/mongod.log --bg=red", // source
  originArr: ["mongod --dbpath db --logpath log/mongod.log --bg=red"], // source array split with '\n'
  detail: [{
    command: "mongod", // command name
    params: {
      _: [
        "mongod"
      ],
      dbpath: "db",
      logpath: "log/mongod.log",
      bg: "red"
    } // command params
  }]
}
```

And run `webpack` via your preferred method.

## Options

|   Name    |    Type     | Default | Description          |
| :-------: | :---------: | :-----: | -------------------- |
| **parse** | `{Boolean}` | `true`  | Enable/Disable parse |

## License

[MIT](./LICENSE)
