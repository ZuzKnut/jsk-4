let a = 10
let b = a
b = b + 1

console.log(a) // 10
console.log(b) // 11

//_____________________________________

const person1 = {
  first: 'Karel',
  last: 'Houska'
}

const person2 = person1

person2.first = 'Franta'

console.log(person1.first) // 'Franta'
console.log(person2.first) // 'Franta'

//_____________

const myAr = [1, 2, 3]
const myAr2 = myAr
myAr2[1] = myAr[2] + 3

console.log(myAr) // [1, 6, 3]
console.log(myAr2) // [1, 6, 3]


// +, -, *, /, %

let x = 1
// x = x + 2
x += 2
x -= 2 // x = x - 2
x *= 2 // x = x * 2
x /= 2 // x = x / 2
x++ // x = x + 1
x-- // x = x - 1

let str1 = 'ahoj'
let str2 = ', Tomíku'
console.log(str1 + str2) // 'Ahoj, Tomíku'

console.log(1 + 1) // 2
console.log('1' + '1') // '11'
console.log(1 + '1') // '11'
console.log('1' + 1) // '11'
console.log(1 + 2 + '1') // '31'
console.log('1' + 2 + 3) // '123'
console.log('1' + (2 + 3)) // '15'


