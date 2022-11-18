// 5 NUMERI CASUALI IN PAGINA
// TIMER 30 SECONDI
// DOPO 30 SEC, I NUMERI SCOMPAIONO E L'UTENTE DOVRA' INSERIRE I NUMERI UNO ALLA VOLTA.

const btnstart = document.getElementById("start");
const RandNum = document.getElementById("numbers");


btnstart.addEventListener("click",

    function() {
        let ArrNumber = ArrNumbRandom(5,1,10);
        console.log(ArrNumber);
        RandNum.innerHTML = `<div>${ArrNumber}</div>`
    }

);