
//ul.lastElementChild.remove();

//ul.lastElementChild.textContent='Hello';
const myForm =document.querySelector('#my-form');
const nameInput =document.querySelector('#name');
const emailInput =document.querySelector('#email');
const msg =document.querySelector('#msg');
const userList =document.querySelector('#users');


myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value);
    console.log(emailInput.value);

    if(nameInput.value ==='' || emailInput.value ==='') {
       alert('PLEASE ENTER ALL THE FIELDS');
       setTimeout(()=>msg.remove(),3000);
    }else{
        const li =document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} , ${emailInput.value}`));
        userList.appendChild(li);
        //clear field
        nameInput.value='';
        emailInput.value='';
    }

}//msg.classList.add('error');
//msg.innerHTML='Please Enter all the fields';