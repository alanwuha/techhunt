import React from 'react'
import SalaryInput from './SalaryInput'

export default function SalaryFilter(props) {
    return (
        <div className="d-flex flex-column flex-sm-row" style={divStyle}>
            <div className="flex-fill mb-2">
                <SalaryInput param="minSalary" salaryText="Minimum Salary" searchIcon="true" filter={props.filter} salary={props.params.minSalary} />
            </div>
            <div className="flex mx-3 d-none d-sm-flex" style={spanStyle}>-</div>
            <div className="flex-fill">
                <SalaryInput param="maxSalary" salaryText="Maximum Salary" filter={props.filter} salary={props.params.maxSalary} />
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