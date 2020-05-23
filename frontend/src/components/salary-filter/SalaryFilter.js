import React from 'react'
import SalaryInput from './SalaryInput'

export default function SalaryFilter() {
    return (
        <div className="d-flex flex-column flex-sm-row" style={divStyle}>
            <div className="flex mb-2">
                <SalaryInput search="true" />
            </div>
            <div className="flex mx-3 d-none d-sm-flex" style={spanStyle}>-</div>
            <div className="flex">
                <SalaryInput />
            </div>
        </div>
    )
}

const divStyle = {
    marginBottom: '30px',
}

const spanStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
}