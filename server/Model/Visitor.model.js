const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../sequelize');  

const Visitor = sequelize.define("Visitor", {
    visitorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    visitorName: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'VisitorName', 
    },
    visitorContactNo: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'VisitorContactNo', 
    },
    visitorEmailId: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'VisitorEmailId', 
    },
    visitingFromDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'VisitingFromDate', 
    },
    visitingToDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'VisitingToDate', 
    },
    comingFrom: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'ComingFrom', 
    },
    personToMeet: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'PersonToMeet', 
        references: {
            model: 'Employee', // The name of the referenced model
            key: 'employeeid'              // The primary key of the visitpurpose table
        },
        onUpdate: 'CASCADE',   // Optional: Update the foreign key if the referenced key is updated
        onDelete: 'SET NULL'   // Optional: Set the foreign key to null if the referenced key is deleted
    }, 
    PurposeToVisit: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'PurposeToVisit',
        references: {
            model: 'VisitPurpose', // The name of the referenced model
            key: 'VisitPurposeId'              // The primary key of the visitpurpose table
        },
        onUpdate: 'CASCADE',   // Optional: Update the foreign key if the referenced key is updated
        onDelete: 'SET NULL'   // Optional: Set the foreign key to null if the referenced key is deleted
    },
    photoId: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'PhotoId', 
    },
    base64: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'Base64', 
    }, 
    recordStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'insert',
        field: 'RecordStatus', 
    },
    statusDate: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        field: 'StatusDate', 
    },
    isActive: {
        type: DataTypes.ENUM('n', 'y'),
        allowNull: false,
        defaultValue: 'y',
        field: 'Disabled', 
    },
    isDeleted: {
        type: DataTypes.ENUM('n', 'y'),
        allowNull: false,
        defaultValue: 'n',
        field: 'IsDeleted', 
    },
    DateIn :{
      type: DataTypes.DATEONLY,
      allowNull :true,      
    },
    timeIn :{
      type: DataTypes.TIME,
      allowNull :true,      
    },
    DateOut :{
      type: DataTypes.DATEONLY,
      allowNull :true,      
    },
    timeOut :{
      type: DataTypes.TIME,
      allowNull :true,      
    },
    VisitorStatus : {
      type: DataTypes.STRING,
      allowNull : true,
    }
}, {
    tableName: 'Visitor',  
    timestamps: false,     
});

// Sync the Visitor table (creates or updates the table in the DB)
const syncVisitorTable = async () => {
    try {
        await Visitor.sync({ force: false, alter: true });  // Creates or alters the table based on model definition
        console.log('Visitor table synced successfully!');
    } catch (error) {
        console.error('Error syncing Visitor table:', error);
    }
};

// Export the Visitor model and syncTable function
module.exports = { Visitor };
