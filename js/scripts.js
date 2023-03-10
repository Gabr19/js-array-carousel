// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

const images = ['01.webp' , '02.webp' , '03.webp' , '04.webp' , '05.webp']

    for(let i = 0 ; i < images.length ; i++){
        let img = `<img id="img1" src="img/${images[i]}">`
        console.log(img)
        // richiamare il contenitore
        let cont = document.getElementById('container')
        cont.innerHTML = img;
        // inserire img nel contenitore

    }

