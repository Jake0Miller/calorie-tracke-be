const shell = require('shelljs')
const request = require("supertest")
const app = require('../app')

describe('api', () => {
  describe('Test GET /', () => {

    test('should reach index path', async () => {
      return request(app)
      .get('/')
      .send()
      .then(response => {
        expect(response.status).toBe(200)
      })
    })

  })
})
