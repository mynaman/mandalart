module.exports = (sequelize, DataTypes) => (
    sequelize.define('user', {
        seq : {type : DataTypes.INTEGER, autoIncrement : true, unique : true},
        email : {type: DataTypes.STRING(50), primaryKey : true},      
        password : {type: DataTypes.STRING(100), allowNull : false,},
        provider : {type: DataTypes.STRING(10), allowNull : false, defaultValue : 'local'},
        sns_id : {type: DataTypes.STRING(30), allowNull : true,},

        create_dt:{type: DataTypes.DATE, allowNull: true, defaultValue : null},        
        delete_dt:{type: DataTypes.DATE, allowNull: true, defaultValue : null},
    },{
        timestamps : false,
        paranoid : false,
    })
);