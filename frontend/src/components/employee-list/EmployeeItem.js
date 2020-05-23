import React from 'react'

export default function EmployeeItem(props) {
    return (
        <ul style={ulStyle} className="d-flex flex-column flex-sm-row">
            <li className="flex-fill">
                <i className="fa fa-image" />
            </li>
            <li className="flex-fill">{props.employee.id}</li>
            <li className="flex-fill">{props.employee.name}</li>
            <li className="flex-fill">{props.employee.login}</li>
            <li className="flex-fill">{props.employee.salary}</li>
            <li className="flex-shrink-1">
                <i className="btn btn-sm fa fa-pencil" />
                <i className="btn btn-sm fa fa-trash" />
            </li>
        </ul>
    )
}

const ulStyle = {
    listStyle: 'none',
    borderRadius: '5px',
    backgroundColor: '#eee',
    padding: '20px',
}