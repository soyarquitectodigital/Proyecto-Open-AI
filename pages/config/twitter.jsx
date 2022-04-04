import React from 'react'
import FormTwitter from '../../components/FormTwitter'
import ListGroup from '../../components/ListGroup'
import { requiredAuth } from '../../hooks/authUser'
import Aside from '../../shared/Aside'
import Header from '../../shared/Header'
import PageTitle from '../../shared/PageTitle'


export default function twitter() {

    requiredAuth()

  return (
    <>
        <Header />
            <Aside />

            <main id="main" className="main">
                <PageTitle name="Configuración de Twitter"/>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-2">
                            <ListGroup />
                        </div>
                        <div className="col-lg-4">
                            <FormTwitter />
                        </div>
                    </div>
                </section>
            </main>
    </>
  )
}
