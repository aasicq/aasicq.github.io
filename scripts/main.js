//for image flikiring
let imgHeading = document.querySelector('img')
imgHeading.onclick = function(){
    let imgSrc = imgHeading.getAttribute('src')
    if(imgSrc === "images/img.JPG"){
        imgHeading.setAttribute('src', 'images/img1.JPG');
    } else if(imgSrc==='images/img1.JPG') {
        imgHeading.setAttribute('src', 'images/img2.JPG');
    } else {
        imgHeading.setAttribute('src', 'images/img.JPG');
    }
}



//For changing username

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName(){
    let myName = prompt('What is your name?');
    if(!myName){
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome '+myName+'!';
    }
}

if(!localStorage){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome '+storedName+'!';
}

myButton.onclick = function(){
    setUserName();
}

