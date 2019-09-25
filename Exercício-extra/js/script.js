const formulario = document.getElementById ("formulario-de-comentarios");
// para usar depois e não só capturar coloco (const formulario)

formulario.addEventListener("submit", function (evento){
    // uso (formulario.) porque quero ouvir somente o formulario e não o doc todo (que seria document.)
    // evento é o relatório do que acabou de acontecer
    evento.preventDefault();
    let espacoParaComentar = document.querySelector(".input-de-texto");
    // para capturar o input e colocar o ponto na frente porque é uma class
    // this.querySelector sempre retorna o primeiro elemento

    let mensagem = espacoParaComentar.value;
    // o value é uma propriedade que guarda o que está (escrito) no input (espaço/caixa)
    
    

    let aviso = document.getElementById("aviso");
    
    if (mensagem.trim()==="") {
       aviso.textContent = "Por favor, coloque um texto válido!";        

        mensagemErro.classList.add("aviso");          
    } else {aviso.textContent = ""
        let comentariosArmazenados = document.getElementById ("todos-os-comentarios");
        // posso colocar do lado de fora abaixo da (const formulario) porque não irá alterar
       
        let comentario = document.createElement ("p");
        comentariosArmazenados.appendChild(comentario);
        comentario.textContent = mensagem;
    
        comentario.classList.add("comentario")
        // adicionei uma caixa ao comentário
    
        espacoParaComentar.value = ""
        // OU formulario.reset(); Se tiver 5 comentários tenho que executar 5 vezes
        // Essas ações limpam os campos preenchidos
    }


    
});

