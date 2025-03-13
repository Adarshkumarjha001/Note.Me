
// var l=document.querySelector("h1");
// l.innerHTML="Good";

let main=document.getElementById("main");
// main.innerHTML="ADARSG Sidddharth"


// check diff in both

// let main=document.getElementById("main");
// main.innerHTML="<h1>ADARSG Sidddharth</h1><h1>ADARSG Sidddharth</h1><h1>ADARSG Sidddharth</h1><h1>ADARSG Sidddharth</h1><h1>ADARSG Sidddharth</h1><h1>ADARSG Sidddharth</h1><h1>ADARSG Sidddharth</h1><h1>ADARSG Sidddharth</h1><h1>ADARSG Sidddharth</h1><h1>ADARSG Sidddharth</h1><h1>ADARSG Sidddharth</h1><h1>ADARSG Sidddharth</h1>";


// var s="";

// for(let i=0;i<=6;i++){
//     s+="<h1>Good MOrning</h1>";
// }
// main.innerHTML=s;




// var s="";

// for(let i=0;i<=53;i++){
//     // s+=`<div class="card">
//     //         <img src="https://tse2.mm.bing.net/th?id=OIP.X6gZ0TQoQdkNHF5LzP6G1wHaHC&pid=Api&P=0&h=180">
//     //     </div>`;

//     let r=Math.floor(Math.random()*10);
//     s+=`<div class="card">
//     <h1>${r}</h1></div>`
// }
// main.innerHTML=s;


let str=[
    "https://tse2.mm.bing.net/th?id=OIP.X6gZ0TQoQdkNHF5LzP6G1wHaHC&pid=Api&P=0&h=180",
    "https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527784740nls3r.png",
    "https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527785174qe77y.png",
    "https://pngimg.com/uploads/pokemon/pokemon_PNG153.png",
     "https://tse2.mm.bing.net/th?id=OIP.hXGogPxrE0gEcgZHBA1ZdwHaHa&pid=Api&P=0&h=180"];

let s="";

for(let i=1;i<=53;i++){
    let r=Math.floor(Math.random()*5);
    s+=`<div class="card"><img src=${str[r]}></div>`
}

main.innerHTML=s;
