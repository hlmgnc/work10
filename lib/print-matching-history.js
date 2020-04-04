function printMatching(matching) {
  console.log(`${colors.blue(matching.client.name)} matched with ${colors.blue(matching.expert.name)} to work in ${colors.bgRed.white(matching.origin)} `)
}

function printMatchingHistory(client) {
  if (client.bookings.length == 0)
    return console.log(`${colors.blue(client.name)} has no matchings yet.`)

  client.matchings.forEach(printMatching)
}

module.exports = printMatchingHistory