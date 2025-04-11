const {Sequelize , DataTypes} = require('sequelize');
const sequelize = require('../sequelize');

const VisitPurpose = sequelize.define("VisitPurpose",{
    VisitPurposeId : {type:DataTypes.INTEGER ,primaryKey: true, autoIncrement: true,},
    PurposeName :{ type :DataTypes.TEXT , allowNull :false },
    recordStatus: { type: DataTypes.STRING, allowNull: false, defaultValue: 'insert', field: 'recordstatus', },
    statusDate: { type: DataTypes.DATE, defaultValue: Sequelize.NOW, field: 'StatusDate', },
    isActive: { type: DataTypes.ENUM('n', 'y'), allowNull: false, defaultValue: 'y', field: 'isActive', },
    isDeleted: {type: DataTypes.ENUM('n', 'y'),allowNull: false, defaultValue: 'n',field: 'IsDeleted', },
}, {
    tableName: 'VisitPurpose',  
    timestamps: false,     
});


const syncPurposeTable = async () => {
    try {
        await VisitPurpose.sync({ force: false, alter: true });  
        console.log('Visit Purpose table synced successfully!');
    } catch (error) {
        console.error('Error syncing Visit Purpose table:', error);
    }
};

module.exports = {VisitPurpose ,syncPurposeTable} ;