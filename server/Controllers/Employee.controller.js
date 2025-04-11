const { Op } = require('sequelize');
const { Employee } = require('../Model/Employee.mode');

const SaveEmployee = async(req,res) =>{
    try {
        
        const { firstName,lastName,emailId, Password } = req.body;

        const newEmployee = await Employee.create({
            firstName,lastName,emailId,Password
        });

        await newEmployee.save();

        res.status(201).json({ success: true, message :'Employee has been created' , data : newEmployee });

    } catch (error) {
        res.status(500).json({ success: true, message :'Error While creating Employee:'+error.message });
    }
}

const GetAllEmployees = async(req,res) =>{
    try {
        
    } catch (error) {
        res.status(500).json({ success :false , message :'Error while :'+error.message });
    }
}

module.exports = {GetAllEmployees , SaveEmployee}