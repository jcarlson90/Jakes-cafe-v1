require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Guitars', sortOrder: 10},
    {name: 'Basses', sortOrder: 20},
    {name: 'Drums', sortOrder: 30},
    {name: 'Synths', sortOrder: 40},
    {name: 'Keyboards', sortOrder: 50},
    {name: 'Controllers', sortOrder: 60},
    {name: 'Amps', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Jackson Soloist USA', emoji: '🎸', category: categories[0], price: 2200.00},
    {name: 'Fender Stratocaster 1976', emoji: '🎸', category: categories[0], price: 3579.00},
    {name: 'Gibson Les Paul', emoji: '🎸', category: categories[0], price: 3200.00},
    {name: 'Ibanez SR500E', emoji: '🎸', category: categories[1], price: 800.00},
    {name: 'Jackson JS2 Concert', emoji: '🎸', category: categories[1], price: 699.00},
    {name: 'Fender Jazz Bass', emoji: '🎸', category: categories[1], price: 1489.00},
    {name: 'Tama Imperialstar Kit', emoji: '🥁', category: categories[2], price: 1249.00},
    {name: 'Pearl Roadshow Kit', emoji: '🥁', category: categories[2], price: 899.00},
    {name: 'Moog Subsequent 37 Analog', emoji: '🎛', category: categories[3], price: 2000.00},
    {name: 'Nord Stage 4', emoji: '🎛', category: categories[3], price: 5699.00},
    {name: 'Sequential Prophet-5', emoji: '🎛', category: categories[3], price: 3239.00},
    {name: 'Yamaha Cp-88', emoji: '🎹', category: categories[4], price: 2599.99},
    {name: 'Roland Phantom-8', emoji: '🎹', category: categories[4], price: 3999.99},
    {name: 'Pioneer DDJ-800', emoji: '🎧', category: categories[5], price: 839.00},
    {name: 'Pioneer XDJ-XZ', emoji: '🎧', category: categories[5], price: 2300.00},
    {name: 'Pioneer DDJ-REV7', emoji: '🎧', category: categories[5], price: 1999.00},
    {name: 'Pioneer DJM-A9 ', emoji: '🎧', category: categories[5], price: 2699.00},
    {name: 'Ampeg VH-140 C', emoji: '🔊', category: categories[6], price: 1400.00},
    {name: 'Vader 2x12 Cabinet', emoji: '🔊', category: categories[6], price: 999.99},
    {name: 'Mesa Boogie Dual Rectifier', emoji: '🔊', category: categories[6], price: 2999.99},
    {name: 'Hughes & Ketner Tubemeister', emoji: '🔊', category: categories[6], price: 999.00},
    {name: 'EVH 5150 100S', emoji: '🔊', category: categories[6], price: 2449.99},
  ]);

  console.log(items)

  process.exit();

})();