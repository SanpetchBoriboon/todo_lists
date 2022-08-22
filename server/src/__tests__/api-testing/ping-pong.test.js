const request = require('../client')

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

  it('send wrong url', async () => {
    const result = await request.get('/')
    expect(result.status).toBe(404)
    expect(result.body).toEqual({
      code: 404,
      statusName: 'NOT_FOUND',
      message:
        'The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.',
    })
  })
})
