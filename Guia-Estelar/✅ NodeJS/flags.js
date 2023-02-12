function getFlagsValue(flags) {
  const index = process.argv.indexOf(flags) + 1
  return process.argv[index]
}

module.exports = getFlagsValue;