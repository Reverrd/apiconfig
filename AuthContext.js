import axios from "axios";
import { createContext, useState } from "react";
// import { BASE_URL } from "./config";
import { BASE_URL } from "./config";

export const AuthContext = createContext()
export const AuthProvider =({children})=>{
    const [userInfo, setUserInfo] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const register = (fullname, username, phoneNumber, email, dateOfBirth, placeOfBirth, achievement, investmentExperience, occupation, walletAddress, password, confirmPassword)=>{
        setIsLoading(true)
        axios.post(`${BASE_URL}/create-account`, {
            fullname, username, phoneNumber, email, dateOfBirth, placeOfBirth, achievement, investmentExperience, occupation, walletAddress, password, confirmPassword
        }).then(res =>{
            let userInfo = res.data;
            setUserInfo(userInfo)
            
            console.log(userInfo)
        }).catch(e=>{
            console.log(`register error ${e}`)
            setIsLoading(false)
        })
    }

    return(
    <AuthContext.Provider value={{register}}>
        {children}
    </AuthContext.Provider>
    )
}