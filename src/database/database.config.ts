import mysql from 'mysql2/promise';
import { config } from '../config/dbs.config';

class ConnectDatabase {

    private _objConexion;
    constructor() {
        
        this._objConexion = this.connectDbs();
    }

    public async connectDbs() {
        try {

            const objCdbs = await mysql.createConnection({
                host: config.host,
                database: config.dbs,
                user: config.user,
                password: config.password

            });

            objCdbs.connect();
            console.log("BASE DE DATOS CONNECTADA");
            return objCdbs;

        }
        catch (err) {

            console.log(`ERROR EN LA CONEXION DE LA BASE DE DATOS --> ${err}`);

        }

    }

    get getObjConnect() {

        return this._objConexion;
    }

}

//exportamos un objeto de la clase connectDatabase
export default new ConnectDatabase;