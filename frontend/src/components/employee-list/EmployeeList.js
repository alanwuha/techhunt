import React from 'react'
import EmployeeItem from './EmployeeItem'

export default function EmployeeList(props) {
    return (
        <div>
            <h4 style={h4Style}>Employees</h4>

            <ul style={ulStyle} className="d-none d-sm-flex">
                <li className="flex-fill"></li>
                <li className="flex-fill">Id</li>
                <li className="flex-fill">Name</li>
                <li className="flex-fill">Login</li>
                <li className="flex-fill">Salary</li>
                <li className="flex-shrink-1">Action</li>
            </ul>

            {
                props.employees.map(e => {
                    return <EmployeeItem key={e.id} employee={e} />
                })
            }
        </div>
    )
}

const h4Style = {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginLeft: '10px',
    marginBottom: '30px',
}

const ulStyle = {
    listStyle: 'none',
    padding: '0px 20px',
    fontWeight: '600',
}