const { type } = require('jquery');
const mongoose = require('mongoose');
const catScehma = mongoose.Schema({
    
    categoryname: {
        type: String,
        required: true,
    },
    subcategories: [{
        subcategoryname: {
            type: String,
            required: true
        },
        default: []
    }]
});
const prodScehma = mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    picture: {
        type:String,
        required:true
    },
    categoryid: {
        type:String,
        required:true
    },
    subcategoryid: {
        type:String,
        required:true
    },
    featured: {
        type:Boolean,
        required: false,
        default: false
    }
   
});
const userScehma = mongoose.Schema({
    
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
   
});
const cartSchema = mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    productid: {
        type:String,
        required:true
    },
    productname: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    quantity: {
        type: Number,
        required: true
    }
});
const orderSchema = mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        required: true
    },
    address: {
        type:String,
        required:true
    },
    status: {
        type:String,
        required:true
    },
    products: [
        {
            productid: {
                type:String,
                required:true
            },
            productname: {
                type: String,
                required:true
            },
            price: {
                type: Number,
                required:true
            },
            quantity: {
                type: Number,
                required: true
            },
            default: []
        }
    ]
});
module.exports = {
    categoryModel:  mongoose.model("categories", catScehma),
    productModel:  mongoose.model("products", prodScehma),
    userModel: mongoose.model("users", userScehma),
    cartModel: mongoose.model("carts", cartSchema),
    orderModel: mongoose.model('orders', orderSchema)
}