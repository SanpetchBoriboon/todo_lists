const request = require('../client')

describe('Get /ping', () => {
  it('should get pong when req /ping', async () => {
    return request
      .get('/ping')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual([{ message: 'pong' }])
      })
  })
})
