const errorMessage = require('../../utils/error-message')

describe('Error Status', () => {
  it('Error message 404', () => {
    const actual = errorMessage(404)
    expect(actual).toEqual({
      code: 404,
      statusName: 'NOT_FOUND',
      message:
        'The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.',
    })
  })
})
