//Al click del bottone parte una funzione che calcola il prezzo ed eventuale sconto coupon
//Ho un prezzo standard di 50$
//Se l'utente clicka sui checkbox sommare al prezzo standard


//Creare la funzione al click del bottone
var bottone = document.getElementById("bottone");
bottone.addEventListener("click", function() {

    var prezzoTotale = parseInt(50);
    console.log("PrezzoBase $", prezzoTotale);

    //Calcolare la somma di cheese
    var cheese = document.getElementById("cheese").value;
    parseInt(cheese);
    console.log("Il valore di cheese è: ", cheese);

    //checked cheese
    var cheeseBoolean = document.getElementById("cheese").checked;
    console.log("cheeseBool è ", cheeseBoolean);

    if ( cheeseBoolean == true ) {

    }





    // var tomato = document.getElementById("tomato").value;

    // var egg = document.getElementById("egg").value;

    // var lettuce = document.getElementById("lettuce").value;

    // var mustard = document.getElementById("mustard").value;

    // var ketchup = document.getElementById("ketchup").value;

    //Verificare se l'utente ha selezionato qualche checkbox, 
    //se si allora aggiornare il totale. 
    // if ( cheese.checked == true ) {
    //     console.log("ho clickato su cheese");
    // }

    //Stampare
    
    
});



//Calcolare l'eventuale sconto coupon


