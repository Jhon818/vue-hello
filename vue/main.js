// Descrizione:
Vue.config.devtools = true;
const new_row = document.createElement("h1");
new_row.classList.add("aClassNameH1");
console.log(new_row)
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
const app = new Vue( {
    el: ".aClassNameH1",
        data:{
            message: "ciao"
    }
})
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.