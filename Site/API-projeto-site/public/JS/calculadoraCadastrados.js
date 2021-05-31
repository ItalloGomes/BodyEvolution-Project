/* Calculadora de dieta */

var sexo = sexoUsuario;
var biotipo = biotipoUsuario;
var objetivo;

var anoAtual = new Date().getFullYear();
var anoNasctoUsuario = new Date(dataNasctoUsuario).getFullYear(); 

var idade = (anoAtual - anoNasctoUsuario);

var altura = 0;
var peso = 0;

var tmb = 0;
var tempoTreino = 0;

function selectObjetivo() {
    objetivo = document.querySelector('input[name="objetivo"]:checked').value;
    console.log(objetivo);

    if (sexo == "m") {
        tmbHomem();
    } else {
        tmbMulher();
    }
}

function setAltura() {

    altura = Number(document.getElementById('in_altura').value);

    if (sexo == "m" || sexo == "f") {

        if (sexo == "m") {
            tmbHomem();
        } else {
            tmbMulher();
        }

    } else {
        tmbHomem();
    }

    console.log(altura);
}

function setPeso() {

    peso = Number(document.getElementById('in_peso').value);

    if (sexo == "m" || sexo == "f") {

        if (sexo == "m") {
            tmbHomem();
        } else {
            tmbMulher();
        }

    } else {
        tmbHomem();
    }

    console.log(peso);
}

function setTempoTreino() {

    tempoTreino = Number(document.getElementById('in_tempoTreino').value);

    if (sexo == "m" || sexo == "f") {

        if (sexo == "m") {
            tmbHomem();
        } else {
            tmbMulher();
        }

    } else {
        tmbHomem();
    }

    console.log(tempoTreino);

}

function tmbHomem() {

    // Calculo da taxa metabolica basal    
    let equacaoTMBH = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;

    console.log(equacaoTMBH)

    in_tmb.value = equacaoTMBH.toFixed(2);

    // Pegando a duracao do treino
    let duracaoTreino = Number(document.getElementById('in_tempoTreino').value);

    // Calculo do gasto total de calorias com treino
    let equacaoGastoCalorico = (0.086 * duracaoTreino * peso);

    let total = (equacaoGastoCalorico + equacaoTMBH);

    in_gastoCalorico.value = total.toFixed(2);

// MacroNutrientes

    var proteina = peso * 2.3;
    var gordura = peso * 0.8;

    if (objetivo == "perder") {

        var carbo = ((total * 0.80) - ((proteina * 4) + (gordura * 9))) / 4;

    } else if (objetivo == "manter") {

        var carbo = (total - ((proteina * 4) + (gordura * 9))) / 4;

    } else {

        var carbo = ((total * 1.10) - ((proteina * 4) + (gordura * 9))) / 4;

    }

    gMacroP.value = proteina.toFixed(1);
    gMacroG.value = gordura.toFixed(1);
    gMacroC.value = carbo.toFixed(1);

// Consumir

    var kcalDeficit = (proteina*4) + (gordura*9) + (carbo*4);

    consumir.innerHTML = `Para ${objetivo} peso consuma`;

    in_deficit.value = kcalDeficit.toFixed(2);

}

function tmbMulher() {

    // Calculo da taxa metabolica basal
    let equacaoTMBF = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;

    console.log(equacaoTMBF);

    in_tmb.value = equacaoTMBF.toFixed(2);

    // Pegando a duracao do treino
    let duracaoTreino = Number(document.getElementById('in_tempoTreino').value);

    // Calculo do gasto total de calorias com treino
    let equacaoGastoCalorico = (0.086 * duracaoTreino * peso);

    let total = (equacaoGastoCalorico + equacaoTMBF);

    in_gastoCalorico.value = total.toFixed(2);

// MacroNutrientes

    var proteina = peso * 2.3;
    var gordura = peso * 0.8;

    if (objetivo == "perder") {

        var carbo = ((total * 0.80) - ((proteina * 4) + (gordura * 9))) / 4;

    } else if (objetivo == "manter") {

        var carbo = (total - ((proteina * 4) + (gordura * 9))) / 4;

    } else {

        var carbo = ((total * 1.10) - ((proteina * 4) + (gordura * 9))) / 4;

    }

    gMacroP.value = proteina.toFixed(1);
    gMacroG.value = gordura.toFixed(1);
    gMacroC.value = carbo.toFixed(1);

// Consumir

    var kcalDeficit = (proteina*4) + (gordura*9) + (carbo*4);

    consumir.innerHTML = `Para ${objetivo} peso consuma`;

    in_deficit.value = kcalDeficit.toFixed(2);

}