//Al click del bottone parte una funzione che calcola il prezzo ed eventuale sconto coupon
//Ho un prezzo standard di 50$
//Se l'utente clicka sui checkbox sommare al prezzo standard


//Creare la funzione al click del bottone
var bottone = document.getElementById("bottone");
bottone.addEventListener("click", function() {

    var prezzoTotale = parseInt(50);
    console.log("PrezzoBase $", prezzoTotale);



//Verificare se l'utente ha selezionato qualche checkbox, 
    //se si allora aggiornare il totale. 


//CHEESE
    //Calcolare la somma di cheese
    var cheeseString = document.getElementById("cheese").value;
    var cheese = parseInt(cheeseString);
    console.log("Il valore di cheese è: ", cheese);

    //checked cheese
    var cheeseBoolean = document.getElementById("cheese").checked;
    console.log("cheeseBool è ", cheeseBoolean);

    if ( cheeseBoolean == true ) {
        prezzoTotale = prezzoTotale + cheese;
    }


//TOMATO
    //Calcolare la somma di tomato
    var tomatoString = document.getElementById("tomato").value;
    var tomato = parseInt(tomatoString);

    //checked tomato
    var tomatoBoolean = document.getElementById("tomato").checked;

    if ( tomatoBoolean == true ) {
        prezzoTotale = prezzoTotale + tomato;
    }


//EGG
    //Calcolare la somma di egg
    var eggString = document.getElementById("egg").value;
    var egg = parseInt(eggString);

    //checked egg
    var eggBoolean = document.getElementById("egg").checked;

    if ( eggBoolean == true ) {
        prezzoTotale = prezzoTotale + egg;
    }


//LETTUCE
    //Calcolare la somma di lettuce
    var lettuceString = document.getElementById("lettuce").value;
    var lettuce = parseInt(lettuceString);

    //checked lettuce
    var lettuceBoolean = document.getElementById("lettuce").checked;

    if ( lettuceBoolean == true ) {
        prezzoTotale = prezzoTotale + lettuce;
    }


//MUSTARD
    //Calcolare la somma di mustard
    var mustardString = document.getElementById("mustard").value;
    var mustard = parseInt(mustardString);

    //checked mustard
    var mustardBoolean = document.getElementById("mustard").checked;

    if ( mustardBoolean == true ) {
        prezzoTotale = prezzoTotale + mustard;
    }

 
//KETCHUP
    //Calcolare la somma di ketchup
    var ketchupString = document.getElementById("ketchup").value;
    var ketchup = parseInt(ketchupString);

    //checked ketchup
    var ketchupBoolean = document.getElementById("ketchup").checked;

    if ( ketchupBoolean == true ) {
        prezzoTotale = prezzoTotale + ketchup;
    }

    console.log("la somma totale deve essere di 94, La somma è: ", prezzoTotale);

    
    //Calcolare lo sconto coupon
    //Se inserisci questo codice DFINSX si applica il 20% di sconto

    var coupon = "DFINSX";

    var couponInput = document.getElementById("coupon-lab").value;
    console.log("cannotInput è: ", couponInput);

    if ( couponInput == coupon ) {
        prezzoTotale = prezzoTotale - ( prezzoTotale * 20 / 100 );
    }
  
    //Stampare
    document.getElementById("totale").innerHTML = "$ " + prezzoTotale;
    
});

