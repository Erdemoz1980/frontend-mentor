const mongoose = require('mongoose');

const imagesSchema = mongoose.Schema({
  color: String,
  images: {
    type: [String],
    required: true
  }
})

const productSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto:true
  },
  company: { type: String, required: true },
  name: { type: String, required: true },
  category:{
    type: String,
    enum: ['casual', 'sport', 'formal'],
    required:true
  },
  gender: {
    type: String,
    enum: ['unisex', 'men', 'women'],
    required:true
  },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  countInStock:{type:Number, required:true},
  discount: { type: Number, required: true },
  colors: {
    type: [String],
    default: [],
  },
  imageThumbnails: [imagesSchema],
  imagesMain:[imagesSchema]
},
  {
  timestamps:true
  })

productSchema.pre('save', function (next) {
  if (!this.id && this._id) {
      this.id = this._id.toString()
  }
  next()
  })

module.exports = mongoose.model('Product', productSchema);