console.log('it works!')

// data types

// primitivní
/*
  - string - '' nebo ""
  - number - číslo
  - boolean (true / false)
  - null (null)
  - undefined (undefined)
  - NaN (NaN) - výsledek nesmyslných math oper.
*/

// referenční
/*
  - array - [1, 2, 4, 'ahoj']
  - object - {
        key: value,
        key2: value
    }
  - function
*/

let myVar
/** dynamické typování */

myVar = 'ahoj' // string
console.log(myVar)
myVar = 24 // number
console.log(myVar)
myVar = false
myVar = 'ahoj' / 2
console.log(myVar)
myVar = ['banán', 'kiwi', 'pomeranč']
console.log(myVar)

let person = {
  firstname: 'Karel',
  lastname: 'Houska',
  age: 36,
  position: 'driver',
  dogs: [
    {
      name: 'Alík',
      breed: 'collie'
    },
    {
      name: 'Rex',
      breed: 'cocker'
    }
  ]
}

console.log(myVar[1]) // 'kiwi'
console.log(person.lastname) // 'Houska'
let property = 'lastname'
console.log(person[property]) // 'Houska'
console.log(person.dogs[1].name) // 'Rex'


