
import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {items : []},
    reducers : {
       addToCart : (state,action) => {
           const existedItem = state.items.find(item => item.id === action.payload.id);
           if(existedItem){
               state.items.map((item) => {
                   if(item.id === action.payload.id){
                       item.quantity += 1;
                   }
               })
           }else {
               state.items.push({...action.payload,quantity: 1});
           }

       },
        removeFromCart: (state,action) => {
          state.items = state.items.filter(item => item.id !== action.payload);
        },
        incrementQuantity : (state,action) => {
           const existedItem = state.items.find(item => item.id === action.payload);
           if(existedItem){
               existedItem.quantity += 1;
           }
        },
        decrementQuantity : (state,action) => {
            const existedItem = state.items.find(item => item.id === action.payload);
            if(existedItem){
                existedItem.quantity -= 1;

            }
            if(existedItem.quantity === 0){
                state.items = state.items.filter(item => item.id !== action.payload);
            }
        }

    }
});


export default cartSlice.reducer;
export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions;