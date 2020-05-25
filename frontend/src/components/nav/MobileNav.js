import React from 'react'
import {Link} from 'react-router-dom'
import {links} from './Links'

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
                    {
                        links.map(link => {
                            return (
                                <li className="nav-item" style={liStyle} key={link.to} >
                                    <Link style={linkStyle} className="nav-link" to={link.to}>{link.displayText}</Link>
                                </li>
                            )
                        })
                    }
                    <li className="nav-item" style={liStyle}>
                        <a style={linkStyle} 
                            className="nav-link" 
                            href="https://github.com/alanwuha/techhunt" 
                            target="_blank" 
                            rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li className="nav-item" style={liStyle}>
                        <a style={linkStyle} 
                            className="nav-link" 
                            href="http://localhost:8000/users/?minSalary=0&maxSalary=1000000&offset=0&limit=30&sort=+id" 
                            target="_blank" 
                            rel="noopener noreferrer">API</a>
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

const linkStyle = {
    color: '#fff',
    fontWeight: '600'
}