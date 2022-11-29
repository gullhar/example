/*const pet ={
    petName:"Alven",
    typeOfPet:"Squirerr",
    age:"5",
    colour:"brown",
    keyFeatures:["cute","preety","fur"],
    firrstName:"Sally",
    lastName:"Evans",
    age1:27,
    occupation:"Sales assistant",
    married:false,
    homeOwner:false,
    hobbies:["tennis","gardening","bungee","jumping"]

}
if(day==="Saturday"||day==="Sunday"){
    console.log(`Great it's ${day},let's play ${person.hobbies[0]}!`)
}
else{
    console.log(`Great it's ${day},let's play ${person.occupation}`)
}
console.log(pet.age)
console.log(pet["typeOfPet"])
pet.age="2 months"
console.log(pet.age)
console.log(pet.keyFeatures[1])*/
const pet={
    petName:"Alven",
    typeOfPet:"Squirrel",
    age:"5 ",
    colour:"brown",
    keyFeatures:["cute","small","furry"],
    }
const person ={
    firstName:"Sally",
    lastName:"Evans",
    age:27,
    occupation:"Sales assistant",
    married:false,
    homeOwner:false,
    hobbies:["tennis","gardening","bungee","jumping"],
    marketingOp(){
        if(this.homeOwner==false&&this.age>25){
            return "Send mortgage offer emil. "
        }
        else if(this.homeOwner==false&&this.age<25){
            return "Send summer holiday fun credit card offer."
        }
        else if(this.homeOwner==true && this.age>25){
            return"Send sensible Savings offer."
        }
    },
    eat(){
        console.log(`Your cat ${pet.petName} is eating `)
    },
    drink(){
        console.log(`Your cat ${pet.petName} is drinking` )
    }
   
}
const coffee_shop={
  branch:[ "espresso_coffee_shop", "paper_cup", "starbucks"],

  food:["pizza","rice","fish_chips"],

  FoodPrices:[10,12,20],

  drinks:["soft_drink", "coffee","tea"],

  drinkPrices:[5,3.5,2],

 drinkOrder(){
    let sum1=0
   for(i=0;i<this.drinks.length;i++){
      sum1+=this.drinkPrices
      return`You order is ${this.drinks[i]} = ${this.drinkPrices[i]}`
   }
   console.log(sum1)
    
},
foodOrder(){
    let sum2=0
    for(i=0;i<this.food.length;i++){
       sum2+=this.drinkPrices
       return`You order is ${this.food[i]} = ${this.foodPrices[i]}`
}
console.log(sum2)
},
totalPrice(){
    let sum=this.sum1+this.sum2

}

}
/*console.log(person.marketingOp())
person.age=20
console.log(person.marketingOp())*/
//console.log(person.eat())
//console.log(person.drink())
//console.log(person.marketingOp)
console.log(coffee_shop.drinkOrder)