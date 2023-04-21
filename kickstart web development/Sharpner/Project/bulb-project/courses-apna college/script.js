//ADDING A NEW CHAPTER

let addBtn = document.getElementById("add_btn");
        addBtn.addEventListener("click",addChapter)
        function addChapter(e){
            //
          let currentBtn = e.currentTarget;
          let currentInput = currentBtn.previousElementSibling
          console.log(currentInput.value);
 //CREATE NEW LI FEOM DOCUMENT
          let newLi = document.createElement('li');
          newLi.classList.add('list-group-item')
           newLi.textContent = currentInput.value
//ADDING ELEMRNT IN LI USING ID TAG
          let parentList = document.getElementById("parentList")
          parentList.appendChild(newLi)
      }
        