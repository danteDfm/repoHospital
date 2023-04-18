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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habitos = exports.ingreso_paciente = void 0;
const database_config_1 = __importDefault(require("../database/database.config"));
const objDbs = new database_config_1.default();
class ingreso_paciente {
    constructor(paciente) {
        this.rutPaciente = paciente.rutPaciente;
        this.nombresPaciente = paciente.nombresPaciente;
        this.apellidoPaterno = paciente.apellidoPaterno;
        this.apellidoMaterno = paciente.apellidoMaterno;
        this.pronombre = paciente.pronombre;
        this.nombreSocial = paciente.nombreSocial;
        this.fechaNacimiento = paciente.fechaNacimiento;
        this.domicilioPaciente = paciente.domicilioPaciente;
        this.objConexion = objDbs.getObjConnect;
    }
    createPaciente() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO PACIENTES(rut_paciente,nombre_paciente,apellido_paterno_paciente, apellido_materno_paciente, pronombre, nombre_social,  fecha_nacimiento_paciente, domicilio_paciente) VALUES (?,?,?,?,?,?,?,?)";
            try {
                const resultado = (_a = (yield this.objConexion)) === null || _a === void 0 ? void 0 : _a.query(query.trim(), [
                    this.rutPaciente,
                    this.nombresPaciente,
                    this.apellidoPaterno,
                    this.apellidoMaterno,
                    this.pronombre,
                    this.nombreSocial,
                    this.fechaNacimiento,
                    this.domicilioPaciente
                ]);
                return (_b = (yield resultado)) === null || _b === void 0 ? void 0 : _b[0];
            }
            catch (err) {
                console.log(`ERROR EN LA CONSULTA DE CREAR PACIENTE ${err}`);
                return;
            }
        });
    }
}
exports.ingreso_paciente = ingreso_paciente;
class Habitos {
}
exports.Habitos = Habitos;
