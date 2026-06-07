document.getElementById("alterarSenhaForm").addEventListener("submit", function(event){

    event.preventDefault();

    let usuarioDigitado =
        document.getElementById("usuario").value;

    let novaSenha =
        document.getElementById("novaSenha").value;

    let confirmarSenha =
        document.getElementById("confirmarSenha").value;

    let usuarioSalvo =
        JSON.parse(
            localStorage.getItem("usuarioWorkScale")
        );

    if(usuarioSalvo === null){
        alert("Nenhum usuário cadastrado!");
        return;
    }

    if(usuarioDigitado !== usuarioSalvo.usuario){
        alert("Usuário não encontrado!");
        return;
    }

    if(novaSenha !== confirmarSenha){
        alert("As senhas não coincidem!");
        return;
    }

    usuarioSalvo.senha = novaSenha;

    localStorage.setItem(
        "usuarioWorkScale",
        JSON.stringify(usuarioSalvo)
    );

    alert("Senha alterada com sucesso!");

    window.location.href = "login.html";

});