// Descrizione:
Vue.config.devtools = true;
// const new_row = document.createElement("img");
// new_row.classList.add("aClassImg");
// console.log(new_row)
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
const app = new Vue( {
    el1: "#root",
        data: {
            message: "ciao",
            src: ('./vue/img/img.jpg') ,
            url: ('https://github.com/Jhon818/vue-hello/blob/f1412ebf2b508b6e66922333646ba86772e33176/vue/img/img.jpg') 
    },
    createElment: "img",
    data: {
        src: ('./vue/img/img.jpg') 
      },
      methods: {
        myFunction: function () {
            (this.src === './vue/img/img.jpg' ? './vue/img/img.jpg' : this.url);
        }
    }


})
console.log(Vue);
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
