"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarMensaje = exports.crearFicha = void 0;
const ingreso_paciente_1 = require("../models/ingreso.paciente");
const crearFicha = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        let objIngresoPaciente;
        const interfacePaciente = {
            rutPaciente: body.rut,
            nombresPaciente: body.nombres,
            apellidoPaterno: body.apellidoPaterno,
            apellidoMaterno: body.apellidoMaterno,
            pronombre: body.pronombre,
            nombreSocial: body.nombreSocial,
            fechaNacimiento: body.fechaNacimiento,
            domicilioPaciente: body.domicilioPaciente
        };
        objIngresoPaciente = new ingreso_paciente_1.ingreso_paciente(interfacePaciente);
        const resultado = yield objIngresoPaciente.createPaciente();
        console.log(resultado);
        res.send("Usuario creado");
        return;
    }
    catch (err) {
        console.log(`ERROR EN EL CONTROLADOR DE PACIENTE ${err}`);
        return;
    }
});
exports.crearFicha = crearFicha;
const mostrarMensaje = (req, res) => {
    res.send("hola mundo");
};
exports.mostrarMensaje = mostrarMensaje;
