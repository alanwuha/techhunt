import React from 'react'

export default function EmployeeItem(props) {
    return (
        <ul style={ulStyle} className="d-flex flex-column flex-sm-row">
            <li className="flex-shrink-1 mr-5">
                <i className="fa fa-image" style={imgStyle} />
            </li>
            <li className="flex-fill">{props.employee.id}</li>
            <li className="flex-fill">{props.employee.name}</li>
            <li className="flex-fill">{props.employee.login}</li>
            <li className="flex-fill">{props.employee.salary}</li>
            <li className="flex-shrink-1">
                <i className="btn btn-sm fa fa-pencil" style={iconStyle} />
                <i className="btn btn-sm fa fa-trash" style={iconStyle} />
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

const imgStyle = {
    color: '#666',
}

const iconStyle = {
    color: '#666',
}