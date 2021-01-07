import React from 'react'
import Sidebar from '../../../components/side-bar/side-bar'
import CrudTable from '../../../components/crud-table/crud-table'

export default function Categories() {
    return (
        <div class="page-wrapper chiller-theme toggled">
        <Sidebar />
        <main className="page-content">
            <h1> Categories Management !! </h1>
            <CrudTable />
      </main>
    </div>
    )
}
