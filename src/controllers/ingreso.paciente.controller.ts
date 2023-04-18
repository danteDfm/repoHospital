import { Response, Request } from 'express';
import {ingreso_paciente} from '../models/ingreso.paciente';
import { Paciente } from '../interfaces/creacion.ficha'; 



export const crearFicha = async (req:Request,res:Response)=>{

 try{

    const {body} = req;
    let objIngresoPaciente;


    const interfacePaciente:Paciente = {

        rutPaciente: body.rut,
        nombresPaciente: body.nombres,
        apellidoPaterno: body.apellidoPaterno,
        apellidoMaterno: body.apellidoMaterno,
        pronombre: body.pronombre, 
        nombreSocial: body.nombreSocial,
        fechaNacimiento: body.fechaNacimiento,
        domicilioPaciente: body.domicilioPaciente
    }

    objIngresoPaciente = new ingreso_paciente(interfacePaciente);
    const resultado = await objIngresoPaciente.createPaciente();
    console.log(resultado);
    res.send("Usuario creado");
    return;
 }
 catch(err){

    console.log(`ERROR EN EL CONTROLADOR DE PACIENTE ${err}`);
    return;

 }
}




export const mostrarMensaje =  (req:Request, res:Response)=>{

    res.send("hola mundo");

}