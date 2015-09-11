
var population = require('../population')
  , runner = require('workshopper-node-default-exports-runner')

module.exports = runner({
  'Should return an array which contains all the people': population
})
