

All the exercises are going to use the same data.  
Let's imagine here that we can access the population data of a little city.  
The data format will be array of people, like `Array<Person>`, given this `Person` schema:

```js
{
  firstName: String,
  lastName: String,
  age: Number,
  skills: Array<String>, // ['run', 'jump', 'swim', 'dance']
  gender: String, // ['male', 'female']
  married: Boolean
}
```

Adult (`Person` with a `age` above **20**) extends `Person` with :

```js
children: {  // an object with key-value pairs, as {firstName: Person}
  'childName': Person,
  'childName': Person,
  etc...
}
```

# Task

Write a function that takes the population as input and returns it without touching it.

## Arguments

@param *{`Array<Person>`}* **input** - the population.

## Boilerplate

```js
module.exports = identity;

function identity(input) {
  // SOLUTION GOES HERE
}
```
