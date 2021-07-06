import {api} from "../data/api";
import {LOAD_PRODUCTS, LOAD_PRODUCT} from "./actionType";

export const loadProducts = () => async (dispatch) => {
    const res = await api.getProducts();
    dispatch({type: LOAD_PRODUCTS, payload: res.data});
};

export const loadProduct = (id) => async (dispatch) => {
    const res = await api.getProduct(id);
    dispatch({type: LOAD_PRODUCT, payload: res.data});
};