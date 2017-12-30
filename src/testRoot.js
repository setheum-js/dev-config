// ISC, Copyright 2017 Jaco Greeff
// @flow

const pkg = require('../package.json');

/**
  @name test
  @signature test (): boolean
  @summary This is the summary for test, a root file
  @description
    This is the description with another line
  @example
    const test = require('./test');

    test(); // => nothing
*/
module.exports = function test (): void {
  console.log(pkg.version);
};
