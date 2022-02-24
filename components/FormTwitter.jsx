import React from 'react'

export default function FormTwitter() {
  return (
    <>
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">Ingreso de credenciales</h5>

             
              <form>
              <div className="row mb-3">
                  
                  <div className="col-sm-12">
                    <input type="text" placeholder="Nombre de Cuenta" className="form-control" />
                  </div>
                </div>
                <div className="row mb-3">
                  
                  <div className="col-sm-12">
                    <input type="text" placeholder="API Key" className="form-control" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-12">
                    <input type="email" placeholder="API Key Secret" className="form-control" />
                  </div>
                </div>
                <div className="row mb-3">
                  
                  <div className="col-sm-12">
                    <input type="password" placeholder="Bearer Token" className="form-control" />
                  </div>
                </div>
                
                <div className="row mb-3">
                  
                  <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">Registrar Credenciales</button>
                  </div>
                </div>

              </form>

            </div>
          </div>
    </>
  )
}
