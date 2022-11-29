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
const list1 = document.getElementById("list");
const input1=document.getElementById("input1");
const image=document.getElementById("image");
const image1=document.getElementById("image1");
const button1=document.getElementById("submit");
const button2=document.getElementById("submit1");
const input2=document.getElementById("input2")
const button3=document.getElementById("submit2");
const showHidebtn=document.getElementById("shwhide-btn")
let list3 = document.getElementsByTagName("ul")[0];
console.log(placeholder)
console.log(image)
console.log(image1.style)
console.log(submit)
console.log(listItems)
console.log(listItems.length)
console.log(showHidebtn)
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
// button1.addEventListener("click",()=>{
//     placeholder.style.color="goldenrod";
//     placeholder.textContent=`<li>${input1.value}</li>`;
//     list1.innerHTML=`<li>${input1.value}</li>`

// })
button1.addEventListener("click",()=>{
image.src=input1.value

})
button2.addEventListener("click",()=>{
    if(image1.style.display=="none"){
        image1.style.display="block";
        button1.textContent="hide"
    }else{
        image1.style.display="none"
        button1.textContent="show"
    }
})
button3.addEventListener("click", () => {
  let listItem = document.createElement("li");
  listItem.textContent = input2.value;
  console.log(listItem);
  list3.appendChild(listItem);
});
showHidebtn.addEventListener("click",()=>{
    let list=document.getElementsByTagName("ul")[0]
    if(list.style.display=="none"){
    list.style.display="block";
    showHidebtn.textContent="hide"
}else{
    list.style.display="none"
    showHidebtn.textContent="show"
}

})
function exec (func,arg){
    func(arg);
}
window.setTimeout((something)=> {
    console.log(something);
}, 5000, "Greetings Everyone");
const input_remove=document.getElementById("input-remove")
const button1_remove=document.getElementById("sub-remove")
const button2_remove=document.getElementById("remove")
console.log(button1_remove)
console.log(button2_remove)
button1_remove.addEventListener("click", () => {
  let listItem = document.createElement("li");
  let list = document.getElementsByTagName("ul")[4];
  listItem.textContent =  input_remove.value;

  list.appendChild(listItem);
  input_remove.value = "";
});
button2_remove.addEventListener("click",()=>{
    let listItem = document.querySelector("li:last-child");
    let list = document.getElementsByTagName("ul")[4];
    // console.log(list)

    list.removeChild(listItem);
   })
   
