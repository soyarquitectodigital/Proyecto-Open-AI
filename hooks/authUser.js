import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { UserContext } from '../context/UserContext'

export const requiredAuth = () => {
    const { user } = useUser()
    const router = useRouter()

    useEffect(() => {
      if(user == null){
        router.push('/')
      }
    }, [user, router]) 
}

export const authRedirect = () => {
    const { user } = useUser()
    const router = useRouter()

    useEffect(() => {
      if(user){
        router.push('/dashboard')
      }
    }, [user, router]) 
}

export const useUser = () => {

    const context = useContext(UserContext)
    console.log(context);
    if (context === undefined){
        throw new Error('Usuario fuera del contexto')
    }
    return context
}