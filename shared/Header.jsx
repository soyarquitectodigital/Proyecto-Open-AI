import React from 'react'
import { Dropdown } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import pic from '../public/assets/img/profile-img.jpg'

export default function header() {
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">

                        <span className="d-none d-lg-block">Proyecto OpenAI</span>
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

                        <li className="nav-item d-block d-lg-none">
                            <a className="nav-link nav-icon search-bar-toggle " href="#">
                                <i className="bi bi-search"></i>
                            </a>
                        </li>


                        <li className="nav-item dropdown pe-3">

                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <a className="nav-link nav-profile">
                                        <Image src={pic} alt="Profile" className="rounded-circle" />
                                    </a>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                
                                    <Dropdown.Item><Link href="/profile">Perfil</Link></Dropdown.Item>
                         
                                    <Dropdown.Item>Salir</Dropdown.Item>
                        
                                </Dropdown.Menu>
                            </Dropdown>

                        </li>

                    </ul>
                </nav>

            </header>
        </>
    )
}
