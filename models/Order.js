const { default: mongoose } = require("mongoose");

const orderSchema = mongoose.Schema({
    orderedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    orderNumber: {
        type: String,
    },
    orderItems: [
        {
            title: {
                type: String,
                required: true
            },
            qty: {
                type: Number,
                required: true
            },
            color: {
                type: String,
            },
            image: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },

        }],

    shippingAddress: {
        fullName: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
    },

    coupon: {
        type: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coupon'
    },

    paymentMethod: {
        type: String,
        required: true
    },

    paymentResult: {
        id: {
            type: String
        },
        status: {
            type: String
        },
        update_time: {
            type: String
        },
        email_address: {
            type: String
        }
    },

    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },

    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },

    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },

    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },

    paidAt: {
        type: Date
    },

    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },

    deliveredAt: {
        type: Date
    },

},
    {
        timestamps: true
    }
)

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;