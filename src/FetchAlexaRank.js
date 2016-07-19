'use-strict'

const parseAlexaRank = require('./ParseAlexaRank')
const request = require('superagent')

const fetchAlexaRank = (url) => {
  return new Promise((resolve, reject) => {
    request
      .get(`data.alexa.com/data?cli=10&url=${url}`)
      .end((err, data) => {
        if (err) {
          reject(err)
        }
        resolve({
          url: url,
          rank: isNaN(+parseAlexaRank(data.res.text)) ? 'N/A' : +parseAlexaRank(data.res.text)
        })
      })
  })
}

module.exports = fetchAlexaRank
