
// //call,apply,and bind method in js
// //call
// let name = {
//     firstName : "Sachin",
//     lastName : "Verma",
//     PrintFullName: function(){
//         console.log(this.firstName+ " "+ this.lastName);
//     }
// }
// name.PrintFullName();
// //Sachin Verma

// let name2 = {
//     firstName : "Sachin",
//     lastName : "Tendulkar",   
// }
// //call

// name.PrintFullName.call(name2);


//Sachin Tendulkar

let name = {
    firstName : "Sachin",
    lastName : "Verma",
}
//seperate method
   let PrintFullName =  function( hometown,state ){
        console.log(this.firstName+ " "+ this.lastName +" from "+ hometown+" "+state);
    }

PrintFullName.call(name,"lucknow","u.p");

let name2 = {
        firstName : "Sachin",
         lastName : "Tendulkar",   


            }
            //call and apply method
            PrintFullName.call(name2,"mumbai","Maharastra")//call as indevisually and seperated
            PrintFullName.apply(name2,["mumbai","Maharastra"])//call as a arraay list

            //bind method
//don't directly in voke the method,it just give copy of same method which can be invoked latter
            let PrintMyName = PrintFullName.bind(name2,"mumbai","Maharastra");
            //
            console.log(PrintMyName);
            PrintMyName();