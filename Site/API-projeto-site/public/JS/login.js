function entrar() {
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.login_usuario_meuapp = json.emailUsuario;
                sessionStorage.nome_usuario_meuapp = json.nomeUsuario;

                window.location.href = 'bodyEvolution_Home.html';

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