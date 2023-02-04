import { createContext, useState } from "react";
export const AuthContext=createContext();

function AuthContextProvider({children}) {
const [userAuth,setUserAuth]=useState({
    isAuth:false,
    token:"",
})
const loggedin=(va)=>{
    setUserAuth({isAuth:true,token:va})
}
const loggedout=()=>{
    setUserAuth({ isAuth:false,token:""});

}
return <AuthContext.Provider value={{userAuth,loggedin,loggedout}}>
{children}
</AuthContext.Provider>
}
export default AuthContextProvider;
