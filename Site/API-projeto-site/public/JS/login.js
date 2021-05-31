function entrar() {
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.id_usuario_meuapp = json.idUsuario;
                sessionStorage.nome_usuario_meuapp = json.nomeUsuario;
                sessionStorage.sexo_usuario_meuapp = json.sexoUsuario;
                sessionStorage.biotipo_usuario_meuapp = json.biotipoUsuario;
                sessionStorage.dataNasctoUsuario_usuario_meuapp = json.dataNasctoUsuario;
                sessionStorage.login_usuario_meuapp = json.emailUsuario;

                window.location.href = 'bodyEvolution_Painel.html';

                limpaFormularioLogin();
            });

        } else {

            console.log('Erro de login!');

            resposta.text().then(texto => {
                console.error(texto);
                
                falhaCL.style.display = "block";
                
                limpaFormularioLogin();
            });
        }

        finalizar_aguardar();
    });

    return false;
}

function aguardar() {
    btn_entrar.disabled = true;
}

function finalizar_aguardar() {
    btn_entrar.disabled = false;
}