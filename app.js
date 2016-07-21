'use-strict'

const fs = require('fs')
const fetchAlexaRank = require('./src/fetchAlexaRank')

const urls = fs.readFileSync('urls.txt', 'utf8').toString().split('\n')
let urlObjects = urls.map((e, i) => {
  return {
    index: i,
    url: e.split('\r')[0]
  }
})

Promise.all(
  urlObjects.map((e) => fetchAlexaRank(e.url))
).then((ranks) => {
  return ranks.map((e, i) => {
    return { index: i, url: e.url, rank: e.rank }
  })
}).then(data => {
  data.map((e, i) => {
    console.log(e.rank)
  })
})
