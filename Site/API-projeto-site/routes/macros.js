var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Macro = require('../models').Macro;

/* Recuperar as últimas N leituras */
router.get('/ultimosMacros/:idUsuario', function(req, res, next) {
	
	const limite_linhas = 1;

	var idUsuario = req.params.idUsuario;

	console.log(`Recuperando as ultimas ${limite_linhas} leituras`);
	
	let instrucaoSql = `select 
        proteinaMacros
        ,gorduraMacros
        ,carboMacros
        ,taxaMetabolicaMacros 
        
        from tbMacros
		where fkUsuario = ${idUsuario}
		order by idMacros desc limit ${limite_linhas}`;
        
	sequelize.query(instrucaoSql, {
		model: Macro,
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

router.post('/cadastrarMacros', function(req, res, next) {
	console.log('Adicionando novos macros');

	Macro.create({
		proteina : req.body.proteina,
		gordura : req.body.gordura,
		carbo : req.body.carboidrato,
		taxaMetabolica : req.body.tmb,
		gastoCaloricoTreino : req.body.gastoComTreino,
        consumoObjetivo : req.body.ConsumoObjetivo,
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