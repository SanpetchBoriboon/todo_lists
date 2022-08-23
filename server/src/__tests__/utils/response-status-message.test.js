const responseStatusMessage = require('../../utils/response-status-message')

describe('Error Status', () => {
  it('should error message 404', () => {
    const actual = responseStatusMessage(404)
    expect(actual).toEqual({
      code: 404,
      statusName: 'NOT_FOUND',
      message:
        'The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.',
    })
  })
})
