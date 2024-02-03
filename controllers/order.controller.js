exports.createNewOrder = async (req, res) => {
    try {
        const orderData = req.body;

    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}