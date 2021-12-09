for(var i=0; i<7; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        sound(this.innerHTML);
        animbutton(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event){
  sound(event.key);
  animbutton(event.key);
});

function sound(key){
    switch(key){
        case "w":
            new Audio('sounds/crash.mp3').play();
        break;
        case "a":
            new Audio('sounds/kick-bass.mp3').play();
        break;
        case "s":
            new Audio('sounds/snare.mp3').play();
        break;
        case "d":
            new Audio('sounds/tom-1.mp3').play();
        break;
        case "j":
            new Audio('sounds/tom-2.mp3').play();
        break;
        case "k":
            new Audio('sounds/tom-3.mp3').play();
        break;
        case "l":
            new Audio('sounds/tom-4.mp3').play();
        break;
        default:
    }
}

function animbutton(key){
    var act=document.querySelector("."+key);
    act.classList.add("clicked");
    setTimeout(function(){
        act.classList.remove("clicked");
    }, 200);
}