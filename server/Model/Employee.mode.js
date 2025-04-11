const {Sequelize , DataTypes} = require('sequelize');
const sequelize = require('../sequelize');

const Employee = sequelize.define("Employee",{
    employeeid : {type:DataTypes.INTEGER ,primaryKey: true, autoIncrement: true,},
    firstName :{ type :DataTypes.TEXT , allowNull : false },
    lastName :{ type :DataTypes.TEXT , allowNull : false },
    emailId :{ type :DataTypes.TEXT , allowNull : false },
    Password: {type: DataTypes.TEXT ,field: 'Password', },
    Role : {type: DataTypes.TEXT ,field: 'Role', },
    recordStatus: { type: DataTypes.STRING, allowNull: false, defaultValue: 'insert', field: 'recordstatus', },
    statusDate: { type: DataTypes.DATE, defaultValue: Sequelize.NOW, field: 'StatusDate', },
    isActive: { type: DataTypes.ENUM('n', 'y'), allowNull: false, defaultValue: 'y', field: 'IsActive', },
    isDeleted: {type: DataTypes.ENUM('n', 'y'),allowNull: false, defaultValue: 'n',field: 'IsDeleted', },
    
}, {
    tableName: 'Employee',  
    timestamps: false,     
});


const syncEmployeeTable = async () => {
    try {
        await Employee.sync({ force: false, alter: true });  
        console.log('Employee table synced successfully!');
    } catch (error) {
        console.error('Error syncing Employee table:', error);
    }
};

module.exports = {Employee ,syncEmployeeTable} ;