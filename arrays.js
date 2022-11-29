let favHolidayDestination=[
" Venice ,Italy","Paris,France","Barcelona,Spain"

]
/*console.log(favHolidayDestination[2]="Florida,USA")
console.log(favHolidayDestination.length)
//###########################################################
//**Shift (remove) the first element of the array**
console.log(favHolidayDestination.shift())
console.log(favHolidayDestination)
//###########################################################
//The slice() method returns selected elements in an array, as a new array.Array.slice(start, end)
console.log(favHolidayDestination.slice(1,2))
console.log(favHolidayDestination)
//###########################################################
//map() creates a new array from calling a function for every array element.
let numbers=[1,2,3,4,5]
console.log(numbers.map(Math.sqrt))
//###########################################################
//The pop() method removes (pops) the last element of an array.
console.log(favHolidayDestination.pop())
console.log(favHolidayDestination)
//##########################################################
//The unshift() method adds new elements to the beginning of an array.
console.log(favHolidayDestination.unshift("Barcelona,Spain"))
console.log(favHolidayDestination)
//#########################################################
//The push() method adds new items to the end of an array.
console.log(favHolidayDestination.push("UK"))
console.log(favHolidayDestination)
//########################################################
//The splice() method adds and/or removes array elements.
console.log(favHolidayDestination.splice(2,0,"England","Scot"))
console.log(favHolidayDestination)*/
const holidyDes=(country,month)=>{
    console.log(`yeah!I'm going on holiday to ${country} in ${month}.I can not wait`)
}
const sayHello=(MyName,Drink)=>{
    console.log(`Hi! my name's ${MyName} would u like ${Drink}`)
}
holidyDes("Spain","June")
sayHello("Shina","Tea")
const multiply=(num1,num2)=>{
    return num1*num2
}
const num=multiply(3,5)
console.log(num)