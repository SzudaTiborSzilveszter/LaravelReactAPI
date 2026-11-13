import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { userType } from "../types/userType";
import { getUsers } from "../services/userService";

interface UserContextType{
    usersList:userType[],
    load: boolean,
    error: string|null
}

const UserContext=createContext<UserContextType|undefined>(undefined);

export function UserProvider({children}:{children:ReactNode}){
    const [usersList,setUsersList]=useState<userType[]>([])
    const [load,setLoad]=useState<boolean>(true);
    const [error,setError]=useState<string|null>(null);

    useEffect(()=>{
        getUsers().then(data => {
            setUsersList(data)
            setError(null)
        })
        .catch(()=>{
            setError("Nem sikerült betölteni az adatokat!")
        })
        .finally(()=>{
            setLoad(false)
        });
    },[])

    return (
        <UserContext.Provider value= {{usersList, load, error}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext(){
    const context=useContext(UserContext)
    if(context===undefined){
        throw new Error(
            "Csak a usersProvideren belül használható!"
        )
    }
    return context
}