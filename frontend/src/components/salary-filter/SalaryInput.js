import React from 'react'

export default function SalaryInput(props) {

    let searchIcon
    if(props.search) {
        searchIcon = (
            <div className="flex" style={imgStyle}>
                <i className="fa fa-search" />
            </div>
        )
    }

    return (
        <div className="d-flex" style={divStyle}>
            {searchIcon}
            <div className="flex" style={titleStyle}>
                <div style={minSalaryStyle}>Minimum salary</div>
                <div>Enter amount</div>
            </div>
            <div className="flex m-2"><b>$</b></div>
            <div className="flex-fill">
                <input type="text" style={inputStyle} />
            </div>
        </div>
    )
}

const divStyle = {
    borderRadius: '5px',
    border: '1px solid #eee',
}

const imgStyle = {
    backgroundColor: '#eee',
    color: '#666',
    padding: '10px',
    textAlign: 'center',
}

const titleStyle = {
    fontSize: '0.65rem',
    fontWeight: '600',
    padding: '5px 20px',
    minWidth: '120px',
}

const minSalaryStyle = {
    color: '#aaa',
}

const inputStyle = {
    width: '100%',
    height: '100%',
    paddingLeft: '20px',
    border: '0',
}