function cadastrar() {
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (response) {
        
        if (response.ok) {

            iniciaModal('modal-login');
            
            validaFormulario()

            limpaFormularioCadastro();

        } else {

            console.log('Erro de cadastro!');
            response.text().then(function (resposta) {
                erro.innerHTML = resposta;
            });

            validaFormulario()

            limpaFormularioCadastro()

        }
        finalizar_aguardar();
    });

    return false;
}

function aguardar() {
    btn_cadastro.disabled = true;
}

function finalizar_aguardar() {
    btn_cadastro.disabled = false;
}