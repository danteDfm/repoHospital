import objConnect from '../database/database.config';
objConnect.connectDbs();


type Campos  = string | number | boolean | Date;
async function crearTabla(query:string, campos:Array<Campos>){
    const resultadoConsulta = (await objConnect.getObjConnect)?.query(query, campos);
    return resultadoConsulta;
}

export default crearTabla;