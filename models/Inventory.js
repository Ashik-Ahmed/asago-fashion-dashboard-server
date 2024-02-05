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
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            color: {
                type: String
            }
        }
    ],
    soldCount: {
        type: Number
    },
    weight: {
        type: Number
    },
},
    {
        timestamps: true
    }
)

const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;