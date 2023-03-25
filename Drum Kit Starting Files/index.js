var buttons = document.querySelectorAll("button");
//For detecting the click of the button/drum and playing sound corresponding to the key that was pressed :
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function (){
        var buttonKey = this.innerHTML;
        makeSound(buttonKey);
        animatedButton(buttonKey)
    });
}


//For detecting which key was pressed from the keyboard:
//step 1: added an event listener to the complete document:
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animatedButton(event.key)
});


//creating a function which takes in the input character and checks which button/key is pressed from mouse or keyboard
//and plays the corresponding audio..
function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default: 
            console.log(this.innerHTML);        
    }
}

function animatedButton(key){
    //selecting the button which got clicked i.e with the help of key:
    var activeButton = document.querySelector("."+key);
    //now adding the pressed class to the classList of that button
    activeButton.classList.add("pressed");
    //now delaying the removal of pressed class by 0.1 second such that it looks like an animation:
    //using the setTimeout function:
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },140) ;
}