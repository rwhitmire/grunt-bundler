'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.bundler = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_settings: function(test) {
    test.expect(1);

    var actual = grunt.file.read('test/fixtures/default_settings.html');
    var expected = grunt.file.read('test/expected/default_settings.html');
    test.equal(actual, expected);

    test.done();
  },
  with_root: function(test) {
    test.expect(1);

    var actual = grunt.file.read('test/fixtures/with_root.html');
    var expected = grunt.file.read('test/expected/with_root.html');
    test.equal(actual, expected);

    test.done();
  },
};
