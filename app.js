const input = document.getElementById('user-input');
const middleInput = document.getElementById('middle_div');
const myButton = document.getElementById('buttonOne');
const buttonM = document.getElementById('buttonM');
const buttonC = document.getElementById('buttonC');
const buttonY = document.getElementById('buttonY');
const toppy = document.getElementsByClassName('top')
const bottomy = document.getElementsByClassName('bottom')
const pig = document.getElementById('L1')

myButton.addEventListener('click', () => {
    middleInput.innerHTML = input.value
})

buttonM.addEventListener('click', () => {
    toppy[0].style.backgroundColor = "magenta";
    bottomy[0].style.backgroundColor ="magenta";
    pig.style.color = "white"

})

buttonC.addEventListener('click', () => {
    toppy[0].style.backgroundColor = "rgb(0,310,330)"
    bottomy[0].style.backgroundColor = "rgb(0,310,330)"
    pig.style.color = "black"
})

buttonY.addEventListener('click', () => {
    toppy[0].style.backgroundColor ="#FFFF00"
    bottomy[0].style.backgroundColor = "#FFFF00"
    pig.style.color = "black"
 
})