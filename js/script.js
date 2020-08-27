// Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta
// AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa
// verde.
// Il numero ottenuto appare al centro del quadrato.

$(document).ready(function(){

    // Generare una griglia 6x6 (36 boxes)
    for (var i = 0; i < 36; i++) {
        $(".container").append('<div class="square"></div>');
    }
    // ad ogni click parte una richiesta
    // AJAX che prende un numero random da 1 a 9
    $(".square").on("click", function(){
        var quadrato = $(this);
        if ($(quadrato).hasClass("giallo") == true || $(quadrato).hasClass("verde") == true) {
            alert("Hai già selezionato questa casella")
        } else {
            $.ajax(
                {
                    "url": "https://flynn.boolean.careers/exercises/api/random/int",
                    "method": "GET",
                    "success": function (esito) {
                        //faccio comparire il numero al centro del quadrato
                        $(quadrato).text(esito.response);
                        //imposto il colore di sfondo in base al numero
                        if (esito.response <= 5) {
                            $(quadrato).addClass("giallo");
                        } else {
                            $(quadrato).addClass("verde");
                        }
                    },
                    error: function (richiesta, stato, errori) {
                        alert("E' avvenuto un errore.");
                    }

                }
            );
        }


    })
});
