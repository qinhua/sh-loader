const loader = require('../src/index')

describe('Test Output', () => {
  test('output-parse', () => {
    const ctx = {}
    const src = 'mongod --dbpath db'
    const res = loader.call(ctx, src)
    expect(res).toBe("export default {\"origin\":\"mongod --dbpath db\",\"originArr\":[\"mongod --dbpath db\"],\"detail\":[{\"command\":\"mongod\",\"params\":{\"_\":[\"mongod\"],\"dbpath\":\"db\"}}]}")
  })
  test('output-noparse', () => {
    const ctx = {
      query: {
        parse: false
      }
    }
    const src = 'mongod --dbpath db'
    const res = loader.call(ctx, src)
    expect(res).toBe("export default \"mongod --dbpath db\"")
  })
  test('throw-error', () => {
    const src = 123456
    const res = loader.call({}, src)
    expect(res.toString().includes('Error: TypeError')).toBe(true)
  })
})