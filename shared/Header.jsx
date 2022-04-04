import React, { useContext, useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function header() {

   

    const handleLogout = async () => {
        try {
           
            const { error } = await supabase.auth.signOut()

            if (error) throw error
                 
        } catch (error) {
            alert(error.error_description || error.message)
        }
    }

    const goProfile = () => {
        const router = useRouter()
        router.push('/dashboard')
    }

    

    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">

                        <span className="d-none d-lg-block">Proyecto OpenAI</span>
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

            
                        <li className="nav-item dropdown pe-3">


                        <button className="btn btn-danger" onClick={handleLogout}>Salir</button>

                        

                        </li>

                    </ul>
                </nav>

            </header>
        </>
    )
}
