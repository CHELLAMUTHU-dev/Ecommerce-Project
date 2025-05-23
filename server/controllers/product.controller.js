 const Product = require('../models/Product')

 
 
 
 exports. GetAllProduct = async (req,res) => {
    const limit = parseInt(req.query.limit) || 0
    try {
        const product_details = await Product.find({}).limit(limit)
        res.status(201).json({product_details})
    } catch (error) {
        res.status(501).json({message : error.message})
    }
}


exports. GetProductById = async (req,res) => {
        const {id} = req.params
        try {
                const product_details = await Product.findById({_id:id})
                res.status(201).json({product_details})
            } catch (error) {
                    res.status(501).json({message : error.message})
                }
            } 
            
