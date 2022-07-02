const { Sequelize, DataTypes, Op } = require('sequelize');
// const sequelize = new Sequelize('postgres://postgres:cr1st1n4buf1d1s@localhost:5432/', { logging: false })
const sequelize = new Sequelize({
    database:"prueba_ubuntu",
    username: "postgres",
    password: "cr1st1n4buf1d1s"||"l4zl0b4rr31r0",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    logging: false,
});
/////////////////////////////////////// si ponemos el logging en false no me muestra todo el sql de sequelize
module.exports = { sequelize, DataTypes, Op }
sequelize.authenticate()
    .then(() => console.log('conectados, postgress DB ok'))
    .catch(err => console.log('algo fallo postgress DB' + err))  //para ver si esta conetado sequelize con db
