// 5 NUMERI CASUALI IN PAGINA
// TIMER 30 SECONDI
// DOPO 30 SEC, I NUMERI SCOMPAIONO E L'UTENTE DOVRA' INSERIRE I NUMERI UNO ALLA VOLTA.

const btnstart = document.getElementById("start");
const RandNum = document.getElementById("numbers");


function ArrNumbRandom(min, max) {
    return Math.floor(Math.random() * (50 - 1 + 1) ) + 1;
}

function generaMinMax(min,max){
    return (Math.floor(Math.random() * ((max + 1) - min) + min))

   }
    function generaArrayNrRandom(quanti,numMin,numMax){
        const ARRAYNUMERI=[];
    while ((ARRAYNUMERI.length) < quanti){
        let nuovoNumero= generaMinMax(numMin,numMax);
        if ( !ARRAYNUMERI.includes(nuovoNumero)){
            ARRAYNUMERI.push(nuovoNumero);
        }
    }
    return ARRAYNUMERI
}

btnstart.addEventListener("click",

    function() {
        let ArrNumber = generaArrayNrRandom(5,1,50);
        console.log(ArrNumber);
        RandNum.innerHTML += `<div>${ArrNumber}</div>`
    }

    setTimeout()( => {
        const box = document.getElementById('numbers');
      
        // 👇️ removes element from DOM
        box.style.display = 'none';
      
        // 👇️ hides element (still takes up space on page)
        // box.style.visibility = 'hidden';
      }, 3000); // 👈️ time in milliseconds
      

);

