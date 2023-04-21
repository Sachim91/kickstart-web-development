const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const dateInput = document.querySelector('#date');
const userList= document.querySelector('#users');

myform.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value===''||emailInput.value===''||phoneInput.value==='' ||dateInput){
        // alert("Please input all details");

        msg.classList.add('error');
        msg.innerHTML = "Please enter all fields";

        setTimeout(()=>msg.remove(),3000);

    }else{

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(nameInput.value+'--->'+emailInput.value+'--->'+phoneInput.value));
        userList.appendChild(li);

        //clear field
        nameInput.value='';
        emailInput.value ='';
        phoneInput.value='';
    console.log("sucess");
}
}