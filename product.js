const list = async function (req, res, next){
    res.status(200).json({ 
        products: [
            {
                id: 1,
                name: 'product1'
            },
            {
                id: 2,
                name: 'product2'
            },            
        ]
    },)
}


module.exports = {
    list
}