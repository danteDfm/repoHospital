"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const ingreso_paciente_controller_1 = require("../controllers/ingreso.paciente.controller");
router.get('/', ingreso_paciente_controller_1.mostrarMensaje);
router.post('/', ingreso_paciente_controller_1.crearFicha);
exports.default = router;
