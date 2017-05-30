var Instapaper = require('instapaper')
var client     = Instapaper('78f374062f5146e8a0fd0e11a3598431', '130a174a1ab4406d966d76e1d4e17cd0')

client.setUserCredentials('luke@broughtbackbooks.com', 'Ben71212')

// Load a list of bookmarks using promises...
client.bookmarks.list().then(function(bookmarks) {
  for (bookmark of bookmarks) {
  console.log(bookmark.title)
  }
}).catch(function(err) {
  console.warn('oh noes', err)
})
