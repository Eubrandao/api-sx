const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApiSx = new Schema({
    full_price: {type: Number, required:true},
    price_with_discount: {type: Number, required:true},
    discount_percentage: {type: Number, required:true},
    enrollment_semester: {type: Number, required:true},
    enabled: {type: Boolean, required:true},
    course: {
        name: {type:String, required:true},
        kind: {type:String, required:true},
        level: {type:String, required:true},
        shift: {type:String, required:true},
    },
    university:{
        name: {type:String, required:true},
        score:{type:Number, required:true},
        logo_url:{type:String, required:true},

    },

    campus:{
        name:{type:String,required:true},
        city:{type:String,required:true}
    },
    enabled: {type: Boolean, required:true},
    

},{collection: 'apiSx'})

module.exports  = mongoose.model('apiSx', ApiSx);