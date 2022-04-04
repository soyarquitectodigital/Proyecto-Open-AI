import React from 'react'
import CardBasic from '../../components/CardBasic'
import Aside from '../../shared/Aside'
import Header from '../../shared/Header'
import PageTitle from '../../shared/PageTitle'
import Link from 'next/link'
import { requiredAuth } from '../../hooks/authUser'

export default function config() {

    requiredAuth()

    return (
        <>
            <Header />
            <Aside />

            <main id="main" className="main">
                <PageTitle name="Configuraciones" />
                <section className="section">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-2">
                            <Link href="/config/openai">
                                <a>
                                    <CardBasic name="Configuración de API OpenAI" description="Realice la configuración de las credenciales para que pueda utilizar la inteligencia artificial de OpenAI" />
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <Link href="/config/twitter">
                                <a>
                                    <CardBasic name="Configuración de API Twitter" description="Configure adecuadamente para que pueda utilizar las caracteristicas del api de Twitter." />
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
