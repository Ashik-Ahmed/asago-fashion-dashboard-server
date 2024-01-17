const { default: mongoose } = require("mongoose");

const inventorySchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    stock: [
        {
            size: String,
            quantity: Number,
            price: Number,
            color: String
        }
    ]
},
    {
        timestamps: true
    }
)

const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;