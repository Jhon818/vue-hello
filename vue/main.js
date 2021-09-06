// Descrizione:
Vue.config.devtools = true;
// const new_row = document.createElement("img");
// new_row.classList.add("aClassImg");
// console.log(new_row)
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
const app = new Vue( {
    el1: "#root",
        data: {
            message: "ciao"
    },
    
    el2: ".img",
    data1: {
        src: "./img/img.jpg"
    },


})
console.log(app.message);
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
