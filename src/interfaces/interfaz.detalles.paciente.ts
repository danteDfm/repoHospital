
// //interfaces relacionadas al genero del paciente
// export interface ElementosDisforia{

//     disforia: boolean;
//     detallesDisforia: string;

// }

// export interface PrendasDisconformidad{

//     usoPrendas: boolean;
//     tipoPrenda:string;


// }
// export interface HistoriaIndentidadGenero{

//     identidadGenero: string;
//     orientacionSexual:string;
//     inicioTransicion:Date;
//     tiempoLatencia:Date;
//     apoyoNucleoFamiliar: boolean;
//     fkPrendasDisconformidad: number;
//     fkElementosDisforia:number;

// }

// //interfaces relacionadas a los antecedentes clinicos de la familia 

// export interface AntecedentesFamilia{

//     antecedentesPadres: boolean;
//     antecedentesHermanos:boolean;
//     fkPadecimientosFamiliares: number;
// }

// export interface PadecimientosFamilia{

//     detallesPadecimiento: string;

// }

// //interface relacionada a los habitos

// export interface HabitosAlimenticios{

//     detalleHabitoAlimenticio: string;


// }
// export interface HabitosDrogas{

//     usoDrogas: boolean;
//     detalleHabitoDroga: string;


// }
// export interface Habitos{

//     fkHabitosAlimenticios:number;
//     fkHabitsoDrogas:number;

// }



//interface detalles

export interface DetallesPaciente{

    //tabla elementos de disforia
    disforia: boolean;
    detallesDisforia: string;

    //prendas de disconformidad de genero
    usoPrendas: boolean;
    tipoPrenda:string;

    //tabla detalles de padecimiento
    padecimiento: string;

    //tabla de habito (Drogas y alimenticio)

    detalleHabitoAlimenticio: string;

    usoDrogas: boolean;
    detalleHabitoDroga: string;



}

export interface TablasFuertesDetallesPaciente{
    
    //tabla historia identidad de genero
    identidadGenero: string;
    orientacionSexual:string;
    inicioTransicion:Date;
    tiempoLatencia:Date;
    apoyoNucleoFamiliar: boolean;
    fkPrendasDisconformidad: number;
    fkElementosDisforia:number;

    //tabla antecedentes clinicos familiares
    antecedentesPadres: boolean;
    antecedentesHermanos:boolean;
    fkPadecimientosFamiliares: number;

    //tabla de habitos
    fkHabitosAlimenticios:number;
    fkHabitsoDrogas:number;


}

