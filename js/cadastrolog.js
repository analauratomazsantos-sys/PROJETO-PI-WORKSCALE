document.getElementById("cadastroForm").addEventListener("submit", function(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;

    if(senha !== confirmarSenha){
        alert("As senhas não coincidem!");
        return;
    }

    const usuarioCadastrado = {
        nome: nome,
        email: email,
        usuario: usuario,
        senha: senha
    };

    localStorage.setItem(
        "usuarioWorkScale",
        JSON.stringify(usuarioCadastrado)
    );

    alert("Cadastro realizado com sucesso!");

    window.location.href = "login.html";
});