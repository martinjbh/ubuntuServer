const { Sequelize, DataTypes ,Op} = require('sequelize');
// const sequelize = new Sequelize({
//     database: "dejaset2n42850",
//     username: "wyhsxrbvpcfkpd",
//     password: "984f1abab7d5b6b195d451c11bce6f9f57eafe144592910f3e98d06eca3539a3",
//     host: "ec2-54-165-178-178.compute-1.amazonaws.com",
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