const sound = [new Audio("boom.wav"),new Audio("clap.wav"),new Audio("hihat.wav"),new Audio("kick.wav"),new Audio("openhat.wav"),new Audio("ride.wav"),new Audio("snare.wav"),new Audio("tink.wav"),new Audio("tom.wav")]

playSound = function(i) {
    document.getElementById(i);    
    sound[i].currentTime = 0;
    sound[i].play();
    setInterval(frame, 0.1);
    function frame() {
        if (sound[i].seeking) {
             document.getElementById(i).style.cssText='background-color:black;color:white;border:solid white';
             clearInterval(id);
    
        } else {
             document.getElementById(i).style.cssText='background-color:transparent;color:black;border:solid black';
        }
    }
}
document.addEventListener("keydown",function(e){
    if (e.keyCode===65){playSound(0);}
    else if(e.keyCode===83){playSound(1);}
    else if(e.keyCode===68){playSound(2);}
    else if(e.keyCode===70){playSound(3);}
    else if(e.keyCode===71){playSound(4);}
    else if(e.keyCode===72){playSound(5);}
    else if(e.keyCode===74){playSound(6);}
    else if(e.keyCode===75){playSound(7);}
    else if(e.keyCode===76){playSound(8);}
});