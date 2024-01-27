import pg from 'pg-promise'
const pgp = pg()
const cnstr = `postgresql://postgres:Ingrid2033$@localhost:5432/api_mercadito`;
const db = pgp(cnstr);

db.connect()
    .then(()=>{
        console.log("conexion exitosa");

    })
    .catch((err)=>{
        
        console.log(`error de conexion${err}`)


    })
  
    export { db }