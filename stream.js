const fs = require('fs')
const { read } = require('fs/promises')
const readStream = fs.createReadStream('./docs/blog3.txt', {
  encoding: 'utf-8'
})
const writeStream = fs.createWriteStream('./docs/blog2.txt', {
  encoding: 'utf-8'
})
// readStream.on('data', chunk => {
//   console.log('----new Chunk')
//   console.log(chunk)
//   writeStream.write('\nNew Chunk\n')
//   writeStream.write(chunk)
// })
readStream.pipe(writeStream)

// piping
// readStream.pipe(writeStream)
