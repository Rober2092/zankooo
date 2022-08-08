const db = require('./connection');
const { User, Product, Category, Subcategory, MensSubcategory, WomensSubcategory } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'mens' },
    { name: 'womens' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Subcategory.deleteMany();

  const subcategories = await Subcategory.insertMany([
    {
      name: 'Tops',
      category: categories[0]._id,
    },
    {
      name: 'Bottoms',
      category: categories[0]._id,
    },
    {
      name: 'Shoes',
      category: categories[0]._id,
    },
    {
      name: "Accessories",
      category: categories[0]._id,
    },
    {
      name: 'Tops',
      category: categories[1]._id,
    },

    {
      name: 'Dresses',
      category: categories[1]._id,
    },

    {
      name: 'Pants',
      category: categories[1]._id,
    },
    {
      name: 'Skirts',
      category: categories[1]._id,
    },
    {
      name: 'Shoes',
      category: categories[1]._id,
    },
    {
      name: 'Swimwear',
      category: categories[1]._id,
    },
    {
      name: 'Accessories',
      category: categories[1]._id,
    },
  ]);

  await MensSubcategory.deleteMany();

  const menssubcategories = await MensSubcategory.insertMany([
    {
      name: 'Tops',
    },
    {
      name: 'Bottoms',
    },
    {
      name: 'Shoes',
    },
    {
      name: "Accessories",
    },
  ]);

  console.log('menssubcategories seeded');

  await WomensSubcategory.deleteMany();

  const womenssubcategories = await WomensSubcategory.insertMany([
    {
      name: 'Tops',
    },

    {
      name: 'Dresses',
    },

    {
      name: 'Pants',
    },
    {
      name: 'Skirts',
    },
    {
      name: 'Shoes',
    },
    {
      name: 'Swimwear',
    },
    {
      name: 'Accessories',
    },
  ]);

  console.log('womenssubcategories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500,
      department: 'mens',
      subcategory: 'tops'
    },
    {
      name: 'Canned Coffee',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500,
      department: 'mens',
      subcategory: 'tops'
    },
    {
      name: 'Toilet Paper',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'toilet-paper.jpg',
      price: 7.99,
      quantity: 20,
      department: 'mens',
      subcategory: 'tops'
    },
    {
      name: 'Handmade Soap',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 50,
      department: 'mens',
      subcategory: 'pants'
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100,
      department: 'mens',
      subcategory: 'pants'
    },
    {
      name: 'Camera',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30,
      department: 'mens',
      subcategory: 'shoes'
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30,
      department: 'mens',
      subcategory: 'accessories'
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100,
      department: 'womens',
      subcategory: 'tops'
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000,
      department: 'womens',
      subcategory: 'dresses'
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000,
      department: 'womens',
      subcategory: 'pants'
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100,
      department: 'womens',
      subcategory: 'skirts'
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600,
      department: 'womens',
      subcategory: 'shoes'
    },
    {
      name: 'One Piece Tan/Black',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'https://cdn11.bigcommerce.com/s-8eosbn3nrb/images/stencil/650x650/products/1966/8779/USW921092_NATURAL_01__29720.1.jpg',
      price: 49.99,
      quantity: 600,
      department: 'womens',
      subcategory: 'swimwear'
    },
    {
      name: 'One Piece Tan/Black',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'https://cdn.shopify.com/s/files/1/0029/7900/4480/products/LSP1902028_2_AIR_HEART_9de19ccb-6ad7-4b35-beea-2b1ff4313168_1600x.jpg?v=1649296731',
      price: 69.99,
      quantity: 600,
      department: 'womens',
      subcategory: 'accessories'
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
