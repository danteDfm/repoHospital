import routerPaciente from './ficha.tecnica.routes';

export function indexRouter(app: any){

    app.use('/paciente', routerPaciente);    

}