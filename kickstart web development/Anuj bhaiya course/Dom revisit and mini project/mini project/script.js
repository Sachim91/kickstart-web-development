const counterText = document.getElementById('counter');
const posBtn = document.getElementById('pos-Btn');
const negBtn = document.getElementById('neg-Btn');
let count = 0;
 //updateCount();
 posBtn.addEventListener('click',()=>{
    count++;
    updateCount();

 })
negBtn.addEventListener('click',()=>{
    if(count>0){
    count--;
    updateCount();
    }
  })

  function updateCount(){
    counterText.innerHTML = count;
  }
  