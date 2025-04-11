const { Router } = require('express');
const DatabaseHelper = require('../DatabaseHelper/DatabaseHelper');
const { Visitor } = require('../Model/Visitor.model');
const { default: Message } = require('tedious/lib/message');
const dbhelper = new DatabaseHelper();
const { Op } = require('sequelize');

const SaveVisitorDetails = async(req,res) =>{
    try {
        
    } catch (error) {
        
    }
}


const UpdateVisitorDetails = async(req,res) =>{
    try {
        
    } catch (error) {
        
    }
}


const SearchVisitorByNumber = async(req,res) =>{
    try {

        const {VisitorNumber}  = req.body;
        
        const IsNumberExists = await Visitor.findOne({ 
            where : { VisitorContactNo : VisitorNumber}, // where condtion
            limit :1, // add limit for number of data
            order :[
                ['Visitorid', 'DESC']  //order by conditon
              ],
            attributes: ['Visitorid ','VisitorContactNo','VisitorName'] // used to select columns
        }
        );

        if(IsNumberExists){
            res.status(200).json({success :true , message :'Number Exists', data: IsNumberExists});
        }
        else {
            res.status(404).json({success :true , message :'Number Not Exists'});
        }
    } catch (error) {
        res.status(500).json({success:false , messge:error });
    }
}


const GetVisitorById = async(req,res) =>{
    try {
        const {Visitorid} = req.params;
 
        const IsExists = await Visitor.findOne({
            where: {
                [Op.and]: [{ Visitorid: Visitorid }, { isDeleted: 'n' }],  // sequalize and operator , for OR operator use [Op.or]
              },
            // where :{ Visitorid :Visitorid , isDeleted :'n' },
            attributes : ['Visitorid ','VisitorName','VisitorContactNo','VisitorEmailId'
                 ,'VisitingFromDate','VisitingToDate','ComingFrom', 'PersonToMeet'
                 ,'PurposeToVisit','PhotoId','base64','DateIn','timeIn','DateOut','timeOut']
        });
 
        if(IsExists){
            res.status(200).json({success:true , messge:'View Visitor Details Based on VisitorId', data:IsExists });
        }
        else{
            res.status(401).json({success:false , messge:'Invalid Visitor or Request' });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false , messge:error.message });
    }
}
 
const GetAllVisitor = async(req,res) =>{
    try {
        const data = await Visitor.findAll({
            where :{
                isDeleted :'y'
            }
        });

        if(data.length > 0){
          return  res.status(200).json({success:true , message :'view all visitor', data:data});
        }
        
        res.status(204).json({success:true , message :'Not Found any Visitor', data:data});
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {SearchVisitorByNumber ,GetVisitorById , GetAllVisitor}