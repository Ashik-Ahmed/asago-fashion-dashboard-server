const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    SKU: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    images: {
        titleImage: String,
        allImage: Array,
        required: true
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
    stock: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventory',
        reruired: true
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
},
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productSchema);
module.exports = Product;