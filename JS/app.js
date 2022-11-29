const myHeading=document.getElementById("myHeading")
// const input=document.getElementById("input");
const heading=document.getElementById("heading");
const button = document.getElementById("button");
const list=document.getElementsByTagName("li");
const notOrange=document.getElementsByClassName("not-orange");
const myElement=document.getElementById("myId");
const myElement1=document.querySelector('#myId');
const listItems=document.querySelectorAll(' li:nth-child(even) ');
const placeholder=document.getElementById("placeholder");
const input=document.getElementById("input");
const submit=document.getElementById("submit");
const list1 = document.getElementById("list");
const input1=document.getElementById("input1");
const image=document.getElementById("image");
const image1=document.getElementById("image1");
const button1=document.getElementById("submit1");
console.log(placeholder)
console.log(image)
console.log(image1.style)
console.log(submit1)
console.log(listItems)
console.log(listItems.length)
list.length;
list[0];
list[3];
list[0].style.color="red"

button.addEventListener("click", () => {
  heading.style.color = input.value;
});
const drinks=document.getElementById("drinks");
const paragraphs=document.getElementsByTagName("p")
const colours=['red','yellow','goldenrod','lightgreen','blue','purple'];


//let firstPara=paragraphs[0]
for(let i=0;i<paragraphs.length;i++){

    paragraphs[i]
    console.log(i)
}
// console.log(firstPara)
for(let i=0;i<list.length;i++){
    list[i].style.color="orange";
}
for( let i=0;i<notOrange.length;i++)
{
    notOrange[i].style.color="red"
}
for(let i=0;i<notOrange.length;i++)
{
    listItems[i].style.color ="lightgreen"
}
for(let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = colours[i];
   }

document.querySelectorAll("li");
document.querySelector("li")
document.querySelector("#heading")
document.querySelector(".list-parent");

// submit.addEventListener("click",()=>{
//     placeholder.style.color="orange"
//     placeholder.textContent=input.value
// })
submit.addEventListener("click",()=>{
    placeholder.style.color="goldenrod";
    placeholder.textContent=`<li>${input1.value}</li>`;
    list1.innerHTML=`<li>${input1.value}</li>`

})
button.addEventListener("click",()=>{
image.src=input.value

})
button1.addEventListener("click",()=>{
    if(image1.style.display=="none"){
        image1.style.display="block";
        button1.textContent="hide"
    }else{
        image1.style.display="none"
        button1.textContent="show"
    }
})