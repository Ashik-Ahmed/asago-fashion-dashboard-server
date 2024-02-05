const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    slug: {
        type: String,
        unique: true,
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
    brand: {
        type: String
    },
    inventory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventory'
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

productSchema.pre('save', function (next) {
    if (!this.isModified('title')) {
        return next();
    }
    this.slug = this.title.toLowerCase().replace(/\s+/g, '-');
    next();
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;