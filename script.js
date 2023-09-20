

// 3 -creo una funzione che genera 5 prompt con richiesta numeri e inserisco i numeri in un nuovo array;

// 4- creo una funzione per svuotare la pagina;

//  5- Imposto il setTimeOut di 5 sec: scompaiono i numeri e parte un ciclo di prompt per richiedere i numeri all'utente;


//  - confronto i due array e uso includes per verificare la presenza dei numeri e il n. di numeri individuati;

// - stampo il risultato;



const output = document.getElementById("output");


// // 2. stampo la lista in pagina 
output.innerHTML = randomNumbers()



// 5 - Imposto il setTimeOut di 5 sec: scompaiono i numeri e parte un ciclo di prompt per richiedere i numeri all'utente;



// setTimeout(function() {
//   resetPage();
// }, 5000);


// setTimeout(function() {
//  insertNumbers();
// }
// , 5500)



//1. generare una lista di cinque numeri casuali (da 1 a 50)

function randomNumbers() {
  const numbersList = [];
 
  for(i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * (50 - 1)) + 1;
    numbersList.push(randomNum);
  }

  return numbersList;

}

// 3.  richiedere i 5 numeri all'utente e li inserisce in un array


function insertNumbers() {
  
  const userNumbers = [];

  for(i = 0; i < 5; i++) {

    let oneNumber = parseInt(prompt("Inserisci un numero per volta, quello che ricordi:"));

    if (isNaN(oneNumber)) {
      alert("Per favore inserisci un numero valido!");
    } else if (oneNumber > 51 || oneNumber < 0) {
      alert("Inserisci un numero da 1 a 50");
    } else userNumbers.push(oneNumber);
  }
  console.log(userNumbers);
}

// 4. funzione per svuotare la pagina 

function resetPage()  {
  output.innerHTML = " ";
}