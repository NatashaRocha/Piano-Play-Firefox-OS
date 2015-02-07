$(document).ready(function() {
    var c1 = document.createElement('audio');
    c1.setAttribute('src', '/ogg/c1/c1.ogg');    
        
    c1.addEventListener("load", function(){
       c1.play();
    }, true);
    
    var C1 = document.getElementById('C1');
    C1.addEventListener("touchstart",function(){
        $(this).addClass("whitepressed");
        c1.load();
        c1.play();    
    }, true);
    C1.addEventListener("touchend",function(){
        $(this).removeClass("whitepressed");
    }, true);     
    
    var db1 = document.createElement('audio');
    db1.setAttribute('src', '/ogg/c1/db1.ogg');    
        
    db1.addEventListener("load", function(){
       db1.play();
    }, true);
    
    var Db1 = document.getElementById('Db1');
    Db1.addEventListener("touchstart",function(){
        $(this).addClass("blackpressed");
        db1.load();
        db1.play();    
    }, true); 
    Db1.addEventListener("touchend",function(){
        $(this).removeClass("blackpressed");
    }, true);

    var d1 = document.createElement('audio');
    d1.setAttribute('src', '/ogg/c1/d1.ogg');    
        
    d1.addEventListener("load", function(){
       d1.play();
    }, true);
    
    var D1 = document.getElementById('D1');
    D1.addEventListener("touchstart",function(){
        $(this).addClass("whitepressed");
        d1.load();
        d1.play();    
    }, true);
    D1.addEventListener("touchend",function(){
        $(this).removeClass("whitepressed");
    }, true);
    
    var eb1 = document.createElement('audio');
    eb1.setAttribute('src', '/ogg/c1/eb1.ogg');    
        
    eb1.addEventListener("load", function(){
       eb1.play();
    }, true);
    
    var Eb1 = document.getElementById('Eb1');
    Eb1.addEventListener("touchstart",function(){
        $(this).addClass("blackpressed");
        eb1.load();
        eb1.play();    
    }, true);
    Eb1.addEventListener("touchend",function(){
        $(this).removeClass("blackpressed");
    }, true); 
    
    var e1 = document.createElement('audio');
    e1.setAttribute('src', '/ogg/c1/e1.ogg');    
        
    e1.addEventListener("load", function(){
       e1.play();
    }, true);
    
    var E1 = document.getElementById('E1');
    E1.addEventListener("touchstart",function(){
        $(this).addClass("whitepressed");        
        e1.load();
        e1.play();    
    }, true);
    E1.addEventListener("touchend",function(){
        $(this).removeClass("whitepressed");
    }, true);
    
    var f1 = document.createElement('audio');
    f1.setAttribute('src', '/ogg/c1/f1.ogg');    
        
    f1.addEventListener("load", function(){
       f1.play();
    }, true);
    
    var F1 = document.getElementById('F1');
    F1.addEventListener("touchstart",function(){
        $(this).addClass("whitepressed");        
        f1.load();
        f1.play();    
    }, true);
    F1.addEventListener("touchend",function(){
        $(this).removeClass("whitepressed");
    }, true);
    
    var gb1 = document.createElement('audio');
    gb1.setAttribute('src', '/ogg/c1/gb1.ogg');    
        
    gb1.addEventListener("load", function(){
       gb1.play();
    }, true);
    
    var Gb1 = document.getElementById('Gb1');
    Gb1.addEventListener("touchstart",function(){
        $(this).addClass("blackpressed");
        gb1.load();
        gb1.play();    
    }, true);
    Gb1.addEventListener("touchend",function(){
        $(this).removeClass("blackpressed");
    }, true);

    var g1 = document.createElement('audio');
    g1.setAttribute('src', '/ogg/c1/g1.ogg');    
        
    g1.addEventListener("load", function(){
       g1.play();
    }, true);
    
    var G1 = document.getElementById('G1');
    G1.addEventListener("touchstart",function(){
        $(this).addClass("whitepressed");
        g1.load();
        g1.play();    
    }, true);
    G1.addEventListener("touchend",function(){
        $(this).removeClass("whitepressed");
    }, true);

    var ab1 = document.createElement('audio');
    ab1.setAttribute('src', '/ogg/c1/ab1.ogg');    
        
    ab1.addEventListener("load", function(){
       ab1.play();
    }, true);
    
    var Ab1 = document.getElementById('Ab1');
    Ab1.addEventListener("touchstart",function(){
        $(this).addClass("blackpressed");
        ab1.load();
        ab1.play();    
    }, true);
    Ab1.addEventListener("touchend",function(){
        $(this).removeClass("blackpressed");
    }, true);    
    
    var a1 = document.createElement('audio');
    a1.setAttribute('src', '/ogg/c1/a1.ogg');    
        
    a1.addEventListener("load", function(){
       a1.play();
    }, true);
    
    var A1 = document.getElementById('A1');
    A1.addEventListener("touchstart",function(){
        $(this).addClass("whitepressed");
        a1.load();
        a1.play();    
    }, true);
    A1.addEventListener("touchend",function(){
        $(this).removeClass("whitepressed");
    }, true);
    
    var bb1 = document.createElement('audio');
    bb1.setAttribute('src', '/ogg/c1/bb1.ogg');    
        
    bb1.addEventListener("load", function(){
       bb1.play();
    }, true);
    
    var Bb1 = document.getElementById('Bb1');
    Bb1.addEventListener("touchstart",function(){
        $(this).addClass("blackpressed");
        bb1.load();
        bb1.play();    
    }, true);
    Bb1.addEventListener("touchend",function(){
        $(this).removeClass("blackpressed");
    }, true);
    
    var b1 = document.createElement('audio');
    b1.setAttribute('src', '/ogg/c1/b1.ogg');    

    b1.addEventListener("load", function(){
       b1.play();
    }, true);
    
    var B1 = document.getElementById('B1');
    B1.addEventListener("touchstart",function(){
        $(this).addClass("whitepressed");
        b1.load();
        b1.play();    
    }, true);
    B1.addEventListener("touchend",function(){
        $(this).removeClass("whitepressed");
    }, true);
    
    var c2 = document.createElement('audio');
    c2.setAttribute('src', '/ogg/c2/c2.ogg');    
        
    c2.addEventListener("load", function(){
       c1.play();
    }, true);
    
    var C2 = document.getElementById('C2');
    C2.addEventListener("touchstart",function(){
        $(this).addClass("whitepressed");
        c2.load();
        c2.play();    
    }, true); 
    C2.addEventListener("touchend",function(){
        $(this).removeClass("whitepressed");
    }, true);
    
    
    var db2 = document.createElement('audio');
    db2.setAttribute('src', '/ogg/c2/db2.ogg');    
        
    db2.addEventListener("load", function(){
       db2.play();
    }, true);
    
    var Db2 = document.getElementById('Db2');
    Db2.addEventListener("touchstart",function(){
        $(this).addClass("blackpressed");
        db2.load();
        db2.play();    
    }, true); 
    Db2.addEventListener("touchend",function(){
        $(this).removeClass("blackpressed");
    }, true);

    var d2 = document.createElement('audio');
    d2.setAttribute('src', '/ogg/c2/d2.ogg');    
        
    d2.addEventListener("load", function(){
       d2.play();
    }, true);
    
    var D2 = document.getElementById('D2');
    D2.addEventListener("touchstart",function(){
        $(this).addClass("whitepressed");
        d2.load();
        d2.play();    
    }, true);
    D2.addEventListener("touchend",function(){
        $(this).removeClass("whitepressed");
    }, true);
    
    var eb2 = document.createElement('audio');
    eb2.setAttribute('src', '/ogg/c2/eb2.ogg');    
        
    eb2.addEventListener("load", function(){
       eb2.play();
    }, true);
    
    var Eb2 = document.getElementById('Eb2');
    Eb2.addEventListener("touchstart",function(){
        $(this).addClass("blackpressed");
        eb2.load();
        eb2.play();    
    }, true);
    Eb2.addEventListener("touchend",function(){
        $(this).removeClass("blackpressed");
    }, true);
    
    var e2 = document.createElement('audio');
    e2.setAttribute('src', '/ogg/c2/e2.ogg');    
        
    e2.addEventListener("load", function(){
       e2.play();
    }, true);
    
    var E2 = document.getElementById('E2');
    E2.addEventListener("touchstart",function(){
        $(this).addClass("whitepressed");
        e2.load();
        e2.play();    
    }, true);
    E2.addEventListener("touchend",function(){
        $(this).removeClass("whitepressed");
    }, true);
    
    var f2 = document.createElement('audio');
    f2.setAttribute('src', '/ogg/c2/f2.ogg');    
        
    f2.addEventListener("load", function(){
       f2.play();
    }, true);
    
    var F2 = document.getElementById('F2');
    F2.addEventListener("touchstart",function(){
        $(this).addClass("whitepressed");
        f2.load();
        f2.play();    
    }, true);
    F2.addEventListener("touchend",function(){
        $(this).removeClass("whitepressed");
    }, true);
    
    var gb2 = document.createElement('audio');
    gb2.setAttribute('src', '/ogg/c2/gb2.ogg');    
        
    gb2.addEventListener("load", function(){
       gb2.play();
    }, true);
    
    var Gb2 = document.getElementById('Gb2');
    Gb2.addEventListener("touchstart",function(){
        $(this).addClass("blackpressed");
        gb2.load();
        gb2.play();    
    }, true);
    Gb2.addEventListener("touchend",function(){
        $(this).removeClass("blackpressed");
    }, true);

    var g2 = document.createElement('audio');
    g2.setAttribute('src', '/ogg/c2/g2.ogg');    
        
    g2.addEventListener("load", function(){
       g2.play();
    }, true);
    
    var G2 = document.getElementById('G2');
    G2.addEventListener("touchstart",function(){
        $(this).addClass("whitepressed");
        g2.load();
        g2.play();    
    }, true);
    G2.addEventListener("touchend",function(){
        $(this).removeClass("whitepressed");
    }, true);

    var ab2 = document.createElement('audio');
    ab2.setAttribute('src', '/ogg/c2/ab2.ogg');    
        
    ab2.addEventListener("load", function(){
       ab2.play();
    }, true);
    
    var Ab2 = document.getElementById('Ab2');
    Ab2.addEventListener("touchstart",function(){
        $(this).addClass("blackpressed");
        ab2.load();
        ab2.play();    
    }, true);
    Ab2.addEventListener("touchend",function(){
        $(this).removeClass("blackpressed");
    }, true);
    
    var a2 = document.createElement('audio');
    a2.setAttribute('src', '/ogg/c2/a2.ogg');    
        
    a2.addEventListener("load", function(){
       a2.play();
    }, true);
    
    var A2 = document.getElementById('A2');
    A2.addEventListener("touchstart",function(){
        $(this).addClass("whitepressed");
        a2.load();
        a2.play();    
    }, true);
    A2.addEventListener("touchend",function(){
        $(this).removeClass("whitepressed");
    }, true);
    
    var bb2 = document.createElement('audio');
    bb2.setAttribute('src', '/ogg/c2/bb2.ogg');    
        
    bb2.addEventListener("load", function(){
       bb2.play();
    }, true);
    
    var Bb2 = document.getElementById('Bb2');
    Bb2.addEventListener("touchstart",function(){
        $(this).addClass("blackpressed");
        bb2.load();
        bb2.play();    
    }, true);
    Bb2.addEventListener("touchend",function(){
        $(this).removeClass("blackpressed");
    }, true);
    
    
    
    var b2 = document.createElement('audio');
    b2.setAttribute('src', '/ogg/c2/b2.ogg');    
        
    b2.addEventListener("load", function(){
       b2.play();
    }, true);
    
    var B2 = document.getElementById('B2');
    B2.addEventListener("touchstart",function(){
        $(this).addClass("whitepressed");
        b2.load();
        b2.play();    
    }, true);
    B2.addEventListener("touchend",function(){
        $(this).removeClass("whitepressed");
    }, true);    
    
    
    var c3 = document.createElement('audio');
    c3.setAttribute('src', '/ogg/c2/c3.ogg');    
        
    c3.addEventListener("load", function(){
       c3.play();
    }, true);
    
    var C3 = document.getElementById('C3');
    C3.addEventListener("touchstart",function(){
        $(this).addClass("whitepressed");
        c3.load();
        c3.play();    
    }, true);
    C3.addEventListener("touchend",function(){
        $(this).removeClass("whitepressed");
    }, true);    
    

});