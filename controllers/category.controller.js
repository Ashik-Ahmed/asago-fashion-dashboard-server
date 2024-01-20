exports.createNewCategory = async (req, res) => {
    try {
        const categoryData = req.body;
        console.log(categoryData);
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}