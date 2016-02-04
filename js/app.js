var tones = [];

function init(){
    var w = document.getElementsByClassName("key");

    for(var i = 0; i < w.length; i++){

        tones[i] = new Audio();   
        tones[i].src = "/ogg/"+w[i].id+".ogg";

        w[i].value = i;
        w[i].played = false;

        if(w[i].id.indexOf("b") == "-1"){
            addEvent(w[i],'whitepressed');
        }else{
            addEvent(w[i],'blackpressed');
        }
    }
}

function addEvent(w, class_name){
    w.addEventListener("touchstart",function(e){
        $(this).addClass(class_name);            
        playTone(this.value);
        this.played = true;
        console.log(e);
    }, true);

    w.addEventListener("touchend",function(){
        $(this).removeClass(class_name);   
        stopTone(this.value);
        this.played = false;         
    }, true);                
}

function playTone(key) {
    tones[key].play();    
};

function stopTone(key){
    tones[key].pause();
    tones[key].currentTime=0;
}

$(document).ready(function(){
    init();    
})