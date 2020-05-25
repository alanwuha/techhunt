import React from 'react'
import {Link} from 'react-router-dom'

export default function MobileNav() {
    return (
        <div style={divStyle} className="d-md-none">

            <div className="container py-2">
                <div className="d-flex">
                    <button style={btnStyle} type="button" className="btn" data-toggle="collapse" href="#nav" aria-expanded="false" aria-controls="nav">
                        <i className="fa fa-bars" />
                    </button>
                    <span className="ml-auto my-auto"><b>Long user name</b></span>
                </div>
            </div>

            <div className="collapse hide" id="nav">
                <ul className="nav flex-column" style={ulStyle}>
                    <li className="nav-item" style={liStyle}>
                        <Link style={aStyle} className="nav-link" to="/">Employees</Link>
                    </li>
                    <li className="nav-item" style={liStyle}>
                        <Link style={aStyle} className="nav-link" to="/upload">Upload</Link>
                    </li>
                    <li className="nav-item" style={liStyle}>
                        <Link style={aStyle} className="nav-link" to="/create">Create</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

const divStyle = {
    backgroundColor: '#243a81',
    color: '#fff',
}

const btnStyle = {
    color: '#fff',
    fontSize: '1.2rem'
}

const ulStyle = {
    color: '#fff',
    textAlign: 'center',
}

const liStyle = {
    backgroundColor: '#007fff'
}

const aStyle = {
    color: '#fff',
    fontWeight: '600'
}