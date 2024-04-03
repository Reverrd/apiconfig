import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { BASE_URL } from "./config";
import { BASE_URL, TRANS_URL } from "./config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext()
export const AuthProvider =({children})=>{
    const [userInfo, setUserInfo] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const register = (fullname, username, phoneNumber, email, dateOfBirth, placeOfBirth, achievement, investmentExperience, occupation, walletAddress, password, confirmPassword)=>{
        setIsLoading(true)
        axios.post('https://stock-api.coretechzone.com/api/accounts/create-account', {
            fullname, username, phoneNumber, email, dateOfBirth, placeOfBirth, achievement, investmentExperience, occupation, walletAddress, password, confirmPassword
        }
        ).then(res =>{
            let userInfo = res.data;
            setUserInfo(userInfo)
            console.log("User registered successfully:", userInfo)
            
            console.log(userInfo)
        }).catch(error=>{
            console.error('cannot connect to server', error)
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
                const currencies = res.data;
                console.log(`Transaction Currencies is ${currencies}`)
            }
        ).catch(err =>{
            console.log(`Error fetching transaction currencies and this is the error; ${err}`)
        })
    }
    const createInvestment = (walletAddress,investmentType,stockOrCrypto,amount)=>{
        axios.post(`${TRANS_URL}/create-investment`, {
            walletAddress,investmentType,stockOrCrypto,amount
        })
        .then(
            res=>{

            }
        )
    }

    

// Testing create-account api call
const testRegistration = () => {
    const sample = {
        fullname: "Promise Obioma",
        username: "reverd123",
        phoneNumber: '08151956899',
        email: 'proekene17@gmail.com',
        dateOfBirth: '28th/03/1998',
        placeOfBirth: "Lagos",
        achievement: "expert",
        investmentExperience: '2years',
        occupation: "developer",
        walletAddress: "dlskd7",
        password: "password123",
        confirmPassword: "password123"
    };
    
    // Call the register function with sample data
    register(
        sample.fullname, 
        sample.username, 
        sample.phoneNumber, 
        sample.email, 
        sample.dateOfBirth, 
        sample.placeOfBirth, 
        sample.achievement, 
        sample.investmentExperience, 
        sample.occupation, 
        sample.walletAddress, 
        sample.password, 
        sample.confirmPassword
    )
};
// to render the test once after each reload
useEffect(()=>{
    testRegistration()
},[]);

//testing Transaction currencies
useEffect(()=>{
    transactionCurrencies()
})

    return(
    <AuthContext.Provider value={{register, userInfo, login, transactionCurrencies}}>
        {children}
    </AuthContext.Provider>
    )
}