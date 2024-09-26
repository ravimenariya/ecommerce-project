const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, "Name is required"]
   },
   price: {
      type: Number,
      required: true
   },
   image: {
      type: String,

   },
   category: {
      type: String
   },
   description: {
      type: String
   },
   stock: {
      type: Number,
      default: 0
   },
   discountPercentage: {
      type: Number
   }


})



const Product = mongoose.model('Product', productSchema);

module.exports = Product


// name  ,
// price  ,
// image   ,
// stock   ,
// description 