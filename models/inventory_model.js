const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    inventoryType : {
        type:String,
        required:true
    },
    itemName:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }

})
const InventoryData = new mongoose.model('inventory',InventorySchema)
module.exports = InventoryData;