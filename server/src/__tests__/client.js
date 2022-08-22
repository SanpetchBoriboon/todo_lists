const supertest = require('supertest')
const { addMsg } = require('jest-html-reporters/helper')
const { base_url, port } = require('../../environment-configs')

const request = supertest.agent(`${base_url}:${port}`)
request.on('response', async (response) => {
  const { request, body, httpStatus, headers } = response
  const data = {
    request: {
      header: request._header,
      url: request.url,
      body: request._data,
      method: request.method,
    },
    response: {
      header: headers,
      status: httpStatus,
      body,
    },
  }
  await addMsg(JSON.stringify(data, null, 2))
})

module.exports = request
