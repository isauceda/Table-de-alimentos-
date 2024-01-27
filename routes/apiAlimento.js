import express  from "express";
const alimento = express();
import { getalimento, postalimento,putalimento,deletealimento } from "../controllers/alimentocontrollers.js";


alimento.get('',getalimento );

alimento.post('', postalimento)

alimento.put('/:id',putalimento)

alimento.delete ('/:id',deletealimento)

export {alimento}