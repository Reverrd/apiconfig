import axios from "axios";
import { createContext, useState } from "react";
// import { BASE_URL } from "./config";
import { BASE_URL, TRANS_URL } from "./config";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    const login = (clientId, clientSecret) => {

        axios.post(`${BASE_URL}/login`,{
            clientId, clientSecret
        }).then(
            res=>{
                let userInfo = res.data
                setUserInfo(userInfo)
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
            }
        ).catch(
            e=>{
                console.log(`login error ${e}`)
            }
        )
    }
    const transactionCurrencies = ()=>{
        axios.get(`${TRANS_URL}/currencies`)
        .then(
            res=>{
                
            }
        )
    }
    return(
    <AuthContext.Provider value={{register, userInfo, login}}>
        {children}
    </AuthContext.Provider>
    )
}