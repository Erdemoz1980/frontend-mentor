const Product = require('./models/productModel');
const data = require('./data.json');
const connectDB = require('./config/db');
const dotenv = require('dotenv')

dotenv.config()

connectDB();

const seedDatabase = async () => {
  try {
    await Product.deleteMany()

    for (const document of data) {
      const newDocument = new Product(document)
      await newDocument.save()

      console.log('Product seeded succesfully!')
    }
    process.exit()
  
  } catch (error) {
    console.error(error);
    process.exit(1)
    
  }
}

seedDatabase()

module.exports = seedDatabase;