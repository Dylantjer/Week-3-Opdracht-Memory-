var kaarten = document.querySelectorAll('.memory-kaart');

var alGeflipteKaart = false;
var slotBoard = false;
var eersteKaart, tweedeKaart;
var score = 0;

function clickStart(){
    document.getElementById("voorGrond").style.visibility = "hidden";

//-----------------------------------------------------------------------------------
// Set the date we're counting down to
var countDownDate = new Date().getTime() + 600000;



// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML = seconds + " Seconden ";
    console.log(distance);
  // If the count down is finished, write some text
  if (distance < 541000) {
   // distance = 1000;
    alert("JUEGO TERMINADO! / SPEL IS OVER!");
    stop();
    document.getElementById("time").innerHTML = "Tijd Voorbij";
    location.reload();
        }
    }, 1000);
}

function stop(){
    console.log("Stop");
    clearInterval(1);
}
//------------------------------------------------------------

function flipKaart(){
    if(slotBoard) return;
    if (this === eersteKaart) return;
this.classList.add("flip");

if(!alGeflipteKaart){
   //Eerste klik+
   alGeflipteKaart = true;
    eersteKaart = this;

            return;
        }
            //Tweede klik
        tweedeKaart = this;
        checkvoorMatch();       
}   

function checkvoorMatch(){
//Kaarten vergelijken
var alsMatch = eersteKaart.dataset.naam === tweedeKaart.dataset.naam;
alsMatch ? kaartenUitschakelen() : nietGeflipt();

}
function matchGeluidsFx(){
    var speelAudio = document.getElementById("tweeKaartenSfx");
}
window.onload = function (){

}
function kaartenUitschakelen(){
    eersteKaart.removeEventListener('click', flipKaart);
    tweedeKaart.removeEventListener('click', flipKaart);
    var deAudio = document.getElementById("muziekID");
    deAudio.src = './Assets/Music/ole.mp3';
    deAudio.play(); 
    var deScore = document.getElementById("scoreID");
    score++;
    deScore.innerHTML = score;  
    if(score==8){
        alert("eres ganador!");

    }
    

// HIER MOET EEN TELLER KOMEN VOOR DE PUNTEN EN EINDE SPEL VOOR REFRESH// 
    herstelboard();
    matchGeluidsFx();
}

function nietGeflipt(){
    slotBoard = true;
//^ NIET EEN MATCH //
setTimeout(() => {
    eersteKaart.classList.remove('flip');
    tweedeKaart.classList.remove('flip');
    herstelboard(); 
    }, 1500);
}

function herstelboard(){
    [alGeflipteKaart, slotBoard] = [false, false];
    [eersteKaart, tweedeKaart] = [null, null];
}

(function schudden(){
    kaarten.forEach(kaart => {
    let willekeurigPositie = Math.floor(Math.random() * 16);
    kaart.style.order = willekeurigPositie;
    });
})();



kaarten.forEach(kaarten => kaarten.addEventListener('click', flipKaart));