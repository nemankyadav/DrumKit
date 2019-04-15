const sound = [new Audio("boom.wav"),new Audio("clap.wav"),new Audio("hihat.wav"),new Audio("kick.wav"),new Audio("openhat.wav"),new Audio("ride.wav"),new Audio("snare.wav"),new Audio("tink.wav"),new Audio("tom.wav")]

playSound=function(i)
{
    document.getElementById(i);    
    sound[i].currentTime=0;
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
    if(e.keyCode===65){sound[0].currentTime=0;sound[0].play()}
    else if(e.keyCode===83){sound[1].currentTime=0;sound[1].play()}
    else if(e.keyCode===68){sound[2].currentTime=0;sound[2].play()}
    else if(e.keyCode===70){sound[3].currentTime=0;sound[3].play()}
    else if(e.keyCode===71){sound[4].currentTime=0;sound[4].play()}
    else if(e.keyCode===72){sound[5].currentTime=0;sound[5].play()}
    else if(e.keyCode===74){sound[6].currentTime=0;sound[6].play()}
    else if(e.keyCode===75){sound[7].currentTime=0;sound[7].play()}
    else if(e.keyCode===76){sound[8].currentTime=0;sound[8].play()}
});