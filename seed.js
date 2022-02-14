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
    {name: 'Miso Base', image: "https://live.staticflickr.com/65535/51876308355_325573b213_h.jpg",
    category: categories[0], 
    price: 15.00},
    {name: 'Spicy Miso', image: "https://live.staticflickr.com/65535/51874734432_1a4894f53d_h.jpg",
    category: categories[0], 
    price: 15.00},
    {name: 'Garlic Miso', image: "https://live.staticflickr.com/65535/51874780337_b7665885b4_h.jpg",
    category: categories[0], 
    price: 15.00},
    {name: 'Pork', image: "https://live.staticflickr.com/65535/51875748596_eb8b9e48a7_k.jpg",
    category: categories[1], 
    price: 2.00}, 
    {name: 'Beef', image: "https://live.staticflickr.com/65535/51875930589_6ed6f31aca_h.jpg",
    category: categories[1], 
    price: 2.00}, 
    {name: 'Shallots', image: "https://live.staticflickr.com/65535/51876215539_fdd06ec4d0_k.jpg",
    category: categories[2], 
    price: 2.00}, 
    {name: 'Extra Egg', image: "https://live.staticflickr.com/65535/51876537665_dda5dca812_h.jpg",
    category: categories[2], 
    price: 2.00}, 
    {name: 'Mushrooms', image: "https://live.staticflickr.com/65535/51876530180_1dc181c5f8_k.jpg",
    category: categories[2], 
    price: 2.00}, 
    
  ]);

  console.log(items)

  process.exit();

})();