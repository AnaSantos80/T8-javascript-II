const muitosGatos = document.querySelectorAll(".item__imagem");

muitosGatos.forEach(function(gato) {
    gato.addEventListener ("click", function(evento) {
        evento.target.classList.add("invisivel");   
     //OU evento.target.style.display = "none"; 
     //OU gato.classList.add("minha-classe")

    //Para o gato aparecer novamente

    if (gato.classList.contains("invisivel")) {
    //pego a classe e vejo se retorna verdadeiro ou falso, o contains retorna uma lista
        gato.classList.remove("invisivel");     
    } else {
        gato.classList.add("invisivel");
    }


    })
})

// Como fazer com o for comum:
/*
for (let i=0; i<muitosGatos.length; i++) {
    muitosGatos[i].addEventListener("click", function() {
    muitosGatos[i].classList.add("invisivel")    
})
} */