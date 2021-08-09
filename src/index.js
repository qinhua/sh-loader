const minimist = require('minimist')

module.exports = function (source) {
  if (!source) return ''
  const options = Object.assign({
    parse: true // parse the sh file to an object
  }, this.query)

  try {
    if (options.parse) {
      const originArr = source.split(/\n/)
      const alls = originArr.map(item => minimist(item.split(/\s/)))
      const result = {
        origin: source,
        originArr,
        detail: alls.map(cur => {
          return {
            command: cur['_'][0],
            params: cur
          }
        })
      }
      return `export default ${JSON.stringify(result)}`
    } else {
      return `export default ${JSON.stringify(source)}`
    }
  } catch (error) {
    return new Error(error)
  }
}