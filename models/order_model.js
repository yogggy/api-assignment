const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    custId:{
        type:String,
        required:true
    },
    invtId:{
        type:String,
        required:true
    },
    itemName:{
        type:String,
        required:true
    },
    orderquantity:{
        type:Number,
        required:true
    }
})
const Orderslist = new mongoose.model('Orders',orderSchema)
module.exports = Orderslist;