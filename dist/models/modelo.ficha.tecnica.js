"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearFichaTecnica = void 0;
const database_config_1 = __importDefault(require("../database/database.config"));
const objDbs = new database_config_1.default();
class crearFichaTecnica {
    constructor(paciente) {
        //objeto de conexion
        this.objConexion = objDbs.getObjConnect;
        this.rutPaciente = paciente.rutPaciente;
        this.nombresPaciente = paciente.nombresPaciente;
        this.apellidoPaterno = paciente.apellidoPaterno;
        this.apellidoMaterno = paciente.apellidoMaterno;
        this.pronombre = paciente.pronombre;
        this.nombreSocial = paciente.nombreSocial;
        this.fechaNacimiento = paciente.fechaNacimiento;
        this.edadPaciente = paciente.edadPaciente;
        this.domicilioPaciente = paciente.domicilioPaciente;
    }
}
exports.crearFichaTecnica = crearFichaTecnica;
