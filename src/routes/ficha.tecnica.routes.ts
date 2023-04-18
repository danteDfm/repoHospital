import { Router } from 'express';
const router = Router();
import { crearFicha , mostrarMensaje} from '../controllers/ingreso.paciente.controller';

router.get('/', mostrarMensaje);
router.post('/', crearFicha);


export default router;