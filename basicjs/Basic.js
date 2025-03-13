// console.log("Adarsh");
// console.log(56757);
// console.log("3+8");
// console.log(3+8);


// b++,++b,b--,--b
// play with variable:

// a=10;
// console.log(a+3);
// x="Adarsh";
// console.log(x);
// a=20.7;
// console.log(a);
// a="Adarsh1";
// console.log(a);
// b=5;
// b=b++;
// console.log(b);
// b++;
// console.log(b);

// console.log(a,b,x);

// console.log("Adsrh","Adarsh","jsbewjk");

// age=24;
// name="Adarsh";
// "," will give space on it own
// console.log("My name is "+name+" and my age is "+age);

// console.log(`My name is ${name} and my age is ${age}`);




// var,let,const

// const a=10;
// console.log(a);
// a=20;
// console.log(a);
// console.log("Jai Hind");

// var and let has scope difference rest all are same let is preferrred more


// Redefination in js is posssible with var
// var a=10;
// console.log(a);
// var a=20;
// console.log(a);

// error
// let a=10;
// console.log(a);
// let a=20;
// console.log(a);


// operator
// post increment && pre increment a++,++a

// let a=7;
// let b=3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(a++);
// console.log(a--);



// Datatype && 

// a=4;
// b=3.14;
// c="Adarsh Kumar Jha";
// d=true;
// e=null;
// f=undefined;
// g=Symbol();
// h='A';   // string is a collection of character
// console.log(a,typeof(a));
// console.log(b,typeof(b));
// console.log(c,typeof(c));   
// console.log(d,typeof(d));
// console.log(e,typeof(e));
// console.log(f,typeof(f));
// console.log(g,typeof(g));
// console.log(h,typeof(h));




// If -else things:

// Given number is a 3 digit number or not
// check from 100 - 999 and done

// ==equal to
// === strict equal to even it check datatype
// !== not equal to
// !== strict not equal to

// a=5;
// b="5";   //'5'=53
// console.log(a==b);
// console.log(a===b);


// c++ and Js deifference


// loop:

// for(let i=0;i<10;i++){  
//     console.log(i);
// }

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// at leats one time it will run;
// let i=12;
// do{
//     console.log(i);
//     i++;
// }
// while(i<10);



//var is functional scope whwere as let is block scope

// function example() {
//     if (true) {
//         var x = 10; // Declared inside if-block
//     }
//     console.log(x); // ✅ Accessible (function-scoped)
// }
// example();



function isfind(){
    if(1){
        let a=8;
    }
    console.log(a); // it will give an error since let is only block space
    
}
isfind();




