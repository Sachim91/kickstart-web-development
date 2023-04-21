// const responce = fetch('https://dummyjson.com/products/1');
// console.log(responce);


async function fetchData(){
    try {
        const responce = await fetch('https://dummyjson.com/products/1'); 
        console.log(responce); 
        const jsonData =await responce.json();
        console.log(jsonData);

const phoneTittle = document.getElementById('phone-title');
    phoneTittle.innerHTML = jsonData.title;

    } catch (error) {
      console.log(error);  
    }
  
}
fetchData();
// const body  = document.body;
// const children  = document.body.children[1].children[0];
// console.log(children);
// const list = document.getElementById('list')
// console.log(list.parentElement);

const numberinput = document.getElementById('number-input');
numberinput.value = "sachin";
const submit = document.getElementById('submit');
submit.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log(numberinput.value);
})