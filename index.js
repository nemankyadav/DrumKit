// drumkit framework
const sound = [new Audio("boom.wav"),new Audio("clap.wav"),new Audio("hihat.wav"),new Audio("kick.wav"),new Audio("openhat.wav"),new Audio("ride.wav"),new Audio("snare.wav"),new Audio("tink.wav"),new Audio("tom.wav")]

playSound = function(i) {
    let element = document.getElementById(i);    
    element.style.cssText='background-color:black;color:white;border:solid white';
    sound[i].currentTime = 0;
    sound[i].play();
    let highlightTime = 100;
    let interval = setInterval(frame, highlightTime);
    function frame() {
        if (!sound[i].seeking) {
            element.style.cssText='background-color:transparent;color:black;border:solid black';
            clearInterval(interval);
        }
    }
}

// keybindings to drumkit
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

//recorder

var timeArray=[];
var j=0;var l=0; k=-1;
var recordingArray=[];
var startTime,endTime;

function start() {
  startTime = new Date();
};
function end() {
    endTime = new Date();
   return endTime - startTime;
}
abc=function(e){
    if     (e.keyCode===65){recordingArray[j++]='0';console.log(recordingArray.length);timeArray[l++]=end();start()}
    else if(e.keyCode===83){recordingArray[j++]='1';console.log(recordingArray.length);timeArray[l++]=end();start()}
    else if(e.keyCode===68){recordingArray[j++]='2';console.log(recordingArray.length);timeArray[l++]=end();start()}
    else if(e.keyCode===70){recordingArray[j++]='3';console.log(recordingArray.length);timeArray[l++]=end();start()}
    else if(e.keyCode===71){recordingArray[j++]='4';console.log(recordingArray.length);timeArray[l++]=end();start()}
    else if(e.keyCode===72){recordingArray[j++]='5';console.log(recordingArray.length);timeArray[l++]=end();start()}
    else if(e.keyCode===74){recordingArray[j++]='6';console.log(recordingArray.length);timeArray[l++]=end();start()}
    else if(e.keyCode===75){recordingArray[j++]='7';console.log(recordingArray.length);timeArray[l++]=end();start()}
    else if(e.keyCode===76){recordingArray[j++]='8';console.log(recordingArray.length);timeArray[l++]=end();start()}
}
startRecording=function(){
    document.addEventListener("keydown",abc);
    }
stopRecording=function(){
    document.removeEventListener("keydown",abc);
}

playRecording=function(){
    setTimeout(function(){
        sound[recordingArray[k]].currentTime=0;
        sound[recordingArray[k]].play()
        playRecording()
    }, timeArray[++k])  
}