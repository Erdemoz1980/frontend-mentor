const Product = require('../models/productModel');
const data = require('../data.json');

const seedDatabase = async () => {
  try {
    await Product.deleteMany()

    for (const document of data) {
      const newDocument = new Product(document)
      await newDocument.save()

      console.log('Database seeded successfully!');
  }
  
  } catch (error) {
    console.error(error);
    process.exit(1)
    
  }
}

module.exports = seedDatabase;