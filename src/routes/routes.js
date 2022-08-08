const { Router } = require('express');
const router = Router();

const mysqlConnection = require('./db/db');


  

//Cliente
//SERVICE POST -- CREACIÓN
router.post('/Customer_New', (req, res) => {
    const {ID,NOMBRE,APELLIDO} = req.body

    let customer = [ID,NOMBRE,APELLIDO];

    let customerNew = `
INSERT INTO CLIENTE(ID,NOMBRE,APELLIDO)
VALUES (?,?);`

   mysqlConnection.query(customerNew,customer, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Tipo Usuario Ingresado`})
   });
  });

module.exports = router;
