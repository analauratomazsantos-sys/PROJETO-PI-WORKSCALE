document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    let usuarioDigitado =
        document.getElementById("usuario").value;

    let senhaDigitada =
        document.getElementById("senha").value;

    let usuarioSalvo =
        JSON.parse(
            localStorage.getItem("usuarioWorkScale")
        );

    if(usuarioSalvo === null){
        alert("Nenhum usuário cadastrado!");
        return;
    }

    if(
        usuarioDigitado === usuarioSalvo.usuario &&
        senhaDigitada === usuarioSalvo.senha
    ){

        localStorage.setItem("logado", "sim");

        alert("Login realizado com sucesso!");

        window.location.href = "index.html";

    }else{

        alert("Usuário ou senha incorretos!");

    }

    

});

