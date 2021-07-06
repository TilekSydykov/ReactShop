import {LOAD_PRODUCTS, LOAD_PRODUCT} from "../actionType";

const initialState = []

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS: {
            return action.payload;
        }
        case LOAD_PRODUCT: {
            return [action.payload];
        }
        default: {
            return state;
        }
    }
};

export default productsReducer;