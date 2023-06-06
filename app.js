function load(){
    let slide = document.getElementById("call-flt");
    slide.style.top  = "200px";
    slide.style.transition = "0.7s";
    var audio = new Audio();
    audio.src = "ring.mp3";
    audio.play();
    let cli = document.getElementById("acc");
    cli.addEventListener("click",function(){
        audio.pause();
        window.location.href="download.html";
    })
}
   