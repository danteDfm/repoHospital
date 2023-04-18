import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { indexRouter }  from './routes';

//init
dotenv.config(); 
const app = express();

//settings 
app.set('puerto', process.env.PORT);

//middlewares
app.use(cors());    
app.use(morgan('dev'));
app.use(express.json());

//routes 
indexRouter(app);

app.listen(app.get('puerto'), ()=>{

    console.log("SERVER EN EL PUERTO "+app.get('puerto'));

});




