// sab kuchh arrays me hi ho jata haii

// push,pop,unshift,shift 

// arr=[1,6,8,3];
// console.log(arr);

// arr.push(4);  // add element at last
// console.log(arr);
// arr.push(0);
// console.log(arr);
// arr.pop();
// console.log(arr);

// arr.unshift(20); // add element at first
// console.log(arr);
// arr.shift(); // remove element from first
// console.log(arr);


// n=arr.length;
// console.log(n);

// for(i=0;i<n;i++)
// {
//     console.log(arr[i]);
// }



// const arr=[1,6,8,3];
// arr.push(4);  // add element at last
// console.log(arr);
// arr.push(0);
// console.log(arr);
// arr.pop();
// console.log(arr);




// arr=[1,"raghav",7.9,true,[4,7,4,8,5]];
// console.log(typeof(arr));
// console.log(arr);
// brr=[[1,2,3],[4,5,6,9,8,1]];
// console.log(brr);


// for(const i of arr){  //element lake copy banata haii
//     console.log(i);
// }

// for of jo haii kewal copy banata haii
// brr=[2,3,4,5,6];

// for(i=0;i<brr.length;i++)
// {
//     brr[i]=brr[i]*2;
    
// }
// console.log(brr);

// for(let i of brr)  //element lake copy banata haii
// {
//    i=i*2;
//    console.log(i);
// }
// console.log(brr);

// we can't print index in for of loop


// forEach

// brr=[1,3,5,6];
// brr.forEach((element,index,brr) => {
//     console.log(element,index,brr);
//     element*=2; //just crete copy
// });
// console.log(brr);



// falsy value: false,0,"",null,undefined,NaN
// truthy value: true,1,"hello",{},[],function(){},-1

// console.log(typeof(a));


// String

// let a="Adarsh kumar jha";
// console.log(a,a.length);
// console.log(a[0]);
// console.log(a[4]);
// console.log(a[a.length-1]);

// for(let ele of a){
//     console.log(ele);
// }

// for(let i=0;i<a.length;i++)
// {
//     console.log(a[i]);
// }

// forEach loop doesnot work for string


// let s="  Adarsh  ";
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s);
// console.log(s.trim());
// console.log(s.indexOf("a"));
// console.log(s.lastIndexOf("a"));
// console.log(s.slice(2));
// console.log(s.slice(2,5)); //index i to j-1
// split
// let str="Adarsh is a good boy";
// console.log(str);
// let arr=str.split(" ");
// console.log(arr);


// let ptr="a,gf,ghjhg,hhjh";
// let arr=ptr.split(",");
// console.log(arr);




// TEPLATE LITERAL

// let age=90;
// let exp=5;
// console.log(`My name is Adarsh and my age is ${age} and my experience is ${exp}`);

//  Rag"hav

// console.log(`Rag"hav`);




// Map,filter,reduce



// Map: basically agar muhe ek array se ek or array
//  bnana h with some specific chnages 


// function add10(ele){
//     return ele+10;
// }
// let arr=[1,2,3,4,5];

// let brr=arr.map(add10);

// let brr1=arr.map((element,index,arr)=>{  // element, index, array
//     return element*2;
// });
// console.log(arr,brr);



// filter


// let arr=[1,2,3,4,5];

// let brr=arr.filter((element,index,arr)=>{   // element, index, array
//     return element%2==0;
// });
// console.log(arr,brr);

// let arr=[1,2,3,4,5];
// arr=arr.filter((ele)=>{
//     return (ele<7)?true:false;

// });
// console.log(arr);



// Reduce


// let arr=[1,2,3,4,5];
// let brr=arr.reduce((acc,ele)=>{  // accumulator, element         
//     return acc+ele;          
// });
// console.log(brr);



// sort.js

// let arr=[1,-2,3,-4,5];
// arr=arr.sort();  //galat sorting deta haii

// actual sort

// arr=arr.sort((a,b)=>{
//     return a-b;
// })



// dec sort

// arr=arr.sort((a,b)=>{
//     return b-a;
// })


// console.log(arr);








