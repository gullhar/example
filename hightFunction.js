/*const whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
}
const greet = (time, fn) => {
    if(time < 1200){
        fn("Morning");
    }else if (time >= 1200 && time < 1800){
        fn("Afternoon");
    }else{
        fn("Evening");
    }
}
greet(1400, whichGreeting)

const add = () => {
    return 2 + 3;
}
add(); //logs 5
add; // logs the whole function
const add = (num1) => {
    return (num2) => {
        return num1 + num2;
    }
}
console.log(add(2)(2)); //returns the function in the main function*/
const fun1=()=>{
    console.log( "Hello Code Nation")
}
(()=>{
for(i=0;i<5;i++){
    return fun1
}

})();