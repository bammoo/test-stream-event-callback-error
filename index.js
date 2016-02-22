var Duplex = require('readable-stream').Duplex;
var vinyl = require('vinyl-file');

var stream = new Duplex({objectMode: true, allowHalfOpen: true});


stream._write = function _write(file, enc, done) {
  stream.push(file);
  done();
};
stream._read = function _read() {};
stream
.on('error', function(msg) {
  console.log(msg)
})
.on('data', function(f) {
  // process.nextTick(function () {
    asdf();
  // });
  // try {
  // }
  // catch (exception) {
  //   console.log(exception)
  // }
  console.log(f.relative)
})

vinyl.read('./package.json', {}).then(function (f) {
  stream.write(f)
});