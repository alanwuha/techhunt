import React from 'react'

export default function Alert(props) {
    return (
        <div id={`alert-${props.status}`} className={`alert alert-${props.status} alert-dismissible fade`} role="alert" style={alertStyle}>
            <strong>{props.displayText}</strong>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

const alertStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '20px',
}