import React from 'react'
import DataTableUsers from '../components/DataTableUsers'
import Aside from '../shared/Aside'
import Header from '../shared/Header'
import PageTitle from '../shared/PageTitle'
import { requiredAuth } from '../hooks/authUser'

export default function users() {

  requiredAuth()

  return (
    <>
      <Header />
      <Aside />

      <main id="main" className="main">
        <PageTitle name="Usuarios" />
        <section className="section">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">

            <div className="card">
                
                <div className="card-body">
                    <h5 className="card-title">Usuarios Registrados</h5>
                    <p className="card-text">
                    <DataTableUsers />
                    </p>
                </div>
            </div>
  
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
