var tones = [];

function init(){ 
   var w = document.getElementsByClassName("key");

    for(var i = 0; i < w.length; i++){
        tones[i] = {};

        tones[i].sound = new Audio();   
        tones[i].sound.src = "/ogg/"+w[i].id+".ogg";

        tones[i].key = w[i];

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
    w.addEventListener("mousedown", function(e){
        $(this).addClass(class_name);
        playTone(this.value);        
    }, false)

    w.addEventListener("mouseup", function(e){
        $(this).removeClass(class_name);
        stopTone(this.value);        
    }, false)

    w.addEventListener("touchstart",function(e){
        $(this).addClass(class_name);            
        playTone(this.value);
    }, true);


    w.addEventListener("touchend",function(){
        $(this).removeClass(class_name);   
        stopTone(this.value);
    }, true);                
}

function playTone(key) {
    tones[key].sound.play();    
    _target = tones[key];
    tones[key].sound.onended = function(){
        if(_target.key.id.indexOf("b") == -1){
            $(_target.key).removeClass("whitepressed");
        }
        else{
            $(_target.key).removeClass("blackpressed");
        }
    }
};

function stopTone(key){
    tones[key].sound.pause();
    tones[key].sound.currentTime=0;
}

$(document).ready(function(){
    init();    
})