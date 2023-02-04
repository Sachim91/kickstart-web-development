// let arr  = [2,4,5,6,7,8,9];

// arr.forEach((val) =>{
//     console.log(val);
// });




// let numbers = [1,2,3,4,4,5,6,6,6]
// let newnum = [];
//  numbers.forEach((val) =>{
//    let c =  val*val;
//     newnum.push(c);
//  })
//  console.log(newnum);
    


//Map
//with no
// let number = [2,3,4,4,5,6,6,7,7,7,3];

// let store = number.map((val)=>
// val*val
// )

// console.log(store);


//with string

// let names = [ "Hitesh", " suresh", "ramesh", "sachin"];

// let stores1 = names.map((name)=>
// name.toUpperCase()
// )

// console.log(stores1);

//filter

// let country = ["india" ,"Japan", "kenya","russssss"];

// let stor = country.filter((country)=>
// country.length == 5
// );
// console.log(stor);



//reduce
//syntax  :

//arrayName.reduce(acc,curr) =>{},value;
let numbers = [2,3,4]
let sum = numbers.reduce((acc,cur) => acc+cur,2);
console.log(sum);



