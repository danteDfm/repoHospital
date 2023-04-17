import {Router} from 'express';
const router = Router();
import {crearElementosDisforia } from '../controllers/detalles.paciente.controller';



router.post('/', crearElementosDisforia); 


export default router;