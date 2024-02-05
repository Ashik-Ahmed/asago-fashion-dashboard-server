const { default: mongoose } = require("mongoose");

const inventorySchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },

    stock: [
        {
            size: {
                type: String,
                required: true
            },
            color: Array,
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            soldCount: {
                type: Number
            },
            weight: {
                type: Number
            },
        }
    ],
},
    {
        timestamps: true
    }
)

const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;