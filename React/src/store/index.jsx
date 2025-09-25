import {configureStore} from "@reduxjs/toolkit";
import products from "./productsSlice.jsx";
import cart from "./cartSlice.jsx";
const store = configureStore({reducer : {products,cart}});


export default store;