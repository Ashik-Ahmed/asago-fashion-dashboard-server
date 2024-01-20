const { default: mongoose } = require("mongoose");

const categorySchema = mongoose.Schema(
    {
        categoryName: {
            type: String,
            unique: true,
            required: true
        },
        description: {
            type: String,
        },
        image: {
            type: String,
        },
        status: {
            type: String,
        },
        parentCategory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        },
        subCategories: [
            {
                categoryName: {
                    type: String,
                },
                parentCategory: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Category'
                }
            }
        ],
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
            }
        ]
    },
    {
        timestamps: true
    }
)



const Category = mongoose.model('Category', categorySchema);
module.exports = Category;