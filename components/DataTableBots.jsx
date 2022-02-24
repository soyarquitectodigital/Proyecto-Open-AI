import React from 'react'
import DataTable from 'react-data-table-component';


const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Nombre del Bot',
        selector: row => row.nombre,
        sortable: true,
    },
    {
        name: 'Descripcion',
        selector: row => row.descripción,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        nombre: 'Bot 1',
        descripción: 'Bot para la gestion de cuenta de progoswa',
    },
    {
        id: 2,
        nombre: 'Bot 2',
        descripción: 'Bot de prueba',
    },
]

export default function DataTableBots() {
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
