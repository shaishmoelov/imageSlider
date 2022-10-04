const image_slider = document.querySelector('.image-slider');
const images = document.querySelector('.images');
const circleOne = document.querySelector('.first');
const circleTwo = document.querySelector('.second');
const circleThird = document.querySelector('.third');
const circles = document.querySelector('.circles');

timerid = setInterval(tick,1000);
const pxSize = [-250, -500, 0];
let index = 0;



function tick(){
    images.style.left = pxSize[index] + 'px';
    if(index === 2){
        showFirst();
    }else if(index === 0){
        showSecond();
    }
    else{
        showThird();
    }
    index = (index + 1) % pxSize.length;
}


function showFirst(){
    circleOne.style.backgroundColor = "brown";
    circleTwo.style.backgroundColor = "white";
    circleThird.style.backgroundColor = "white";
}


function showSecond(){
    circleOne.style.backgroundColor = "white";
    circleTwo.style.backgroundColor = "grey";
    circleThird.style.backgroundColor = "white";
}

function showThird(){
    circleOne.style.backgroundColor = "white";
    circleTwo.style.backgroundColor = "white";
    circleThird.style.backgroundColor = "blue";
}

function showOne(){
    clearInt();
    images.style.left = pxSize[2] + 'px';     
}

function showTwo(){
    clearInt();
    images.style.left = pxSize[0] + 'px';     
}

function showThree(){
    clearInt();
    images.style.left = pxSize[1] + 'px';     
}


function clearInt(){
    clearInterval(timerid);
}

circleOne.addEventListener('click', showOne());
circleTwo.addEventListener('click', showTwo());
circleThird.addEventListener('click', showThree());
