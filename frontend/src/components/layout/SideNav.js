import React from 'react'
import {Link} from 'react-router-dom';
import { links } from './Links'

export default function SideNav() {
    return (
        <div style={navStyle}>
            <div>
                <img alt="" style={imgStyle} />
                <h4 style={usernameStyle}>Long user name</h4>
                <ul className="nav flex-column">
                    {
                        links.map(link => {
                            return (
                                <li className="nav-item" key={link.to}>
                                    <Link className="nav-link" to={link.to} style={linkStyle}>{link.displayText}</Link>
                                </li>
                            )
                        })
                    }
                    <li className="nav-item">
                        <a style={linkStyle} 
                            className="nav-link" 
                            href="https://github.com/alanwuha/techhunt" 
                            target="_blank" 
                            rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li className="nav-item">
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

const navStyle = {
    color: '#fff',
    padding: '30px 30px',
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
    marginBottom: '30px',
}

const usernameStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '50px',
}

const linkStyle = {
    color: '#fff'
}