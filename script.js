// # js-simon
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi. Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, tramite il prompt(), uno alla volta, i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// 1 - Creo una funzione che mi generi una lista di 5 numeri casuali;

// 2 - Stampo la lista in pagina;

// 3 - Imposto il setTimeOut di 5 sec: scompaiono i numeri e parte un ciclo di prompt per richiedere i numeri all'utente;;

// 4 - inserisco i numeri in un nuovo array;

// 5 - confronto i due array e uso includes per verificare la presenza dei numeri e il n. di numeri individuati:
// 6. stampo il risultato;

const output = document.getElementById("output");


// 2. stampo la lista in pagina 
output.innerHTML = randomNumbers()






//1. generare una lista di cinque numeri casuali (da 1 a 50)

function randomNumbers() {
  const numbersList = [];
 
  for(i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * (50 - 1)) + 1;
    numbersList.push(randomNum);
  }

  return numbersList;


}
