import routerPaciente from './generalidades.paciente.routes';

export function indexRouter(app: any){

    app.use('/paciente', routerPaciente);    

}