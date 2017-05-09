import * as Sequelize from "sequelize";
import  config from  '../db.config';


let sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

const User = sequelize.define('user', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    age: {
        type: Sequelize.INTEGER,
    },
    name: {
        type: Sequelize.CHAR,
    }

}, {
    freezeTableName: true,
    timestamps: false
});

const Test = sequelize.define('test', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    info: {
        type: Sequelize.CHAR,
        allowNull: false,
    }

}, {
    freezeTableName: true,
});

Test.sync()
    .then(() => {
        return Test.create({
            info: Math.random()
        })
    })
    .then(() => {
        return Test.findOne({where:{id:10}});
    })
    .then((res)=>{
        console.log(res);
        
    })

    .catch(e => {
        console.log(e);

    });

User.sync().then(function () {
    // Table created
    return User.create({
        age: 7,
        name: '222'
    });
});