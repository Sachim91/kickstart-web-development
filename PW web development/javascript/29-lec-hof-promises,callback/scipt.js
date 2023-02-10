//                                            ------ Closure

// when an inner function is capable to acessing auter function variable is knowm as closeur

// function Grandpa(){
   
//     let dad ="Hello";
//     function parents(){
//         console.log(dad);
//     }
//     parents();
   
// }
// Grandpa();


function Grandpa(){
    let dad = "Hello Dad";
    function par(){
        console.log(dad);
    }
    return par;

}
let var2 = Grandpa();
var2();





































