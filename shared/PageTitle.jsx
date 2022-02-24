import React from 'react'
import Link from 'next/link'

export default function PageTitle({name}) {
  return (
    <>
    <div className="pagetitle">
      <h1>{name}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link href="/dashboard"><a>Home</a></Link></li>
          <li className="breadcrumb-item active">{name}</li>
        </ol>
      </nav>
    </div>
    </>
  )
}
