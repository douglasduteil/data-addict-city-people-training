
var population = require('../population')
  , runner = require('workshopper-node-default-exports-runner')

module.exports = runner({
  'Should return an array of people by age under 30 and has the skills "run" and "swim".': population
})
