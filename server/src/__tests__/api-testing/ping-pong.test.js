const request = require('../client')

describe('Ping Pong', () => {
  it('send ping response pong', async () => {
    const result = await request.get('/ping')
    expect(result.status).toBe(200)
    expect(result.body[0].message).toBe('pong')
  })

  it('send wrong url', async () => {
    const result = await request.get('/')
    expect(result.status).toBe(404)
    expect(result.body).toEqual({ error: { code: 404, message: 'NOT FOUND' } })
  })
})
