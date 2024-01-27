import {db} from '../db/conn.js'

 const getalimento = async (req,res)=>{
    const sql = 'select * from tbl_alimento order by id';
    const result = await db.query(sql);
    res.json(result)


}
const postalimento = async(req,res)=>{

    const {nombre, cantidad}= req.body;
    const params = [nombre, cantidad];

    const sql = `insert into tbl_alimento
                (nombre, cantidad)
                values
                ($1, $2) returning *`

      const result = await db.query(sql, params);  
      
      res.json(result);

}
const putalimento = async(req, res)=>{
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

}

const deletealimento = async(req, res)=>{
    const params = [req.params.id];
    const sql = `delete from tbl_alimento where id = $1 returning *`;
    const result = await db.query(sql, params);
    res.json(result)
}
export{getalimento , postalimento, putalimento,deletealimento}