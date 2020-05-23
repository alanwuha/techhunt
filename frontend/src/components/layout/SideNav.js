import React from 'react'
import {Link} from 'react-router-dom';

export default function SideNav() {
    return (
        <div style={navStyle}>
            <div>
                <img alt="" style={imgStyle}/>
                <h4 style={usernameStyle}>Long user name</h4>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Function</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Function</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Function</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const navStyle = {
    backgroundColor: '#243a81',
    color: '#fff',
    padding: '30px 40px',
    position: 'fixed',
    top: '0',
    bottom: '0',
    zIndex: '9999',
}

const imgStyle = {
    borderRadius: '75px',
    width: '100px',
    height: '100px',
    backgroundColor: '#999',
    marginBottom: '20px',
}

const usernameStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '50px',
}