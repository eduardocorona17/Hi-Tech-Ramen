require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Base', sortOrder: 10},
    {name: 'Meat', sortOrder: 20},
    {name: 'Add Ons', sortOrder: 30},

    
    
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Miso Base', category: categories[0], price: 15.00},
    {name: 'Spicy Miso', category: categories[0], price: 15.00},
    {name: 'Garlic Miso', category: categories[0], price: 15.00},
    {name: 'Pork', category: categories[1], price: 2.00}, 
    {name: 'Beef', category: categories[1], price: 2.00}, 
    {name: 'Shallots', category: categories[2], price: 2.00}, 
    {name: 'Extra Egg', category: categories[2], price: 2.00}, 
    {name: 'Mushrooms', category: categories[2], price: 2.00}, 
    
  ]);

  console.log(items)

  process.exit();

})();