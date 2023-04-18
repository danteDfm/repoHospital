import { Paciente } from '../interfaces/creacion.ficha';
import ConexionDbs from '../database/database.config';

const objDbs = new ConexionDbs();

export class ingreso_paciente implements Paciente {

    rutPaciente: string;
    nombresPaciente: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    pronombre: string;
    nombreSocial: string;
    fechaNacimiento: Date;
    domicilioPaciente: string;

    //objeto de conexion

    private objConexion;

    constructor(paciente: Paciente) {

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

    async createPaciente() {

        const query = "INSERT INTO PACIENTES(rut_paciente,nombre_paciente,apellido_paterno_paciente, apellido_materno_paciente, pronombre, nombre_social,  fecha_nacimiento_paciente, domicilio_paciente) VALUES (?,?,?,?,?,?,?,?)";

        try {

            const resultado = (await this.objConexion)?.query(query.trim(), [

                this.rutPaciente,
                this.nombresPaciente,
                this.apellidoPaterno,
                this.apellidoMaterno,
                this.pronombre,
                this.nombreSocial,
                this.fechaNacimiento,
                this.domicilioPaciente

            ]);

            return (await resultado)?.[0];
        }
        catch (err) {


            console.log(`ERROR EN LA CONSULTA DE CREAR PACIENTE ${err}`);
            return;

        }
    }

}

export class Habitos{

    


}