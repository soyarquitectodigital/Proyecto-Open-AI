import React from 'react'
import Link from 'next/link'

export default function Aside() {
    return (
        <>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <Link href="/dashboard">
                            <a className="nav-link collapsed">
                                <i className="bi bi-arrow-down-right-circle-fill"></i>
                                <span>Dashboard</span>
                            </a>
                        </Link>

                    </li>

                    <li className="nav-item">
                        <Link href="/bots">
                            <a className="nav-link collapsed">
                                <i className="bi bi-arrow-down-right-circle-fill"></i>
                                <span>Bots</span>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/users">
                            <a className="nav-link collapsed">
                                <i className="bi bi-arrow-down-right-circle-fill"></i>
                                <span>Usuarios</span>
                            </a>
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link href="/config">
                            <a className="nav-link collapsed">
                                <i className="bi bi-arrow-down-right-circle-fill"></i>
                                <span>Configuraciones</span>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/profile">
                            <a className="nav-link collapsed">
                                <i className="bi bi-arrow-down-right-circle-fill"></i>
                                <span>Mi Perfil</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}
