const mongoose = require('mongoose');

const { Schema } = mongoose;

const mensSubcategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const MensSubcategory = mongoose.model('MensSubcategory', mensSubcategorySchema);

module.exports = MensSubcategory;