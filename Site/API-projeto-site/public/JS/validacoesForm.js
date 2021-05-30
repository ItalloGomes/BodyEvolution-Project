// VALIDAÇÃO DO FORMULARIO

function validaNome() {
    var nome = nome_usuario.value;

    if (nome.length < 3) {
        document.querySelector("#nome_usuario").style.borderColor = "red"
    } else {
        document.querySelector("#nome_usuario").style.borderColor = "green"
    }
}

function validaEmail() {
    var email = email_usuario.value;

    if (email.indexOf('@') > 2 && email.indexOf('.com') > (email.indexOf('@') + 1)) {
        document.querySelector("#email_usuario").style.borderColor = "green"
    } else {
        document.querySelector("#email_usuario").style.borderColor = "red"
    }
}

function validaSenha() {
    var senha = senha_usuario.value;

    if (senha.length > 7) {
        document.querySelector("#senha_usuario").style.borderColor = "green"
    } else {
        document.querySelector("#senha_usuario").style.borderColor = "red"
    }
}

function validaSenha2() {
    var senha1 = senha_usuario.value;
    var senha2 = validaSenha_usuario.value;

    if (senha1 == senha2 && senha2 != "") {
        document.querySelector("#validaSenha_usuario").style.borderColor = "green"
    } else {
        document.querySelector("#validaSenha_usuario").style.borderColor = "red"
    }
}

function validaFormulario() {
    validaNome();
    validaEmail();
    validaSenha();
    validaSenha2();

    if (document.querySelector("#nome_usuario").style.borderColor = "green" &&
        document.querySelector("#email_usuario").style.borderColor == "green" &&
        document.querySelector("#validaSenha_usuario").style.borderColor == "green") {

        document.getElementById("sucessoC").style.display = "block";
        document.getElementById("falhaC").style.display = "none";

    } else {

        document.getElementById("falhaC").style.display = "block";
        document.getElementById("sucessoC").style.display = "none";

    }

}

function limpaFormularioCadastro() {
    nome_usuario.value = "";
    email_usuario.value = "";
    senha_usuario.value = "";
    validaSenha_usuario.value = "";
}

function limpaFormularioLogin() {
    in_email.value = "";
    in_senha.value = "";
}