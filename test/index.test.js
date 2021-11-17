const fs = require('fs');
const { ESLint } = require('eslint');
var assert = require('assert');

describe('Validate ESLint configs', () => {
  const overrideConfigFile = 'index.js';
  const cli = new ESLint({
    overrideConfigFile,
  });

  it(`load config in ESLint to validate all rules are correct`, async () => {
    const errors = await cli.lintFiles(overrideConfigFile);
    console.log(errors[0].messages);
    assert.deepEqual(errors[0].messages, []);
  });
});
