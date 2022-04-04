

import React, { useState } from 'react'
import { useStateIfMounted } from 'use-state-if-mounted';
import { supabase } from '../utils/supabaseClient'



export default function FormLogin() {



    const [loading, setLoading] = useStateIfMounted(false);
    const [email, setEamil] = useState('');
    const [password, setPassword] = useState('');




    const handleLogin = async (email, password) => {
        try {
            setLoading(true)
            const { user, error } = await supabase.auth.signIn({
                email,
                password,
            })

            if (error) throw error

        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }




    return (
        <>
            <div className="container">

                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                <div className="d-flex justify-content-center py-4">
                                    <a href="index.html" className="logo d-flex align-items-center w-auto">

                                        <span className="d-none d-lg-block">Proyecto OpenAI</span>
                                    </a>
                                </div>

                                <div className="card mb-3">

                                    <div className="card-body">

                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Ingrese a su cuenta</h5>
                                            <p className="text-center small">Ingrese su correo y contraseña para iniciar sesión</p>
                                        </div>

                                        <form className="row g-3 needs-validation">

                                            <div className="col-12">

                                                <div className="input-group has-validation">

                                                    <input type="text" name="email" value={email} onChange={(e) => setEamil(e.target.value)} placeholder="Correo" className="form-control" id="yourUsername" required />
                                                    <div className="invalid-feedback">Por favor ingrese su correo.</div>
                                                </div>
                                            </div>

                                            <div className="col-12">

                                                <input type="password" name="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" className="form-control" id="yourPassword" required />
                                                <div className="invalid-feedback">Por favor ingrese su contraseña</div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                                    <label className="form-check-label">Recordarme!</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit"
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        handleLogin(email, password)
                                                    }}
                                                    disabled={loading}
                                                >Ingresar</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </>
    )
}
