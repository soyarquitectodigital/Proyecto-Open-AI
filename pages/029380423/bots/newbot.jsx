import React from 'react'
import FormNewBot from '../../components/FormNewBot'
import Aside from '../../shared/Aside'
import Header from '../../shared/Header'
import PageTitle from '../../shared/PageTitle'

export default function newbot() {
  return (
    <>
      <Header />
      <Aside />

      <main id="main" className="main">
        <PageTitle name="Creación de nuevo Bot" />
        <section className="section">
        <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <h3>Registra tu bot...</h3>
        </div>
        </div>
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <FormNewBot />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}