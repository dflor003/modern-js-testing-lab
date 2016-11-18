#!/usr/bin/env node

const argv = require('yargs')
  .command('start', 'Begins or resets the lab. Run this command first to set things up.')
  .demand(1)
  .strict()
  .help()
  .argv;

console.log(argv);
