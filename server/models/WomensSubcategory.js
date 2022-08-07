const mongoose = require('mongoose');

const { Schema } = mongoose;

const womensSubcategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const WomensSubcategory = mongoose.model('WomensSubcategory', womensSubcategorySchema);

module.exports = WomensSubcategory;