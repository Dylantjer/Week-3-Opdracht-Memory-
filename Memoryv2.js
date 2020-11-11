var kaarten = document.querySelectorAll('.memory-kaart');

var alGeflipteKaart = false;
var slotBoard = false;
var eersteKaart, tweedeKaart;

function flipKaart(){
    if(slotBoard) return;
    if (this === eersteKaart) return;
this.classList.add("flip");

if(!alGeflipteKaart){
   //Eerste klik
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

function kaartenUitschakelen(){
    eersteKaart.removeEventListener('click', flipKaart);
    tweedeKaart.removeEventListener('click', flipKaart);

    herstelboard();
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