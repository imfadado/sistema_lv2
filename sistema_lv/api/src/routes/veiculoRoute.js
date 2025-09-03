import express from 'express';
import * as VeiculoController from '../controllers/veiculoController.js';

const router = express.Router();

router.post('/veiculos', VeiculoController.cadastrar);
router.get('/veiculos', VeiculoController.consultarTodos);
router.get('/veiculos/:id', VeiculoController.consultarPorId);
router.put('/veiculos/:id', VeiculoController.alterar);
router.delete('/veiculos/:id', VeiculoController.deletar);

export default router;
