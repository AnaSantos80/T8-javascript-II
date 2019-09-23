const muitosGatos = document.querySelectorAll(".item_imagem");

muitosGatos.forEach(function(gato) {
    gato.addEventListener ("click", function(evento) {
        evento.target.classList.add("invisivel");
    })

})





for (let i=0; i<muitosGatos.length; i++) {
    muitosGatos[i].addEventListener("click", function())
    muitosGatos[i].classList.add("invisivel")    
}