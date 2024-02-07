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