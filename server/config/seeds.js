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
      name: 'Polo Blue/Light Blue',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'https://n.nordstrommedia.com/id/sr3/b785bfa0-e1a3-463f-87ef-dc78e4e988f9.jpeg?h=365&w=240&dpr=2',
      category: categories[0]._id,
      price: 29.99,
      quantity: 500,
      department: 'mens',
      subcategory: 'tops'
    },
    {
      name: 'Pocket T Lime',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'https://i5.walmartimages.com/asr/aa6100fa-1440-453b-a5e4-8ddf631dc61b.3599b5f3eba0542b0e2cf7e762c537b6.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF',
      category: categories[0]._id,
      price: 10.99,
      quantity: 500,
      department: 'mens',
      subcategory: 'tops'
    },
    {
      name: 'Hoodie Grey/Maroon',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'https://pimg.bucklecontent.com/images/products/34700B4381/MRW/f/065f7f86fcda39b657193f94e31dbf67v3?quality=0.8&width=392',
      price: 29.99,
      quantity: 20,
      department: 'mens',
      subcategory: 'tops'
    },
    {
    name: 'Dress Shirt Light Blue',
    category: categories[1]._id,
    description:
      'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbi_oMT4I2zWlkjoAG8KdUH1SEemo9QzN3DhuaszZdxCHGSXGGQeFe-C4RSfvE9lFBto&usqp=CAU',
    price: 39.99,
    quantity: 20,
    department: 'mens',
    subcategory: 'tops'
  },

  {
    name: 'Henley Beige',
    category: categories[1]._id,
    description:
      'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
    image: 'https://cdn.shopify.com/s/files/1/0123/5065/2473/products/BM11143.283NATVW_0474_700x.jpg?v=1659469939',
    price: 35.99,
    quantity: 20,
    department: 'mens',
    subcategory: 'tops'
  },
  {
    name: 'Workout Black Sleevless',
    category: categories[1]._id,
    description:
      'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
    image: 'https://target.scene7.com/is/image/Target/GUEST_8e936a13-963d-4963-817d-5afbdace6b93?wid=250&hei=250&fmt=pjpeg',
    price: 24.99,
    quantity: 20,
    department: 'mens',
    subcategory: 'tops'
  },
    {
      name: 'Khaki Beige',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'https://cdn.shopify.com/s/files/1/0532/2725/8017/products/beb6200073540cfd8ad2008c0b59d96698e47f28_900x1125_crop_center.jpg?v=1659421573',
      price: 59.99,
      quantity: 50,
      department: 'mens',
      subcategory: 'pants'
    },
    {
      name: 'Dress Pant Navy',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'https://cdn.media.amplience.net/i/brooksbrothers/MJ00373_BLUE?$medium$&unsharp=1,.01,60,20',
      price: 69.99,
      quantity: 100,
      department: 'mens',
      subcategory: 'pants'
    },
    {
      name: 'Track Pant Black/Striped',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'https://assets.ajio.com/medias/sys_master/root/hc2/h83/15879856881694/teamspirit_blue_track_pants_with_contrast_taping.jpg',
      price: 39.99,
      quantity: 100,
      department: 'mens',
      subcategory: 'pants'
    },
    {
      name: 'Cargo Beige',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'https://scene7.zumiez.com/is/image/zumiez/cat_max/Empyre-Loose-Fit-Khaki-Cargo-Skate-Pants-_348594.jpg',
      price: 29.99,
      quantity: 100,
      department: 'mens',
      subcategory: 'pants'
    },
    {
      name: 'Bootcut Jean Dark Blue/Fade',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'https://pimg.bucklecontent.com/images/products/14410ABP23279/BIC/f/4f935d2ffef49db6671c314a6889de76v3?quality=0.8&width=392',
      price: 49.99,
      quantity: 100,
      department: 'mens',
      subcategory: 'pants'
    },
    {
      name: 'Slim Light Blue Ripped',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'https://www.snipesusa.com/dw/image/v2/BFKF_PRD/on/demandware.static/-/Sites-snipes-master-catalog/default/dwc30e4cfa/images/hi-res/jordan-craig_jm3488-ice_01.jpg?sw=400&sh=502',
      price: 79.99,
      quantity: 100,
      department: 'mens',
      subcategory: 'pants'
    },
    {
      name: 'Low Top Brown Leather',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'https://us.ecco.com/dw/image/v2/BCNL_PRD/on/demandware.static/-/Sites-ecco/default/dw8b922fd0/productimages/470054-50436-outside.jpg?sw=425&sh=425&sm=fit&q=75',
      price: 109.99,
      quantity: 30,
      department: 'mens',
      subcategory: 'shoes'
    },
    {
      name: 'Wing Tip Light Brown',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'https://www.dmarge.com/wp-content/uploads/2017/03/wing.jpg',
      price: 199.99,
      quantity: 30,
      department: 'mens',
      subcategory: 'shoes'
    },
    {
      name: 'Nike Air Vapormax',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/28310dce-72ae-44c4-9a7e-d0eba13bdf3e/air-vapormax-2021-fk-mens-shoes-NpTfFz.png',
      price: 210.00,
      quantity: 30,
      department: 'mens',
      subcategory: 'shoes'
    },
    {
      name: 'Black Zip Boot Leather',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'https://cdn.shopify.com/s/files/1/0078/3125/7206/products/zip-boot-black-memphis-jeans-london-2_1024x1024.jpg?v=1659609080',
      price: 299.99,
      quantity: 50,
      department: 'mens',
      subcategory: 'shoes'
    },
    {
      name: 'Merrell Slip On Grey',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'https://www.tradeinn.com/f/13727/137276764_3/merrell-jungle-moc-hiking-shoes.jpg',
      price: 109.99,
      quantity: 30,
      department: 'mens',
      subcategory: 'shoes'
    },
    {
      name: 'Low Top Sneaker White',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'https://image.menswearhouse.com/is/image/TMW/MW40_41ZY_13_JOSEPH_ABBOUD_WHITE_MAIN?$40GridDesktop$',
      price: 110.00,
      quantity: 20,
      department: 'mens',
      subcategory: 'shoes'
    },
    {
      name: 'Chrono Stainless Steel/Blue',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'https://n.nordstrommedia.com/id/sr3/52d55b9e-11d0-4882-9229-12ddccc7d203.jpeg?h=365&w=240&dpr=2',
      price: 399.99,
      quantity: 20,
      department: 'mens',
      subcategory: 'accessories'
    },
    {
      name: 'Belt Brown Leather',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'https://cdn11.bigcommerce.com/s-ybxns/images/stencil/380x380/products/1052/5735/Belt3_1500x1500__02159.1599166185.png?c=2',
      price: 49.99,
      quantity: 40,
      department: 'mens',
      subcategory: 'accessories'
    },
    {
      name: 'Wallet Black Alligator',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'https://www.realmenswallets.com/wp-content/uploads/Crocodile-Wallet-Luxury-Mens-Wallets-Black-with-Orange-Ostrich-Quill-2.jpg',
      price: 199.99,
      quantity: 15,
      department: 'mens',
      subcategory: 'accessories'
    },
    {
      name: 'Navigator Light Brown/Gold',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'https://www.smithoptics.com/dw/image/v2/BDPZ_PRD/on/demandware.static/-/Sites-smith-master-catalog/default/dw133a10a8/images/product-images/outcome-sunglasses/gold/cpPolarizedBrown_01.png?sw=700&sh=700&sm=fit',
      price: 199.99,
      quantity: 50,
      department: 'mens',
      subcategory: 'accessories'
    },
    {
      name: 'Cuff Link Checkered',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'https://n.nordstrommedia.com/id/sr3/8a9ef033-3c33-4a03-9e0a-ceeca2338787.jpeg?h=365&w=240&dpr=2',
      price: 29.99,
      quantity: 100,
      department: 'mens',
      subcategory: 'accessories'
    },
    {
      name: 'Grooved Money Clip Engravable',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnluC5Zf9lNrbvY-r2ImuI_0VQhv172qeIA&usqp=CAU',
      price: 399.99,
      quantity: 20,
      department: 'mens',
      subcategory: 'accessories'
    },
    {
      name: 'Short Sleeve Grey Hummingbird',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'https://ii.sundancecatalog.com/fcgi-bin/iipsrv.fcgi?FIF=/images/sundance/source/products/en_us/source/102883.tif&RGN=0.15,0.02,0.7,1&qlt=35&wid=700&cvt=jpeg',
      price: 19.99,
      quantity: 100,
      department: 'womens',
      subcategory: 'tops'
    },
    {
      name: 'Blouse Multicolor',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'https://img.guess.com/image/upload/f_auto,q_auto:eco,fl_strip_profile,dpr_1.5,fl_advanced_resize,fl_progressive,w_392,c_scale/v1/NA/Style/ECOMM/2YGH339741Z-P40Q',
      price: 29.99,
      quantity: 100,
      department: 'womens',
      subcategory: 'tops'
    },
    {
      name: 'V Neck Sunflower T',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'https://i5.walmartimages.com/asr/5088ebe3-d899-48e9-9d7a-a42a52f85f1b.86e752f13df8cfbeafd37a1e8238a76a.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF',
      price: 25.00,
      quantity: 100,
      department: 'womens',
      subcategory: 'tops'
    },
    {
      name: 'Puff Sleeve Ribbed Knit T',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'https://n.nordstrommedia.com/id/sr3/c5ce2923-686c-463d-a472-13afe749199a.jpeg?h=365&w=240&dpr=2',
      price: 79.99,
      quantity: 100,
      department: 'womens',
      subcategory: 'tops'
    },
    {
      name: 'Wrap Top Black Polkadot',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'https://n.nordstrommedia.com/id/sr3/b73fb453-9473-45c6-982a-3c9f10a0bbc6.jpeg?h=365&w=240&dpr=2',
      price: 19.99,
      quantity: 100,
      department: 'womens',
      subcategory: 'tops'
    },
    {
      name: 'Crew Neck Solid Long Sleeve',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'https://i.pinimg.com/474x/17/31/a2/1731a2e94e7608749f7e9a7526ad9173.jpg',
      price: 69.99,
      quantity: 100,
      department: 'womens',
      subcategory: 'tops'
    },
    {
      name: 'Knit Tie-Waist Dress',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'https://dimg.dillards.com/is/image/DillardsZoom/nav2/kensie-textured-knit-boat-neck-tie-waist-short-sleeve-blouson-sheath-dress/00000000_zi_1d104230-3ef2-496b-86bd-99e6a6134403.jpg',
      price: 69.99,
      quantity: 1000,
      department: 'womens',
      subcategory: 'dresses'
    },
    {
      name: 'Belted Button Midi Dress',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'https://xcdn.next.co.uk/common/Items/Default/Default/Publications/3_4Ratio/G28/shotview-366x488/3556/A93-384s.jpg',
      price: 89.99,
      quantity: 100,
      department: 'womens',
      subcategory: 'dresses'
    },
    {
      name: 'Printed Ruffle Sleeve Maxi Dress',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'https://images.express.com/is/image/expressfashion/0094_07856698_0031?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon',
      price: 110.00,
      quantity: 100,
      department: 'womens',
      subcategory: 'dresses'
    },
    {
      name: 'Color Block Maxi Dress',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'https://pimg.bucklecontent.com/images/products/44039ID1771/OLM/f/9a7552094018c087152f4e756ce4532fv3?quality=0.8&width=392',
      price: 90.00,
      quantity: 100,
      department: 'womens',
      subcategory: 'dresses'
    },
    {
      name: 'Ruched Mock Neck Mini Dress',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw5d41c6bb/1_front_750/00469986-01.jpg?sw=300&sh=450',
      price: 19.99,
      quantity: 50,
      department: 'womens',
      subcategory: 'dresses'
    },
    {
      name: 'Jersey Tie Shift Dress',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'https://www.talbots.com/dw/image/v2/BCMM_PRD/on/demandware.static/-/Sites-master-catalog-talbots/default/dwe3e59c69/images/223036516/223036516_8271.jpg?sw=370&sh=490&sm=fit&sfrm=jpg',
      price: 139.99,
      quantity: 100,
      department: 'womens',
      subcategory: 'dresses'
    },
    {
      name: 'Athleta Brooklyn Trouser Tan',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'https://travelfashiongirlpostphotos.s3.us-east-2.amazonaws.com/2020/Alternatives+to+Anatomie+Skyler+Pants/affordable-womens-pants-14.jpg',
      price: 89.99,
      quantity: 100,
      department: 'womens',
      subcategory: 'pants'
    },
    {
      name: 'Pull On Wide-Leg Tan',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/21020810_fpx.tif?$browse$&wid=224&fmt=jpeg',
      price: 46.99,
      quantity: 100,
      department: 'womens',
      subcategory: 'pants'
    },
    {
      name: 'High Waist Ankle Skinny Pants White',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'https://n.nordstrommedia.com/id/sr3/f1f2bb11-a3fd-4e0d-9224-3cbdeb67c18f.jpeg?h=365&w=240&dpr=2',
      price: 68.00,
      quantity: 70,
      department: 'womens',
      subcategory: 'pants'
    },
    {
      name: "90's Boyfriend Pant Dark Green",
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'https://s7d2.scene7.com/is/image/aeo/2322_4613_309_of?$cat-main_large$',
      price: 59.95,
      quantity: 100,
      department: 'womens',
      subcategory: 'pants'
    },
    {
      name: 'Ponte Straight Leg Pocket Pant Dark Grey',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'https://images.ctfassets.net/afruo3gr1g6h/6XlzIw4XT00adS1ywl4Yg1/aac86adebd50c8257328b50ef0b2c5df/W-PNT-22-CHR_2895.jpg?w=1440&q=50',
      price: 39.90,
      quantity: 1000,
      department: 'womens',
      subcategory: 'pants'
    },
    {
      name: 'High Rise Slim Straight',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'https://target.scene7.com/is/image/Target/GUEST_69f2cec0-fa7d-43b3-8edd-5c60940a712e',
      price: 2.99,
      quantity: 1000,
      department: 'womens',
      subcategory: 'pants'
    },
    {
      name: 'Tennis Skirt Doll',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/faff7ad2-9c2e-40b4-871d-fadd6b536188/nikecourt-dri-fit-advantage-womens-pleated-tennis-skirt-SVH8JW.png',
      price: 45.00,
      quantity: 100,
      department: 'womens',
      subcategory: 'skirts'
    },
    {
      name: 'Animal Print Midi Skirt',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'https://static.zara.net/photos///2022/I/0/1/p/8351/227/064/2/w/315/8351227064_2_1_1.jpg?ts=1659602466253',
      price: 45.90,
      quantity: 100,
      department: 'womens',
      subcategory: 'skirts'
    },
    {
      name: 'Houndstooth Pencil Skirt Green/Black',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'https://images.nyandcompany.com/is/image/NewYorkCompany/productlist2/Houndstooth-Pencil-Skirt_04477192_645.jpg',
      price: 7.99,
      quantity: 100,
      department: 'womens',
      subcategory: 'skirts'
    },
    {
      name: 'Long Printed Skirt',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'https://static.zara.net/photos///2022/I/0/1/p/6895/242/330/2/w/231/6895242330_1_1_1.jpg?ts=1656511987714',
      price: 3.99,
      quantity: 40,
      department: 'womens',
      subcategory: 'skirts'
    },
    {
      name: 'Floral Burnout Midi Skirt',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'https://romans-cdn.rlab.net/images/extralarge/aba299c6-6f35-483f-ada2-119b0f57a861.jpg',
      price: 69.99,
      quantity: 60,
      department: 'womens',
      subcategory: 'skirts'
    },
    {
      name: 'Paisley Print Midi Skirt',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'https://www.catofashions.com/prodimages/122083-DEFAULT-l.jpg',
      price: 24.99,
      quantity: 20,
      department: 'womens',
      subcategory: 'skirts'
    },
    {
      name: 'Tree Runners Black/Purple',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_265,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/f04fyBYppR3gdgNp8T5kZ/1',
      price: 105,
      quantity: 600,
      department: 'womens',
      subcategory: 'shoes'
    },
    {
      name: 'Bridget Chelsea Boot',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'https://mauricesprodatg.scene7.com/is/image/mauricesProdATG/126686_C829?$large$',
      price: 59.99,
      quantity: 60,
      department: 'womens',
      subcategory: 'shoes'
    },
    {
      name: 'Mixed Leather Runners Brown/Black',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'https://pyxis.nymag.com/v1/imgs/a65/b07/5b07e6c65fa875fe5cc9c144e3d9675ae2-loewe.rsquare.w600.jpg',
      price: 209.99,
      quantity: 600,
      department: 'womens',
      subcategory: 'shoes'
    },
    {
      name: 'Rhinestone Wooden Heels Beige',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'https://img.guess.com/image/upload/f_auto,q_auto:eco,fl_strip_profile,dpr_1.5,fl_advanced_resize,fl_progressive,w_392,c_scale/v1/NA/Style/ECOMM/GWGEMELY2-LNA01-ALT1',
      price: 139.99,
      quantity: 20,
      department: 'womens',
      subcategory: 'shoes'
    },
    {
      name: 'Tango Pump Silver',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'https://www.shoestation.com/media/catalog/product/cache/f1fd2bc4069cc3a1c7e45a18cd44f2eb/p/i/pierre-dumas-tango-14-87821508-silver-87821508-193626_105964.jpg',
      price: 59.99,
      quantity: 60,
      department: 'womens',
      subcategory: 'shoes'
    },
    {
      name: 'Sharon Gracie Slip-On Black',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'https://jcpenney.scene7.com/is/image/jcpenneyimages/womens-comfort-shoe-0425c28d-902c-4b0f-8d17-ac26cd924d06?scl=1&qlt=75',
      price: 64.99,
      quantity: 60,
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
      name: 'Two Piece Floral',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'https://tommybahama.scene7.com/is/image/TommyBahama/SS100292_033_main?$main_detail_500$',
      price: 79.99,
      quantity: 600,
      department: 'womens',
      subcategory: 'swimwear'
    },
    {
    name: 'One Piece Black',
    category: categories[4]._id,
    description:
      'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRq29Gj-HWel5bRM1NpjgnNp2V2-oZ8nXpA&usqp=CAU',
    price: 69.99,
    quantity: 600,
    department: 'womens',
    subcategory: 'swimwear'
  },
  {
    name: 'One Piece Cheetah',
    category: categories[4]._id,
    description:
      'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    image: 'https://target.scene7.com/is/image/Target/GUEST_212894d6-9b4f-4890-b3e6-08c2c8b1e8d5',
    price: 49.99,
    quantity: 600,
    department: 'womens',
    subcategory: 'swimwear'
  },
  {
    name: 'Two Piece Red Printed',
    category: categories[4]._id,
    description:
      'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    image: 'https://img.joomcdn.net/b930f0271453ed9ebdbef6099f213d2848edf0a3_original.jpeg',
    price: 39.99,
    quantity: 600,
    department: 'womens',
    subcategory: 'swimwear'
  },
  {
    name: 'Two Piece Blue Floral',
    category: categories[4]._id,
    description:
      'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    image: 'https://cdn.shopify.com/s/files/1/0703/0099/products/Swim-Tops_Mara_Print_Flora_Front_Charley_070622_300x300@2x.jpg?v=1657847900',
    price: 69.99,
    quantity: 600,
    department: 'womens',
    subcategory: 'swimwear'
  },
    {
      name: 'Brown Tortoise Shell',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'https://cdn.shopify.com/s/files/1/0029/7900/4480/products/LSP1902028_2_AIR_HEART_9de19ccb-6ad7-4b35-beea-2b1ff4313168_1600x.jpg?v=1649296731',
      price: 69.99,
      quantity: 600,
      department: 'womens',
      subcategory: 'accessories'
    },
    {
      name: 'Perforated Belt Brown',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'https://belk.scene7.com/is/image/Belk/wk19_06062022_spec_accessories_brandshop_5c5_m?$DWP_PHOTO$',
      price: 32.99,
      quantity: 40,
      department: 'womens',
      subcategory: 'accessories'
    },
    {
      name: 'Mesh Sun Hat Black',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'https://i5.walmartimages.com/asr/68acdf3a-dbf0-4f41-843b-89047b5aa20b.fba8e82ffbeca131185c1b2490da8a17.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF',
      price: 9.99,
      quantity: 100,
      department: 'womens',
      subcategory: 'accessories'
    },
    {
      name: 'Large Stone Necklace Rainbow',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'https://images.urbndata.com/is/image/Anthropologie/67899625_066_b?$an-category$&qlt=80&fit=constrain',
      price: 49.99,
      quantity: 50,
      department: 'womens',
      subcategory: 'accessories'
    },
    {
      name: 'Medium Transport Bag Brown',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'https://i.s-madewell.com/is/image/madewell/F5788_BR6755_ld?wid=700&hei=889&fmt=jpeg&fit=crop&qlt=75,1&resMode=bisharp&op_usm=0.5,1,5,0',
      price: 168.99,
      quantity: 40,
      department: 'womens',
      subcategory: 'accessories'
    },
    {
      name: 'Statement Bandana',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'https://assets.orvis.com/is/image/orvisprd/3BFE7221WAlt1_W?wid=365&src=is($object$:1-1)',
      price: 19.99,
      quantity: 50,
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
