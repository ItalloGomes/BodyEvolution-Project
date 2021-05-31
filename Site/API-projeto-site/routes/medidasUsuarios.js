var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var MedidaUsuario = require('../models').MedidaUsuario;

/* Recuperar as últimas N leituras */
router.get('/ultimasMedidas/:idUsuario', function(req, res, next) {
	
	var idUsuario = req.params.idUsuario;

	console.log(`Recuperando as medidas`);
	
	let instrucaoSql = `select * from tbMedidaUsuario
						where fkUsuario = ${idUsuario}
						order by idMedidaUsuario`;
        
	sequelize.query(instrucaoSql, {
		model: MedidaUsuario,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

router.post('/cadastrarMedidas', function(req, res, next) {
	console.log('Adicionando novas medidas');

	MedidaUsuario.create({
		peso : req.body.peso,
		altura : req.body.altura,
		pescoco : req.body.pescoco,
		cinturaEscapular : req.body.cintEscap,
		bracoDireito : req.body.BracoD,
        bracoEsquerdo : req.body.BracoE,
		peito: req.body.peito,
        cintura : req.body.cintura,
        quadril : req.body.quadril,
		coxaDireita: req.body.coxaD,
        coxaEsquerda: req.body.coxaE,
        panturrilhaDireita: req.body.pantuD,
        panturrilhaEsquerda: req.body.pantuE,
        dataHora: new Date(),
        fkUsuario: req.body.id
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

module.exports = router;