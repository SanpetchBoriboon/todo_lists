const { response } = require('express')
const responseStatusMessage = require('../../utils/response-status-message')
const request = require('../client')
describe.skip('Error Status', () => {
  it('should error message 404', () => {
    const actual = responseStatusMessage(404)
    expect(actual).toEqual({
      code: 404,
      statusName: 'NOT_FOUND',
      message:
        'The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.',
    })
  })

  it('should send error message when do not auth', async () => {
    response._header = {
      ['x-access-token']:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJ1c2VyX3JvbGUiOiJhZG1pbiIsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY2MTE3MTU4NywiZXhwIjoxNjYxMTc4Nzg3fQ.H3s8O-MkFNMQkDWMSwuYbobkGpabfGuyao9eF2lviTs',
    }
    const respones = await request.get('/list')
    expect(respones).toEqual({
      code: 403,
      statusName: 'FORBIDDEN',
      message: 'The request was valid, but the server is refusing action.',
    })
  })
})
