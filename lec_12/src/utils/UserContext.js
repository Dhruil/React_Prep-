import { createContext } from "react";
//createContext : give some initial information or we can make it empty it react give default value to createContext
const UserContext  = createContext({
    user : "Parmar",
})
export default UserContext;