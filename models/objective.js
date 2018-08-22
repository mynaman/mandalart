module.exports = (sequelize, DataTypes) => (
    sequelize.define('objective', {
        obj1_1 : {
            type : DataTypes.STRING(30),
            allowNull : false,            
        },
        obj1_2 : {
            type : DataTypes.STRING(30),
            allowNull : false,
        },
        obj1_3 : {
            type : DataTypes.STRING(30),
            allowNull : false,            
        },
        obj1_4 : {
            type : DataTypes.STRING(30),
            allowNull : false,            
        },
        obj1_5 : {
            type : DataTypes.STRING(30),
            allowNull : false,            
        },
        obj1_6 : {
            type : DataTypes.STRING(30),
            allowNull : false,            
        },
        obj1_7 : {
            type : DataTypes.STRING(30),
            allowNull : false,            
        },
        obj1_8 : {
            type : DataTypes.STRING(30),
            allowNull : false,            
        },
        obj1_subject : {
            type : DataTypes.STRING(30),
            allowNull : false,            
        },        
    },{
        timestamps : true,
        paranoid : true,
    })
);