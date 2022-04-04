import React from 'react'
import CardUser from '../components/CardUser'
import TabProfile from '../components/TabProfile'
import { requiredAuth } from '../hooks/authUser'
import Aside from '../shared/Aside'
import Header from '../shared/Header'
import PageTitle from '../shared/PageTitle'

export default function profile() {

    requiredAuth()

    return (
        <>
            <Header />
            <Aside />

            <main id="main" className="main">
                <PageTitle name="Perfil" />
                <section className="section">
                    <div className="row">
                        <div className="col-lg-4">
                            <CardUser />
                        </div>
                        <div className="col-lg-8">
                            <TabProfile />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}