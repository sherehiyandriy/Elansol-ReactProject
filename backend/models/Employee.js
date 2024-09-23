const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name:String,
    date:String,
    email:String,
    password:String
})

const EmployeeModel = mongoose.model("employees",EmployeeSchema)
module.exports =EmployeeModel;