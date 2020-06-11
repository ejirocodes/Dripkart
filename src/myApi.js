import products from './data/products'

export default {
    getProducts: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 500);
            setTimeout(() => reject (new Error('There was an error', Error)), 1000)
        });
    },
    products: (action, productId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productId);
            }, 100);
            setTimeout(() => reject (new Error('There was an error', Error)), 1000)
        });
    }
}