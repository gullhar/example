class Pet {
    constructor(name, age, type, breed, colour, time) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.breed = breed;
    this.colour = colour;
    this.lastFed = time;
    }
    get petInfo () {
    return `${this.name} is a ${this.type}, ${this.age} year(s) old`;
    }
    set fullName(name){
        const array=name.split(" ")
        this.firstname=array[0]
        this.surname=array[1]

    }
    feedPet (time) {
    this.lastFed = time;
    return `Last feed updated to: ${this.lastFed} for ${this.name}`;
    }
   }
class pet1 extends Pet {
  constructor(name, age, type, breed, colour, time, fury) {
    super(name, age, type, breed, colour, time);
    this.fury = fury;
  }
  Play(game) {
    this.game = game;
    if (game == "xbox") {
      return "Yeah, sure I wanna play ";
    } else {
      return "No,I am not in mood ";
    }
  }
}
const food=(type)=>{
    return (type1)=>{
        return `${this.name} is hungry`
    }
}
   const Bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "08:00");
   const Pet1=new pet1("Bella", 2, "Dog", "GS", "B&T", "08:00","")
   Bella.fullName ="Shina Ali"
   console.log(Bella);
   console.log(Pet1.Play("fury"))
   console.log(Pet1.food("Bryani"))

    