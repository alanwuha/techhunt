import React from 'react'

export default function Alert(props) {
    return (
        <div className="container-fluid" style={divStyle}>
            <div id={`alert`} role="alert" style={alertStyle}>
                <strong id={`alert-display`}></strong>
            </div>
        </div>
    )
}

const divStyle = {
    position: 'fixed',
    bottom: '0',
    zIndex: '99999',
  }

const alertStyle = {
    zIndex: '99999',
    textAlign: 'center',
    maxWidth: '500px',
    margin: '0 auto 20px',
}