const Sequelize = require('sequelize');
const {Datatype} = require('sequelize');
const sequelize = new Sequelize('Login', 'lucca', 'lucca123', {

    host:"localhost",
    dialect:'postgres'
})

sequelize.authenticate().then(function (){
console.log("Authentication successful...sucesso");
}).catch (function (err) {
    console.log("Autentificaçao deu erro mano  " + err);
});



   
//'CREATE TABLE IF NOT EXISTS "testes" 