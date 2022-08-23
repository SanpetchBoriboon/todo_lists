const request = require('../client')
const auth = require('../../middlewares/auth')

describe('Ping Pong', () => {
  it('send ping response pong', async () => {
    const result = await request.get('/ping')
    expect(result.status).toBe(200)
    expect(result.body).toEqual({
      results: [
        {
          message: 'pong',
        },
      ],
    })
  })
})
