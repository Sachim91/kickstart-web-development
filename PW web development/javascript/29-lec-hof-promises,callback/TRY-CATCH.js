//try and catch

// try{
// let firstName = "Sachin";
// console.log(firstName+ "" +lastname);
// }catch(err){
//     console.log(err.name);
// }finally{
//     console.log("i will run");
// }
// console.log("hello world");


//                       -----promise---------
//prmises stages
//callback
//.then .catch
//async await



//          .then .catch
//pending resolve,rejected
// const makePromise = new Promise((resolve,rejected) =>{
//     setTimeout(() =>{
//     const Exam = ['HTML','CSS','JS','TAILWIND'];
//     if(Exam.length > 2){
//         resolve("Done");
//     }else{
//         rejected("rejected")
//     }
//     },2000)
// });
// makePromise.then((result)=>{
// console.log(result);
// }).catch((result)=>{
//     console.log(result);
//     })



//asith-wait


const makePromise = new Promise((resolve,rejected) =>{
    setTimeout(() =>{
    const Exam = ['HTML','CSS','JS','TAILWIND'];
    if(Exam.length > 2){
        resolve("Done");
    }else{
        rejected("rejected")
    }
    },2000)
});
makePromise.then((result)=>{
console.log(result);
}).catch((result)=>{
    console.log(result);
    })



    //                        ---fetch-------

    // const url = "https://restcountries.com/v2/all";      //countries api

    // fetch(url).then( (result)=>
    //    result.json()
    // ).then((data)=>{
    //         console.log(data);
    // })
    // .catch((error) =>{
    //      console.error(error);
    // })


    //                -----DOM----

