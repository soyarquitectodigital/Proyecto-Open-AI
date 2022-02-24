import Link from 'next/link'
import React from 'react'
import DataTableBots from '../../components/DataTableBots'
import Aside from '../../shared/Aside'
import Header from '../../shared/Header'
import PageTitle from '../../shared/PageTitle'

export default function bots() {
  return (
    <>
      <Header />
      <Aside />

      <main id="main" className="main">
        <PageTitle name="Bots" />
        <section className="section">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Bots Configurados <p className="text-end"> <Link href="/bots/newbot"><a><button className="btn btn-primary">Crear Bot</button></a></Link></p></h5>
                  <p className="card-text">
                    <DataTableBots />
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
