// //object

// let userDetails = {
//     firstName : "Sachin",
//     LastName : "Verma",
//     role : "admin",
//     loginCount :25
// }

// //console.log(userDetails.firstName);

// //console.count(userDetails);

// //Mini Project
// //for buying any course 

// let userDetailCourse = {
//     firstName : "Sachin",
//     LastName: "Verma",
//     role: "Student",
//     googleLogin: true,
//     courseList : [],
//     buyCourse: function (coursename) {
//           this.courseList.push(coursename);
//     },
//     getcoursecount :function(){
//         return userDetailCourse.courseList.length;
//     },
// }
//     console.log(userDetailCourse.firstName);
//     userDetailCourse.buyCourse("Pro Frontend");
//    console.log(userDetailCourse.courseList); 
//    userDetailCourse.buyCourse("React JS");
//    console.log(userDetailCourse.courseList); 
//    console.log(userDetailCourse.getcoursecount());


//    //keys

//    console.log(Object.keys(userDetails));
//    //values
//    console.log(Object.values(userDetails));

//    //checking key
//    console.log(userDetailCourse.hasOwnProperty("firstName"));




//for in loop


let userDetails = {
    firstName : "Sachin",
    LastName : "Verma",
    role : "admin",
    loginCount :25
}
//for of for array
//for in for obj

for(let x in userDetails ){
   // console.log(x);
   //console.log(userDetails[x]);
   console.log(`The value of ${x} is ${userDetails[x]}`);
}

//                                                                   task 1
//  array of object

// Problem Statement :   We have to create an array of object ;each obj should have name,price,launch Date and buy that ,method of buy.


  let appleProducts =[
          
    {
        Name : "Mackbook",
        Price : 50000,
        LaunchDate : "23,dec",
        buyProduct: function(){
            console.log(`congratulation,you have purchased ${this.Name}`)
        }

    },{

        Name : "iphone",
        Price : 10000,
        LaunchDate : "25,dec",
        buyProduct:function(name){
            console.log(`congratulation,you have purchased ${this.Name}`)
        }   
    }
  ];
console.log(appleProducts);


//                                                           TASK 2

//get element from foreach function 

let arr = [1,2,3,4,5,6,7,8,9];

arr.forEach( (val)=>{
     console.log(val);
});

