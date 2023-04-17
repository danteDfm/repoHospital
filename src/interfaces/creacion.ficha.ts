export interface Paciente{

    rutPaciente: string;
    nombresPaciente: string;
    apellidoPaterno: string;
    apellidoMarterno: string;
    pronombre: string;
    nombreSocial: string;
    fechaNacimiento: Date;
    edadPaciente: number;
    domicilioPaciente: string;

}


interface ElementosDisforia{

    disforia: boolean;
    detallesDisforia: string;


}

interface PrendasDisconformidad{

    usoPrenda:boolean;
    tipoPreda:string

}
interface HistoriaIdentidad{

    identidadGenero:string;
    orientacionSexual:string;
    inicioTransicion: Date;
    tiempoLatencia: Date;
    apoyoFamilia:boolean;

}

interface AntecedentesClinicosFamilia{

    antecedentesPadres: boolean;
    antecedentesHermanos: boolean;

}

interface PadecimientosFamilia{

    detallesPadecimiento: string;

}


interface HabitosAlimneticios{

    detalleHabito: string;

}   

interface habitosDrogas{

    detalleHabito: string;

}