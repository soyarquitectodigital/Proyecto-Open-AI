import React from 'react'
import DataTable from 'react-data-table-component';


const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Nombre',
        selector: row => row.nombre,
        sortable: true,
    },
    {
        name: 'Correo',
        selector: row => row.correo,
        sortable: true,
    },
    {
        name: 'Telefono',
        selector: row => row.telefono,
        sortable: true,
    }
];

const data = [
    {
        id: 1,
        nombre: 'Oswaldo Gonzalez',
        correo: 'progoswa@gmail.com',
        telefono: '+584123031395'
    },
    {
        id: 2,
        nombre: 'Emauel Arias',
        correo: 'emanuelarias@gmail.com',
        telefono: '+521233232148'
    },
]

export default function DataTableUsers() {
  return (
    <>
        <DataTable
            columns={columns}
            data={data}
            pagination
        />
    </>
  )
}
