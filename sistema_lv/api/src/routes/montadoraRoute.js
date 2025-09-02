import express from 'express';
import * as montadora from '../controllers/categoriaController.js';

const router = express.Router();

router.get('/Montadora/:id',montadora.consultar);
router.get('/Montadora',montadora.consultarTodos);
router.post('/Montadora',montadora.cadastrar);

export default router;