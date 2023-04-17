import mysql2 from 'mysql2/promise';
import { config } from '../config/dbs.config';

class ConnectDatabase {

    private _objConexion;

    constructor() {

        this._objConexion = this.connectDbs();
    }

    public async connectDbs(){

        try {

            const objetoDbs = await mysql2.createConnection({
                host: config.host,
                database: config.dbs,
                user: config.user,
                password: config.password,
                waitForConnections: true, 
        
                    
            });

           
            console.log("BASE DE DATOS CONNECTADA");
            return  objetoDbs;
        }
        catch (err) {

            console.log(`ERROR EN LA CONEXION DE LA BASE DE DATOS --> ${err}`);

        }

    }

    get getObjConnect() {

        return this._objConexion;
    }

}

export default ConnectDatabase;