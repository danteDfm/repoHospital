export interface Paciente{

    rutPaciente: string;
    nombresPaciente: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    pronombre: string;
    nombreSocial: string;
    fechaNacimiento: Date;
    domicilioPaciente: string;

}

export interface HabitosDrogas{

    usoDroga: boolean;
    tipoDrogas: {

        Estimulante: {nombreEstimulante: string},
        Alucinogena: {nombreAlucinogena: string},
        Depresora: {nombreDepresora: string}
    },
    fk: {
        fkUsoDrogas: number;
        fkEstimulante: number, 
        fkAlucinogena: number, 
        fkDepresora: number, 
    },
    fkPaciente: number;

}