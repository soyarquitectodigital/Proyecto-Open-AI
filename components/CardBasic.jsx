import React from 'react'
import Image from 'next/image'
import pic from '../public/configapi.png'

export default function CardBasic({name, description}) {
    return (
        <>
            <div className="card">
                <Image src={pic} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </>
    )
}
