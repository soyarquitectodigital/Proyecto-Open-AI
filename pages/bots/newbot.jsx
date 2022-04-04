import React from 'react'
import { requiredAuth } from '../../hooks/authUser'
import FormNewBot from '../../components/FormNewBot'
import Aside from '../../shared/Aside'
import Header from '../../shared/Header'
import PageTitle from '../../shared/PageTitle'

export default function newbot() {

  requiredAuth()

  return (
    <>
      <Header />
      <Aside />

      <main id="main" className="main">
        <PageTitle name="Creación de nuevo Bot" />
        <section className="section">
        <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <h3>Registra tu bot...</h3>
        </div>
        </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <FormNewBot />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}