const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})
const CustomersData = new mongoose.model('customers',customerSchema)
module.exports = CustomersData;