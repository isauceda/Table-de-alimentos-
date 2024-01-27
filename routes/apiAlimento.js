import express  from "express";
const alimento = express();
import {db} from '../db/conn.js'



alimento.get('', async (req,res)=>{
    const sql = 'select * from tbl_alimento';
    await db.query(sql);
    const result = await db.query(sql);

    res.json(result)


})

alimento.post('', async(req,res)=>{

    const {nombre, cantidad}= req.body;
    const params = [nombre, cantidad];

    const sql = `insert into tbl_alimento
                (nombre, cantidad)
                values
                ($1, $2) returning *`

      const result = await db.query(sql, params);  
      
      res.json(result);

})

export {alimento}