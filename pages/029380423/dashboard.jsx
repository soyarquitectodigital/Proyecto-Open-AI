import React from 'react'
import CardDasboard from '../components/CardDasboard'
import Aside from '../shared/Aside'
import Header from '../shared/Header'
import PageTitle from '../shared/PageTitle'

export default function dashboard() {
    return (
        <>
            <Header />
            <Aside />

            <main id="main" className="main">
                <PageTitle name="Dashboard"/>
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-4">
                            <CardDasboard name="Usuarios" value="2"/>
                        </div>
                        <div className="col-lg-4">
                            <CardDasboard name="Bots" value="2"/>
                        </div>
                        <div className="col-lg-4">
                            <CardDasboard name="Cuentas Twitter" value="1"/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
