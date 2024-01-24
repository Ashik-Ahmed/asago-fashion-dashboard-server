const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    sku: {
        type: String,
        unique: true,
        required: true
    },
    // price: {
    //     type: Number,
    //     required: true
    // },
    isActive: {
        type: Boolean,
        default: true,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    images: {
        titleImage: {
            type: String,
            required: true
        },
        allImage: {
            type: Array,
            required: true
        }
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
    // inventory: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Inventory',
    //     reruired: true
    // },
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