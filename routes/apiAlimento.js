import express  from "express";
const alimento = express();
import {db} from '../db/conn.js'



alimento.get('', async (req,res)=>{
    const sql = 'select * from tbl_alimento order by id';
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

alimento.put('/:id',async(req, res)=>{
    const {nombre, cantidad} = req.body
    const {id} =req.params
    const params = [
        nombre,
        cantidad,
        id
    ]

    const sql = `update tbl_alimento
                set
                nombre = $1,
                cantidad = $2
                where id = $3 returning *`
 const result = await db.query(sql, params)

res.json(result);

})

alimento.delete ('/:id',async(req, res)=>{
    const params = [req.params.id];
    const sql = `delete from tbl_alimento where id = $1 returning *`;
    const result = await db.query(sql, params);
    res.json(result)
})

export {alimento}