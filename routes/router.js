const express = require('express')
const router = express.Router();
const InventoryData = require('../models/inventory_model')
const CustomersData = require('../models/customer_model')
const Orderslist =require('../models/order_model')




router.post('/order',(req,res)=>{
    CustomersData.find({email:req.body.email})
    .then((custdata)=>{
        if(custdata.length === 0){
            Customer.find({email:req.body.email})
            .then((cdata)=>{
                if(cdata.length !== 0){
                    InventoryData.find({itemName:req.body.itemName})
                    .then((invData)=>{
                        const updatedQuantity = invData[0].quantity - req.body.orderquantity;
                        
                        Orderslist.create({custId:data._id,invtId:invData[0]._id,itemName:req.body.itemName,orderquantity:req.body.orderquantity})
                        .then(()=>{
                            console.log(invData)
                            InventoryData.updateOne({itemName:req.body.itemName},{
                                $set:{
                                    quantity:(invData[0].quantity - req.body.orderquantity)
                                }
                            }).then((data)=>{
                                res.json({message:"order placed Successfully"})
                            })
    
                        })
                    })
                }else{
                    CustomersData.create({name:req.body.name,email:req.body.email})
            .then((data)=>{
                InventoryData.find({itemName:req.body.itemName})
                .then((invData)=>{
                    const updatedQuantity = invData[0].quantity - req.body.orderquantity;
                    
                    Orderslist.create({custId:data._id,invtId:invData[0]._id,itemName:req.body.itemName,orderquantity:req.body.orderquantity})
                    .then(()=>{
                        console.log(invData)
                        InventoryData.updateOne({itemName:req.body.itemName},{
                            $set:{
                                quantity:(invData[0].quantity - req.body.orderquantity)
                            }
                        }).then((data)=>{
                            res.json({message:"order placed Successfully"})
                        })

                    })
                })
            })
                }
            })
            CustomersData.create({name:req.body.name,email:req.body.email})
            .then((data)=>{
                InventoryData.find({itemName:req.body.itemName})
                .then((invData)=>{
                    const updatedQuantity = invData[0].quantity - req.body.orderquantity;
                    
                    Orderslist.create({custId:data._id,invtId:invData[0]._id,itemName:req.body.itemName,orderquantity:req.body.orderquantity})
                    .then(()=>{
                        console.log(invData)
                        InventoryData.updateOne({itemName:req.body.itemName},{
                            $set:{
                                quantity:(invData[0].quantity - req.body.orderquantity)
                            }
                        }).then((data)=>{
                            res.json({message:"order placed Successfully"})
                        })

                    })
                })
            })
        }else{
            CustomersData.find({email:req.body.email})
            .then((data)=>{
                InventoryData.find({itemName:req.body.itemName})
                .then((invData)=>{
                    
                    const updatedQuantity = invData[0].quantity - req.body.orderquantity;
                    console.log(data)
                    Orderslist.create({custId:data[0]._id,invtId:invData[0]._id,itemName:req.body.itemName,orderquantity:req.body.orderquantity})
                    .then(()=>{
                        
                        InventoryData.updateOne({itemName:req.body.itemName},{
                            $set:{
                                quantity:(invData[0].quantity - req.body.orderquantity)
                            }
                        }).then((data)=>{
                            res.json({message:"order placed Successfully"})
                        })

                    })
                })
            })
            
        }
    })
    
})


router.get('/order',(req,res)=>{
    Orderslist.find()
    .then((data)=>{
        res.render('orderPage',{orders:data})
    })
})

router.post('/customerdetails',(req,res)=>{
    CustomersData.find({email:req.body.email})
    .then((data)=>{
        if(data.length === 0){
            CustomersData.create({name:req.body.name,email:req.body.email})
            .then((data)=>{
                res.json({data,message:'customer created successfully'})
            })
        }else{
            res.json({message:"customer already registered"})
        }
    })
})

router.get('/customerdetails',(req,res)=>{
    CustomersData.find()
    .then((data)=>{
        if(data.length !=0){
            res.render('customer',{customers:data})
        }else{
            res.json({message:'No customers yet'})
        }
        
    })
})




router.get('/inventory/electronics',(req,res)=>{
    InventoryData.find({inventoryType:"electronics"})
    .then((data)=>{
        if(data.length != 0){
            res.json({data})
        }else{
            res.json({message:'Empty Inventory'})
        }
        
    })
})
router.get('/inventory/furniture',(req,res)=>{
    InventoryData.find({inventoryType:"furniture"})
    .then((data)=>{
        if(data.length != 0){
            res.json({data})
        }else{
            res.json({message:'Empty Inventory'})
        }
        
    })
})
router.post('/inventory',(req,res)=>{
    const item = req.body.itemName
    const {itype , itemName ,quantity} = req.body
    InventoryData.find({itemName:item})
    .then((data)=>{
        if(data.length === 0 ){
            InventoryData.create({inventoryType:itype,itemName:itemName,quantity:quantity})
            .then((data)=>{
                res.json({data,message:'Data added successfully'})
               
            })
        }else{
            res.send('Product Already Present')
        }
    })
})
router.get('/inventory',(req,res)=>{
    InventoryData.find()
    .then((data)=>{
        if(data.length != 0){
            res.render('viewPage',{
                inventory:data
            })
        }else{
            res.json({message:'Empty Inventory'})
        }
        
    })
})
module.exports = router;