var _ = require('lodash');

module.exports = everybody;

////

function everybody(input) {
  var populationPaires = input.map(_personExtraction);
  return _.flatten(populationPaires);
}

function _personExtraction(person){
  return _.flatten([
    [_.omit(person, 'children')],
    _(person.children).toArray().map(_personExtraction)
  ]);
}
