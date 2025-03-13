// console.log("Hellow Bhai");

// let x=document.querySelector("h1");//only 1st h1 will get selected
// let y=document.querySelectorAll("h1"); //all h1 will get selected in an array
// console.log(y);
// console.log(x);
// x.style.color="red";
// x.style.backgroundColor="green";
// x.style.fontSize="50px";

// let z=document.querySelector("h2");
// z.style.color="red";
// z.style.backgroundColor="green";
// z.style.fontSize="50px";
// z.innerHTML="Adarsh";


// setTimeout(() => {
//     x.style.color="yellow";
//     x.style.backgroundColor="blue";
//     x.innerHTML="Team India won Champion Trophy";
//     x.style.fontSize="10px";
// }, 12000);


// let p=document.querySelector("h3");
// setTimeout(() => {
//     p.style.color="yellow";
//     p.style.backgroundColor="blue";
//     p.innerHTML="Team India won Champion Trophy";
//     p.style.fontSize="10px";
// }, 2000);



// Event listener: agar maii kisi ele ko click karroon ,ya fir hover karoon, ya element se mouse ko bahar kar do to kuchh changes ho 




let x=document.getElementById("ele1");
// x.innerHTML="JIgooolool";
// x.style.color="red";
// x.style.backgroundColor="green";

x.addEventListener("click",function(){
    x.style.color="red";
    x.style.backgroundColor="green";
    x.innerHTML="JIgooolool";
})

x.addEventListener("mouseleave",function(){
    x.style.color="black";
    x.style.backgroundColor="white";
   
})



//mousenter, mouseleave
let y=document.getElementById("ele2");
y.addEventListener("mouseenter",function(){
    y.style.color="white";
    y.style.backgroundColor="yellow";
   
})

y.addEventListener("mouseleave",function(){
    y.style.color="black";
    y.style.backgroundColor="white";
   
})

let z=document.getElementById("ele3");
y.addEventListener("click",function(){
    z.style.color="purple";
    z.style.backgroundColor="yellow";
    
})

z.addEventListener("click",function(){
    x.style.color="red";
    x.style.backgroundColor="green";
    x.innerHTML="Adarsh";
})


