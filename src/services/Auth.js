import { getUserData, removeUserData } from "./Storage"


export const isAuthenticated = ()=>{
    return getUserData()!=null?true:false;
}

export const logout = ()=>{
    removeUserData();
}