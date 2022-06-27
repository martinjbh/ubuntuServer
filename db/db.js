const { Sequelize, DataTypes ,Op} = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:cr1st1n4buf1d1s@192.168.0.15:5432/', { logging: false })
// const sequelize = new Sequelize({
//     database: "dividendo",
//     username: "postgres",
//     password: "cr1st1n4buf1d1s",
//     host: "192.168.0.15",
//     port: 5432,
//     dialect: "postgres",
//     logging: false ,
//     dialectOptions: {
//       ssl: {
//         require: true, // This will help you. But you will see nwe error
//         rejectUnauthorized: false // This line will fix new error
//       }
//     },
//   },);
/////////////////////////////////////// si ponemos el logging en false no me muestra todo el sql de sequelize
module.exports = {sequelize,DataTypes,Op}
sequelize.authenticate()
.then(()=> console.log('conectados, postgress DB ok'))
.catch(err => console.log('algo fallo postgress DB'+err))  //para ver si esta conetado sequelize con db