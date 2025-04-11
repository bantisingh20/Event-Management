const { Op } = require('sequelize');
const { VisitPurpose } = require('../Model/VisitorPurpose.model');

const SaveVisitPurpose = async(req,res) =>{
    try {
        
        const {purposename} = req.body;

        if(purposename != "" && purposename != null ){
            const newPurpose = await VisitPurpose.create({
                PurposeName : purposename
            })
    
            await newPurpose.save();
            res.status(201).json( {success: true, message : 'New Purpose has been added' , data: newPurpose });
        }
        else{
            return res.status(500).json( {success: true, message : 'Purpose is required'  });
        }

        
    } catch (error) {
        res.status(500).json( {success: false, message :error.message });
    }
}

const GetAllPurpose = async(req,res) =>{
     try {
        
        const data = await VisitPurpose.findAll();
        res.status(200).json( {success: true, message : 'View All Purpose' , data: data });
        

     } catch (error) {
        res.status(500).json( {success: false, message :error.message });
     }
}

module.exports = {SaveVisitPurpose,GetAllPurpose}