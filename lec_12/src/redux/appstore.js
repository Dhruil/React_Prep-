import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";
const appstore = configureStore({

    reducer : {
        cart : cartReducer, // slice name : reducer of slice
        // user : userReducer can creat many slices
    },
})

export default appstore;