//import { ElementosDisforia, PrendasDisconformidad, HistoriaIndentidadGenero, AntecedentesFamilia, PadecimientosFamilia, Habitos, HabitosAlimenticios, HabitosDrogas, TablasFuertesDetallesPaciente } from '../interfaces/interfaz.detalles.paciente';
import { DetallesPaciente, TablasFuertesDetallesPaciente } from '../interfaces/interfaz.detalles.paciente';
import query from '../querys/creacion.tabla';


//elementos de disoforia
// export class CElementosDisforia implements ElementosDisforia {

//     disforia: boolean;
//     detallesDisforia: string;

//     constructor(elementosDisforia: ElementosDisforia) {
//         this.disforia = elementosDisforia.disforia;
//         this.detallesDisforia = elementosDisforia.detallesDisforia;
//     }


// }



// //prendas de disconformidad de genero
// export class CPrendasDisconformidad implements PrendasDisconformidad{

//         usoPrendas: boolean;
//         tipoPrenda:string;
//         constructor(prendasDisconformidad: PrendasDisconformidad) {

//             this.usoPrendas = prendasDisconformidad.usoPrendas;
//             this.tipoPrenda = prendasDisconformidad.tipoPrenda;
//         }
// }


// //historia de identidad de genero
// export class CHistoriaIdentidadGenero implements HistoriaIndentidadGenero {

//     identidadGenero: string;
//     orientacionSexual: string;
//     inicioTransicion: Date;
//     tiempoLatencia: Date;
//     apoyoNucleoFamiliar: boolean;
//     fkPrendasDisconformidad: number;
//     fkElementosDisforia: number;

//     constructor(historiaIndentidadGenero: HistoriaIndentidadGenero) {

//         this.identidadGenero = historiaIndentidadGenero.identidadGenero;
//         this.orientacionSexual = historiaIndentidadGenero.orientacionSexual;
//         this.inicioTransicion = historiaIndentidadGenero.inicioTransicion;
//         this.tiempoLatencia = historiaIndentidadGenero.tiempoLatencia;
//         this.apoyoNucleoFamiliar = historiaIndentidadGenero.apoyoNucleoFamiliar;
//         this.fkPrendasDisconformidad = historiaIndentidadGenero.fkPrendasDisconformidad;
//         this.fkElementosDisforia = historiaIndentidadGenero.fkElementosDisforia;
//     }


// }


// //antecedentes clincos de la familia nuclear
// export class CAntecedentesFamilia implements AntecedentesFamilia{

//     antecendentesPadres: boolean;
//     antecendetesHermanos: boolean;
//     fkPadecimientosFamilares: number;

//     constructor(antecedentesFamilia: AntecedentesFamilia){

//         this.antecendentesPadres = antecedentesFamilia.antecedentesPadres;
//         this.antecendetesHermanos = antecedentesFamilia.antecedentesHermanos;
//         this.fkPadecimientosFamilares = antecedentesFamilia.fkPadecimientosFamiliares;
//     }   
 

// }

// //clase de padeciemitos familiares
// export class CPadecimientosFamilia implements PadecimientosFamilia {

//     padecimiento: string;

//     constructor(padecimientosFamilia: PadecimientosFamilia) {

//             this.padecimiento = padecimientosFamilia.detallesPadecimiento;
//     }


// }

// //clase de habitos alimenticios
// export class CHabitosAlimenticios implements HabitosAlimenticios{

//     detalleHabitoAlimenticio: string;

//     constructor(habitosAlimenticios: HabitosAlimenticios){

//         this.detalleHabitoAlimenticio = habitosAlimenticios.detalleHabitoAlimenticio;
//     }


// }

// //clase uso de drogas de forma habitual
// export class CHabitosDrogas implements HabitosDrogas{

//     usoDrogas: boolean;
//     detalleHabitoDroga: string;

//     constructor(habitosDrogas: HabitosDrogas){


//         this.usoDrogas = habitosDrogas.usoDrogas;
//         this.detalleHabitoDroga = habitosDrogas.detalleHabitoDroga;
//     }


// }

// //clase de habitos del paciente
// export class CHabtitos implements Habitos{

//     fkHabitosAlimenticios:number;
//     fkHabitsoDrogas:number;

//     constructor (habitos: Habitos){

//         this.fkHabitosAlimenticios = habitos.fkHabitosAlimenticios;
//         this.fkHabitsoDrogas = habitos.fkHabitsoDrogas;
//     }

// }

//super clase 


export class DetallesPacientes implements DetallesPaciente, TablasFuertesDetallesPaciente{

    //elementos de disforia, padecimientos fammiliares prendas de disconformidad, habitos(alimenticios y drogas)
    disforia: boolean;
    detallesDisforia: string;

    usoPrendas: boolean;
    tipoPrenda:string;

    padecimiento: string;

    detalleHabitoAlimenticio: string;

    usoDrogas: boolean;
    detalleHabitoDroga: string;

    //historia identidad de genero antedecendetes familia, habitos

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
  
    //obj de conexion 
   
    constructor(
        detallesPaciente : DetallesPaciente,
        tablasFuertesDetallesPaciente: TablasFuertesDetallesPaciente,
        
        ){

        this.disforia = detallesPaciente.disforia;
        this.detallesDisforia = detallesPaciente.detallesDisforia;

        this.usoPrendas = detallesPaciente.usoPrendas;
        this.tipoPrenda = detallesPaciente.tipoPrenda;
        this.padecimiento = detallesPaciente.padecimiento;

        this.detalleHabitoAlimenticio = detallesPaciente.detalleHabitoAlimenticio;

        this.usoDrogas = detallesPaciente.usoDrogas;
        this.detalleHabitoDroga = detallesPaciente.detalleHabitoDroga;

        //datos fuertes

        this.identidadGenero = tablasFuertesDetallesPaciente.identidadGenero;
        this.orientacionSexual = tablasFuertesDetallesPaciente.orientacionSexual;
        this.inicioTransicion = tablasFuertesDetallesPaciente.inicioTransicion;
        this.tiempoLatencia = tablasFuertesDetallesPaciente.tiempoLatencia;
        this.apoyoNucleoFamiliar = tablasFuertesDetallesPaciente.apoyoNucleoFamiliar;
        this.fkPrendasDisconformidad = tablasFuertesDetallesPaciente.fkPrendasDisconformidad;
        this.fkElementosDisforia = tablasFuertesDetallesPaciente.fkElementosDisforia;

        this.antecedentesPadres = tablasFuertesDetallesPaciente.antecedentesPadres;
        this.antecedentesHermanos = tablasFuertesDetallesPaciente.antecedentesHermanos;
        this.fkPadecimientosFamiliares = tablasFuertesDetallesPaciente.fkPadecimientosFamiliares;

        this.fkHabitosAlimenticios = tablasFuertesDetallesPaciente.fkHabitosAlimenticios;
        this.fkHabitsoDrogas = tablasFuertesDetallesPaciente.fkHabitsoDrogas;
        
        

    }



    async crearDetallesTablasDebiles(){

        const queryElementosDisforia = "INSERT INTO ELEMENTOS_DISFORIA VALUES (?, ?) ";
        const queryPadecimiento = "INSERT INTO PADECIMIENTos_FAMILIARES (detalles_padecimiento) VALUES (?)";
        

        query(queryPadecimiento, [this.padecimiento]);

    }


};