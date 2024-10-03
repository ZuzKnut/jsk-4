
function sum (num1, num2, cb) {
  let result = num1 + num2
  cb(result) // console.log(result)
}

// callback - funkce je argumentem pro jinou funkci
// funkce vždy něco vrací ... undefined

sum(20, 7, console.log)

sum(10, 5, function(result) {       // Anonymous function
  let finalTotal = result + 100
  console.log(finalTotal) // 115
})
// sum(10, 5, alert)

