import React from 'react'
import {Link} from 'react-router-dom'

export default function MobileNav() {
    return (
        <div className="container pt-3 d-md-none">
          <button type="button" className="btn" data-toggle="collapse" href="#nav" aria-expanded="true" aria-controls="nav">
            <i className="fa fa-bars" />
          </button>
          <div className="collapse" id="nav">
          <h4>Long user name</h4>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/upload">Upload</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create">Create</Link>
                    </li>
                </ul>
          </div>
        </div>
    )
}
