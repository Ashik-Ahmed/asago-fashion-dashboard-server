const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    SKU: {
        type: String
    },
    price: {
        type: Number
    },
    isActive: {
        type: Boolean,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
    },
    inventory: {
        type: mongoose.Schema.Types.ObjectId,
    },
    images: {
        titleImage: String,
        allImage: Array
    },
    tags: {
        type: Array
    },
    soldCount: {
        type: Number
    },
    weight: {
        type: Number
    },
    brand: {
        type: String
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})


const Product = mongoose.model('Product', productSchema);
module.exports = Product;