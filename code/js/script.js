/* const section__1 = document.querySelector('.section__1')
const section__2 = document.querySelector('.section__2')
const section__3 = document.querySelector('.section__3')
const section__4 = document.querySelector('.section__4')
const section__5 = document.querySelector('.section__5')
const section__6 = document.querySelector('.section__6')
const section__7 = document.querySelector('.section__7')
const texto__completo__1 = document.querySelector('.texto__completo__1')
const texto__completo__2 = document.querySelector('.texto__completo__2')
const texto__completo__3 = document.querySelector('.texto__completo__3')
const texto__completo__4 = document.querySelector('.texto__completo__4')
const texto__completo__5 = document.querySelector('.texto__completo__5')
const texto__completo__6 = document.querySelector('.texto__completo__6')
const texto__completo__7 = document.querySelector('.texto__completo__7') */

const sections = document.querySelectorAll('.section');
const textosCompletos = document.querySelectorAll('.texto__completo');
const puntoRojo = document.querySelectorAll('.punto__rojo')

for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener('click', ()=>{
        for (let j = 0; j < textosCompletos.length; j++) {
            if (j === i) {
                textosCompletos[j].classList.toggle('mostrar__texto__completo');
                sections[i].classList.add('animation__section')
                for (let k = 0; k < puntoRojo.length; k++) {
                    if (i === k) {
                        puntoRojo[k].classList.add('animation__punto__rojo')
                    }
                }
            }
        }
    })
}