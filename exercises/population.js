//
var _             = require('lodash')._
  , chance        = require('./utils').chance
  , randomNumbers = require('./utils').randomNumbers
//

var POSSIBLE_SKILLS          = ['run', 'jump', 'swim', 'dance']
var AGE_MIN_TO_HAVE_CHILDREN = 21
var AGE_MIN_TO_BE_MARRIED    = 21
var LIKELIHOOD_TO_BE_MARRIED = 30
var FERTILITY = 2 // nbr max of child per person

////

module.exports = _generatePopulation(3, 120)

////

function _generatePopulation(seed, maximumAge){
  return randomNumbers({length: seed})
    .map(_.partial(_generatePerson, maximumAge))
    .map(function(person){
      return person.age < AGE_MIN_TO_HAVE_CHILDREN
      ? person
      : _.assign(person, { children: _generatePopulationChildren(person.age)})
    })
}

function _generatePerson(maximumAge){
  var personAge = _.random(maximumAge)

  var isMarried = personAge >= AGE_MIN_TO_BE_MARRIED
               || chance.bool({likelihood: LIKELIHOOD_TO_BE_MARRIED})

  var personSkilles = POSSIBLE_SKILLS
    .filter(function(){
      return chance.bool({likelihood: Math.min(personAge, 100)})
    });


  return {
      firstName: chance.first()
    , lastName: chance.last()
    , age: personAge
    , skills: personSkilles
    , gender: chance.gender().toLowerCase()
    , married: isMarried
  }
}

function _generatePopulationChildren(parentAge){
  var children = _generatePopulation(_.random(FERTILITY), parentAge - AGE_MIN_TO_HAVE_CHILDREN);
  return children.reduce(function(memo, child){
    memo[child.firstName] = child
    return memo
  }, {})
}
