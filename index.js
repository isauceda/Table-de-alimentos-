
import  express from 'express';
import {alimento} from './routes/apiAlimento.js'
const app = express();
app.use(express.json());
const port = 5000;

app.use('/api/alimento', alimento)

app.listen(port ,()=>{ 

    console.log(`Escuchando en el puerto ${port} `);
});    