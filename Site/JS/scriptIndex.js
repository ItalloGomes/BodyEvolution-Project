
window.setInterval(() => { mudaBackground() }, 5000)

var n = 1;

function mudaBackground(){

    if(n < 6){
        
        // console.log('entrou 1')
        
        document.getElementById('containerSlider').style.backgroundImage = `URL(../IMGS/slider/back${n}.jpg)`
        n++;
        
    }else{

        // console.log('entrou 2')
        
        n = 1;
        document.getElementById('containerSlider').style.backgroundImage = `URL(../IMGS/slider/back${n}.jpg)`
        n++;
    
    }

}

/*Modal de login*/
function iniciaModal(modalId) {
    const modal = document.getElementById(modalId);

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalId || e.target.className == 'close') {
                modal.style.display = "none";
                document.body.style.overflowY = "scroll";
            }
        })
    }
}

function entrar() {

    // aguardar();

    var formulario = new URLSearchParams(new FormData(form_login));

    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.login_usuario_meuapp = json.emailInstitucionalFuncionario;
                sessionStorage.nome_usuario_meuapp = json.nomeFuncionario;

                window.document.location.href = "";
            });

        } else {

            in_email.value = "";
            in_senha.value = "";

            document.getElementById("falhaCL").style.display = "block";
            console.log('Erro de login!');

            resposta.text().then(texto => {
                console.error(texto);
                // finalizar_aguardar(texto);
            });
        }
    });

    return false;
}