import React from 'react'
import FormOpen from '../../components/FormOpen'
import ListGroup from '../../components/ListGroup'
import Aside from '../../shared/Aside'
import Header from '../../shared/Header'
import PageTitle from '../../shared/PageTitle'

export default function openai() {
  return (
    <>
        <Header />
            <Aside />

            <main id="main" className="main">
                <PageTitle name="Configuración de OpenAI"/>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-2">
                            <ListGroup />
                        </div>
                        <div className="col-lg-4">
                            <FormOpen />
                        </div>
                    </div>
                </section>
            </main>
    </>
  )
}