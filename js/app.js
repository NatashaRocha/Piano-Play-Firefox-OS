function playTone(key) {
    var tone = new Audio();   
    tone.src = "/ogg/"+key+".ogg";
    tone.load();
    tone.play();
    
};

$(document).ready(function(){
    
    var w = document.getElementsByClassName("white");
    for(var i=0; i<w.length; i++){  
        w[i].addEventListener("touchstart",function(){
            $(this).addClass("whitepressed");            
            playTone(this.id);
        }, true);
        w[i].addEventListener("touchend",function(){
            $(this).removeClass("whitepressed");            
        }, true);        
    };
    
    var b = document.getElementsByClassName("black");
    for(var i=0; i<b.length; i++){
        b[i].addEventListener("touchstart",function(){
            $(this).addClass("blackpressed");            
            playTone(this.id);
        }, true);
        b[i].addEventListener("touchend",function(){
            $(this).removeClass("blackpressed");            
        }, true);
    };
})