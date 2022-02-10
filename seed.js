require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Ramen', sortOrder: 10},
    
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Miso Base', category: categories[0], price: 15.00},
    
  ]);

  console.log(items)

  process.exit();

})();