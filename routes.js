const Product = require('./product.js')

var routes = [
    { uri: '/products', httpmethod: 'get', component: Product,  method: 'list'},
];


module.exports = {
    routes
}
