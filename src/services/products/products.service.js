
import { mocks } from './mock'
import camelize from 'camelize';


export const productsRequest = ( ) => {
    return new Promise((resolve, reject) => {
        const mock = mocks.products.results;
        if (!mock) {
            reject("Not Found");
        }
        resolve(mock)
    })
}

export const productsTransform = (result) => {
    return camelize(result);
}

// productsRequest()
// .then(productsTransform)
// .then((transformedResponse) => {
//     console.log(transformedResponse);
// })
// .catch((err) => {
//     console.log(err);
// });