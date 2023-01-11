const getInputText = document.getElementsByClassName('buttons__add');
const valueDivText = document.getElementsByTagName('p');
const inputText = document.getElementsByClassName('div__text');
const clearBtnText = document.getElementsByClassName('buttons__clear');
const showPrimaryText = document.getElementsByClassName('text__input');
// console.log(valueDivText); 
// console.log(getInputText);
// console.log(inputText);
// console.log(showPrimaryText);

getInputText[0].addEventListener('click', () =>{
    valueDivText[0].innerText = inputText[0].value;

    if (inputText[0].value === ''){
        showPrimaryText[0].classList.add('text__input--primary');
    }
    else {
        showPrimaryText[0].classList.remove('text__input--primary');
    }
});

clearBtnText[0].addEventListener('click', ()=>{
    inputText[0].value = '';
    valueDivText[0].innerText = '';
});

