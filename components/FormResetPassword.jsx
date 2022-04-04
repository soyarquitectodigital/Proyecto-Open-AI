import React from 'react'

export default function FormResetPassword() {
  return (
    <>
        <form>
              <div className="row mb-3"> 
                  <div className="col-sm-12">
                    <input type="text" value="" placeholder="Contraseña actual" className="form-control" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-12">
                    <input type="text" value="" placeholder="Nueva Contraseña" className="form-control" />
                  </div>
                </div> 
                <div className="row mb-3">
                  <div className="col-sm-12">
                    <input type="text" value="" placeholder="Confirmar Contraseña" className="form-control" />
                  </div>
                </div>               
                <div className="row mb-3">
                  <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">Actualizar contraseña</button>
                  </div>
                </div>
    </form>
    </>
  )
}
