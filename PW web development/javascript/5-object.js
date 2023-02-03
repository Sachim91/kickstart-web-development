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