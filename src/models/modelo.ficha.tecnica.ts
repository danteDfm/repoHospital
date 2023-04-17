import { Paciente } from '../interfaces/creacion.ficha';
import ConexionDbs from '../database/database.config';

const objDbs = new ConexionDbs();

export class crearFichaTecnica implements Paciente{

    rutPaciente: string;
    nombresPaciente: string;
    apellidoPaterno: string;
    apellidoMarterno: string;
    pronombre: string;
    nombreSocial: string;
    fechaNacimiento: Date;
    edadPaciente: number;
    domicilioPaciente: string;

    //objeto de conexion

    objConexion = objDbs.getObjConnect;

    constructor(paciente: Paciente){

        this.rutPaciente = paciente.rutPaciente;
        this.nombresPaciente = paciente.nombreSocial;
        this.apellidoPaterno = paciente.apellidoPaterno;
        this.apellidoMarterno = paciente.apellidoMarterno;
        this.pronombre = paciente.pronombre;
        this.nombreSocial = paciente.nombreSocial;
        this.fechaNacimiento = paciente.fechaNacimiento;
        this.edadPaciente = paciente.edadPaciente;
        this.domicilioPaciente = paciente.domicilioPaciente;

    }

    async crearFichaTecnica(){

        const query = `

        INSERT INTO PACIENTES (
            rut_paciente,
            nombre_paciente,
            apellido_paterno_paciente, 
            apellido_materno_paciente, 
            pronombre,
            nombre_social,
            fecha_nacimiento_paciente,
            domicilio_paciente, 
            fk_antecedente_clinico_familia, 
            fk_historia_identidad_genero, 
            fk_habito,
             )
            VALUES (?,?,?,?,?,?,?,?,?,?,?)
        `;

        const data=
        [
            this.rutPaciente, 
            this.nombresPaciente, 
            this.apellidoPaterno,
            this.apellidoMarterno,
            this.pronombre, 
            this.nombreSocial,
            this.fechaNacimiento, 
            this.domicilioPaciente, 
            1,
            1,
            1
            
        ];
        const resultado = (await this.objConexion)?.execute(query, data);
        return resultado;
    }

}