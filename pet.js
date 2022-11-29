class Cyberpet {
    constructor(name, age, colour, gender, mood, hungerLevel, cleanLevel, diet) {
        this.name = name;
        this.age = age;
        this.colour = colour;
        this.gender = gender;
        this.mood = mood;
        this.hungerLevel = hungerLevel;
        this.cleanLevel = cleanLevel;
        this.diet = diet
    }
    petHunger (hungerLevel) {
        this.hungerLevel = hungerLevel;
        if (this.hungerLevel == "hungry") {
            return `Ok, ${this.name}, I'll give you some food.`
        } else {
            return `${this.name}, the food can wait until later`
        }
    }
    petCleanliness (cleanLevel) {
        this.cleanLevel = cleanLevel;
        if (this.cleanLevel == "unclean") {
            return `Ok, ${this.name}, I'll give you a wash.`
        } else {
            return `${this.name}, you don't need a wash yet`
        }
    }
    petMood (mood) {
        this.mood = mood;
        if (this.mood=="happy") {
          return `${this.name}, let's go play!`
        } else if (this.mood == "angry") {
          return `${this.name} stamps on the floor!`
        } else {
            return `${this.name}, let's have a cuddle.`
        }
    }
}  


class Type1 extends Cyberpet {
    constructor(name, age, colour, gender, mood, hungerLevel, cleanLevel, diet, type) {
        super(name, age, colour, gender, mood, hungerLevel, cleanLevel, diet)
        this.type = type;
    }
}

class Type2 extends Cyberpet {
    constructor(name, age, colour, gender, mood, hungerLevel, cleanLevel, diet, type) {
        super(name, age, colour, gender, mood, hungerLevel, cleanLevel, diet)
        this.type = type;
    }
}




const testpet = new Cyberpet("Bella", 5, "Blue", "Female", "angry", "", "","");
const type1 = new Type1("Shina", 5, "Blue", "Female", "sad", "","","","JavaMonster")
const matt = new Type2("Matthew", 5, "Blue", "Male","happy", "","","Consolidator")

// console.log(testpet)
// console.log(type1.petMood());
//console.log(testpet.petMood("happy"));

console.log(matt.petMood("sad"))
console.log(type1.petHunger("full"))
console.log(matt.petCleanliness("unclean"))

// I think we need to add 1 group class or 3 individual classes "happiness" for play function, "hunger" for feed function, and "cleanliness" for clean function (note for when everyone gets back - Adam)
// I was thinking that we need to put in an array under mood: ["happy","sad","hungry","angry","etc"] and these get invoked by the funtions - Nick