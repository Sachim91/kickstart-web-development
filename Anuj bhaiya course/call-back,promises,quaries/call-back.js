// const a = 23;
// const b = 12;
// const d = a+b
// function greet(){
//     console.log("hello");
// }
// setTimeout(greet,2000);
// console.log("this is written after greet");

let count  = 0;
function increaseCount(){
    count++;
    console.log(count);
}
//setInterval(increaseCount,4000)
increaseCount();
if(count==5){
    clearInterval(intervalid)
}

const date = new Date().toTimeString();
console.log(date);