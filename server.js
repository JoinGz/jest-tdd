
const http = require('http')

http.createServer((req, res) => {
  res.end('666')
  console.log(`served`)
}).listen(666, () => {
  console.log('port on 666')
})