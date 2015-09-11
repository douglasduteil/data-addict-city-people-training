var _ = require('lodash');

module.exports = everybody;
console.log('sdlkfjsldkjf')
console.log('sdlkfjsldkjf')
console.log('sdlkfjsldkjf')
console.log('sdlkfjsldkjf')
console.log('sdlkfjsldkjf')
////

function everybody(input) {
  var populationPaires = input.map(_personExtraction);
  return _.flatten(populationPaires);
}

function _personExtraction(person){
  console.log(_(person.children).toArray())
  return _.flatten([
    _.omit(person, 'children'),
    _(person.children).toArray().map(_personExtraction)
  ]);
}
