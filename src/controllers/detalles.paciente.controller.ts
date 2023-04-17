import { Request, Response } from "express"
import { DetallesPacientes } from "../models/clase.detalles.paciente"
import { TablasFuertesDetallesPaciente, DetallesPaciente } from "../interfaces/interfaz.detalles.paciente";

export const crearElementosDisforia = (req:Request,res: Response)=>{

    const {body} = req;

    const detallesPaciente : DetallesPaciente = {

      //tabla elementos de disforia
      disforia: body.disforia,
      detallesDisforia: body.detallesDisforia,

      //prendas de disconformidad de genero
      usoPrendas: body.usoPrendas,
      tipoPrenda: body.tipoPrenda,

      //tabla detalles de padecimiento
      padecimiento: body.padecimiento,

      //tabla de habito (Drogas y alimenticio)

      detalleHabitoAlimenticio: body.detalleHabitoAlimenticio,

      usoDrogas: body.usoDrogas,
      detalleHabitoDroga: body.detallesHabitoDroga



    }

    const detallesFuertePaciente:TablasFuertesDetallesPaciente = {

      //tabla historia identidad de genero
      identidadGenero: body.identidadGenero,
      orientacionSexual:body.orientacionSexual,
      inicioTransicion: body.inicioTransicion,
      tiempoLatencia: body.tiempoLatencia,
      apoyoNucleoFamiliar: body.apoyoFamilia,
      fkPrendasDisconformidad: 1,
      fkElementosDisforia:2,
  
      //tabla antecedentes clinicos familiares
      antecedentesPadres: body.antecedentesPadres,
      antecedentesHermanos: body.antecedentesHermanos,
      fkPadecimientosFamiliares: 1,
  
      //tabla de habitos
      fkHabitosAlimenticios: 1,
      fkHabitsoDrogas: 1

    }

    const objDetallesPaciente =  new DetallesPacientes(detallesPaciente, detallesFuertePaciente);


    
}







