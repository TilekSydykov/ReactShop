import http from "./http";

function getProducts(){
    return http.get("/products")
}

function getProduct(id){
    return http.get("/products/" + id)
}

export const api = {
    getProducts,
    getProduct
}