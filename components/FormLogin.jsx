import React from 'react'

export default function FormLogin() {
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
                                                    
                                                    <input type="text" name="username" placeholder="Correo" className="form-control" id="yourUsername" required />
                                                        <div className="invalid-feedback">Por favor ingrese su correo.</div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                
                                                <input type="password" name="passwword" placeholder="Contraseña" className="form-control" id="yourPassword" required />
                                                    <div className="invalid-feedback">Por favor ingrese su contraseña</div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                                        <label className="form-check-label">Recordarme!</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit">Ingresar</button>
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
