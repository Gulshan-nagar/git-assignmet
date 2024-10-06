let input=[1,2,3,4,5]
let even= input.filter(function (element){
  return element%2===0
})
let squire= even.map(function (element){
  return element*element
})
let sum = squire.reduce((total, element)=>{
  return total+element
})
console.log(sum)