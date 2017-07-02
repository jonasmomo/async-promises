var fetch = require('./fetch.js')

var promise = fetch('games.txt')

promise.then(function(games) {
  console.log(games)
  return fetch('nerds.txt')
}).then(function (nerds){
    console.log(nerds)
}).catch(function (err) {
  console.error('EOOR', err)
})
