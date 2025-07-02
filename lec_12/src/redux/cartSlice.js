import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart", //name of slice
    initialState : { //passing initial data to slice
        items : []
    },
    reducers : {
        // making api to modify store when particular action happen
        addItem : (state,action) =>{//addItem,removeItmes,clearCart are actions : it's reducer function modify the based on action
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload)
        },
        clearCart :(state,action) =>{
            console.log(current(state));
            state.items = [];
            // state.items.length = 0;
            //return{items : []} modify the Originalstate or above mention
// state = [] we can't modify like this  because it is onother state varible it not change originalState      },
    },
}
})

// cartSlice = {
//     action :
//     {
//         addItem ,
//         removeItems  ,
//         clearCart  ,
//     },
//     reducer ,
// }


export const {addItem,removeItem,clearCart}  = cartSlice.actions // many action hence s and individual export;

//export individual reducer hence it has not s
export default cartSlice.reducer