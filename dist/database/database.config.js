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
const promise_1 = __importDefault(require("mysql2/promise"));
const dbs_config_1 = require("../config/dbs.config");
class ConnectDatabase {
    constructor() {
        this._objConexion = this.connectDbs();
    }
    connectDbs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objetoDbs = yield promise_1.default.createConnection({
                    host: dbs_config_1.config.host,
                    database: dbs_config_1.config.dbs,
                    user: dbs_config_1.config.user,
                    password: dbs_config_1.config.password,
                    waitForConnections: true,
                });
                console.log("BASE DE DATOS CONNECTADA");
                return objetoDbs;
            }
            catch (err) {
                console.log(`ERROR EN LA CONEXION DE LA BASE DE DATOS --> ${err}`);
            }
        });
    }
    get getObjConnect() {
        return this._objConexion;
    }
}
exports.default = ConnectDatabase;
