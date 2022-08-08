const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'bt6n2ws2wujjpxsvantj-mysql.services.clever-cloud.com',
  user: 'u027tqekkkdfpgeh',
  password:'3Vhq7cSQve7RoDKiRkay',
  database:'bt6n2ws2wujjpxsvantj',
  multiStatements: true
});

mysqlConnection.connect(function (err){
   if(err){
     console.log(err);
   }else{
     console.log('La base de datos está conectada');
   }
});

