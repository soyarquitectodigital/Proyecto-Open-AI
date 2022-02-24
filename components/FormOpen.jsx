import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { setOpenKeys } from '../pages/api/openaiKeys';

export default function FormTwitter() {

  const [nombre, setNombre] = useState('');
  const [bearer_token, setBearerToken] = useState('');

  const queryClient = useQueryClient();

  const {mutate, error, isLoading} = useMutation(setOpenKeys, {
    onSuccess: () => {
      queryClient.invalidateQueries(["openKeys"]);
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate({nombre, bearer_token});
    console.log(nombre + " " + bearer_token);
  }


  return (
    <>
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">Ingreso de credenciales</h5>   
              <form onSubmit={handleSubmit}>
              <div className="row mb-3"> 
                  <div className="col-sm-12">
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre de Cuenta" className="form-control" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-12">
                    <input type="text" value={bearer_token} onChange={(e) => setBearerToken(e.target.value)} placeholder="API Key" className="form-control" />
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
