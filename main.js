// 5 NUMERI CASUALI IN PAGINA
// TIMER 30 SECONDI
// DOPO 30 SEC, I NUMERI SCOMPAIONO E L'UTENTE DOVRA' INSERIRE I NUMERI UNO ALLA VOLTA.

const btnstart = document.getElementById("start");
const RandNum = document.getElementById("numbers");
let invia = document.getElementById("btn-invia");


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
        setTimeout(() => {
            const box = document.getElementById('numbers');
            box.style.display = 'none';


            let inputBox = document.getElementById("input-box").style.display = "block";
          }, 1000); // 👈️ time in milliseconds

    // collegare gli input al bottone

    // dichiaro gli imput


    invia.addEventListener("click",
        function(){

            let input1 = parseInt(document.getElementById("input1").value)
            let input2 = parseInt(document.getElementById("input2").value)
            let input3 = parseInt(document.getElementById("input3").value)
            let input4 = parseInt(document.getElementById("input4").value)
            let input5 = parseInt(document.getElementById("input5").value)

            let arrayUtente = [input1,input2,input3,input4,input5];
            console.log(arrayUtente)


    // controllare se i due array combacino elemento per elemnto (.lenght)

    let numeriInComune = ArrNumber.filter(x => arrayUtente.includes(x));
    console.log(numeriInComune)
    
    if (numeriInComune.length === 5) {
        
        document.getElementById("risultato").innerHTML = `Hai Vinto indovinando tutti e 5 i numeri!!!`

    } else {

        document.getElementById("risultato").innerHTML = `hai indovinato solo ${numeriInComune.length} numeri. Questi sono i numeri che hai indovinato ${numeriInComune}. Purtroppo non sei riuscito a battere Simon, Riprova`
    }

    }

    );
    }
);

