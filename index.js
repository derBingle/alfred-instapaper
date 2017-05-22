var Instapaper = require('instapaper')
var client     = Instapaper(CONSUMER_KEY, CONSUMER_SECRET)

client.setUserCredentials('lukewil', 'Ben71212')

// Load a list of bookmarks using promises...
client.bookmarks.list().then(function(bookmarks) {
  console.log(bookmarks)
}).catch(function(err) {
  console.warn('oh noes', err)
})
