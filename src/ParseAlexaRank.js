'use-strict'

const getAlexaRank = (xml) => {
  let step1 = xml.split('\n')
  let step2 = step1[step1.length - 1].split('TEXT="')
  return step2[step2.length - 1].split('"')[0]
}

module.exports = getAlexaRank
