const { default: mongoose } = require("mongoose");

const categorySchema = mongoose.Schema(
    {
        categoryName: {
            type: String,
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
    }
)



const Category = mongoose.model('Category', categorySchema);
module.exports = Category;