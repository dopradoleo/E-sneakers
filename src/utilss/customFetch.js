import { Products } from "./Products";

let isOk = true;

const customFetch = (time , task) => {
    return new Promise((resolve , reject ) => {
        setTimeout(() => {
            if(isOk){
                resolve(Products);
                console.log(Products)
            }else {
                reject("Error in the coustomFetch:(");
            }
        }, time);
    });
}

export default customFetch;