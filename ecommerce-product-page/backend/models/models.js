const mongoose = require('mongoose');

const imagesSchema = mongoose.Schema({
  color: String,
  images: {
    type: [String],
    required: true
  }
});

const addressSchema = mongoose.Schema({
  streetNo: { type: String, required: true },
  streetName: { type: String, required: true },
  postalCode: { type: String, required: true },
  province: {
    type: String,
    enum: ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'ON', 'PE', 'QC', 'SK'],
    required: true
  },
  country: {
    type: String,
    enum: ['Canada'],
    default: 'Canada',
    required: true
  }
});

const productSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
  company: { type: String, required: true },
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ['casual', 'running', 'tennis', 'formal'],
    required: true
  },
  sizes: {
    type: [Number],
    required:true
  },
  gender: {
    type: String,
    enum: ['unisex', 'men', 'women'],
    required: true
  },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  countInStock: { type: Number, required: true },
  discount: { type: Number, required: true },
  colors: {
    type: [String],
    default: [],
  },
  imageThumbnails: [imagesSchema],
  imagesMain: [imagesSchema]
},
  {
    timestamps: true
  });

  const userSchema = mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true
    },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: addressSchema
  }, {
    timestamps: true
  });


const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      price: { type: Number, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      }
    }
  ],
  shippingAddress: addressSchema,
  shippingPrice: { type: Number, required: true },
  taxPrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  paymentType: { type: String, required: true }
}, {
  timestamps: true
}) 

module.exports = {
  ProductModel: mongoose.model('Product', productSchema),
  UserModel: mongoose.model('User', userSchema),
  OrderModel: mongoose.model('Order', orderSchema)

}