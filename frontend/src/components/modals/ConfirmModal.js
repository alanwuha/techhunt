import React from 'react'

export default function ConfirmModal(props) {
    return (
        <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="confirmModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="confirmModalLabel">{props.title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {props.description}
                </div>
                <div className="modal-footer">
                    <button value={props.value} style={btnStyle} type="button" className="btn btn-danger" onClick={props.click}>Delete</button>
                </div>
                </div>
            </div>
        </div>
    )
}


const btnStyle = {
    width: '100%'
}