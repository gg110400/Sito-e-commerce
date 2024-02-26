// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS

// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function changeH1 () {
 let titolo= document.getElementById("titolo-pagina")
 titolo.textContent= "Scopri le offerte di Marzo!!"
}



// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function changeBackgroundColor () {
     document.body.style.backgroundColor = "black";
    let h1=document.getElementById("titolo-pagina");
    h1.style.color="white";

    let h3s = document.querySelectorAll("h3");
for(let i = 0; i < h3s.length; i++) {
    h3s[i].style.color = "white";
}

let h4s=document.querySelectorAll("h4")
for (let i=0; i< h4s.length; i++) {
    h4s[i].style.color="white";
}
   
   


}

function modalitàGiorno () {
    document.body.style.backgroundColor = "white";
    let h1=document.getElementById("titolo-pagina");
    h1.style.color="black";

    let h3s = document.querySelectorAll("h3");
for(let i = 0; i < h3s.length; i++) {
    h3s[i].style.color = "black";
}

let h4s=document.querySelectorAll("h4")
for (let i=0; i< h4s.length; i++) {
    h4s[i].style.color="black";
}
}



// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio





// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function addClass () {
    let links = document.querySelectorAll("a"); // Seleziona tutti i link
for(let i = 0; i < links.length; i++) {
    links[i].classList.add("miaClasse"); // Aggiungi la classe "miaClasse" a ogni link
}

}



// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function nascondiImmagini() {
    let immagini = document.getElementsByTagName('img');
    for (let i = 0; i < immagini.length; i++) {
        immagini[i].style.display = 'none';
    }
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function changePriceColor () {
  let h4s=document.querySelectorAll("h4");
  for (let i=0; i < h4s.length; i++) {
    h4s[i].style.color="red"
  }
}

