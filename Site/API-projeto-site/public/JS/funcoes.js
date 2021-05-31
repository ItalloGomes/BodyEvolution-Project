const idUsuario = sessionStorage.id_usuario_meuapp;
const nomeUsuario = sessionStorage.nome_usuario_meuapp;
const sexoUsuario = sessionStorage.sexo_usuario_meuapp;
const biotipoUsuario = sessionStorage.biotipo_usuario_meuapp;
const dataNasctoUsuario = sessionStorage.dataNasctoUsuario_usuario_meuapp;
const loginUsuario = sessionStorage.login_usuario_meuapp;

function redirecionar_login() {
    window.location.href = 'index.html';
}

function verificar_autenticacao() {

    if (loginUsuario == undefined)  {
        redirecionar_login();
    } else {
        validar_sessao();
    }
    
}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${loginUsuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${loginUsuario}`, {cache:'no-store'}); 
}