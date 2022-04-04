import { createContext, useEffect } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import { supabase } from '../utils/supabaseClient'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [session, setSession] = useStateIfMounted(null)
    const [user, setUser] = useStateIfMounted(null)

    useEffect(() => {
      const session = supabase.auth.session()
      setSession(session)
      setUser(session?.user ?? null)

      const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
      })

      return () => {
        authListener.unsubscribe()
      }
    }, [])

    const value = {
        session,
        user
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
    
}