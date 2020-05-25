import React from 'react'
import EmployeeItem from './EmployeeItem'
import Pagination from './Pagination'

export default function EmployeeList(props) {
    // Show spinner while waiting for response from API
    let showLoading
    if(props.loading) {
        showLoading = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border spinner-border-sm" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="d-flex flex-column flex-sm-row">
                <h4 style={h4Style}>Employees</h4>
                <div className="ml-3">{showLoading}</div>
                <div className="ml-auto mb-3 d-none d-sm-block">
                    <Pagination  data={props.data} params={props.params} filter={props.filter} />
                </div>
                <div className="mx-auto mb-3 d-sm-none">
                    <Pagination  data={props.data} params={props.params} filter={props.filter} />
                </div>
            </div>
            <ul style={ulStyle} className="d-none d-sm-flex">
                <li className="flex-shrink-1 mr-5">&nbsp;</li>
                <li className="flex-fill">
                    <a href="/" style={btnStyle} type="button" id="id" onClick={props.sort}>Id</a>
                </li>
                <li className="flex-fill">
                    <a href="/" style={btnStyle} type="button" id="name" onClick={props.sort}>Name</a>
                </li>
                <li className="flex-fill">
                    <a href="/" style={btnStyle} type="button" id="login" onClick={props.sort}>Login</a>
                </li>
                <li className="flex-fill">
                    <a href="/" style={btnStyle} type="button" id="salary" onClick={props.sort}>Salary</a>
                </li>
                <li className="flex-shrink-1">Action</li>
            </ul>
            {
                props.data.results.map(e => {
                    return <EmployeeItem key={e.id} employee={e} edit={props.edit} delete={props.delete} />
                })
            }
            <div className="d-flex">
                {showLoading}
                <div className="mx-auto">
                    <Pagination  data={props.data} params={props.params} filter={props.filter} />
                </div>
            </div>
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

const btnStyle = {
    background: '0',
    border: '0',
    color: '#4c5e7d',
    fontWeight: '600',
}