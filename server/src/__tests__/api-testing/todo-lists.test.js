const request = require('../client')

describe('Todo Lists', () => {
  it('get all lists', async () => {
    const result = await request.get('/list')
    expect(result.status).toBe(200)
    expect(result.body).toBeTruthy()
  })
})
