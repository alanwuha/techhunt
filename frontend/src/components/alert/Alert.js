import React from 'react'

export default function Alert(props) {
    return (
        <div id={`alert`} role="alert" style={alertStyle}>
            <strong id={`alert-display`}></strong>
        </div>
    )
}

const alertStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '20px',
    zIndex: '99999',
}