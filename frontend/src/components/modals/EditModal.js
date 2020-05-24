import React from 'react'

export default function EditModal(props) {
    return (
        <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="confirmModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="confirmModalLabel">Edit Employee {props.employee_id}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="login" className="col-form-label">Login</label>
                                <input type="disabled" className="form-control" id="login" value={props.employee_login} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name" className="col-form-label">Name</label>
                                <input type="disabled" className="form-control" id="name" value={props.employee_name} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="salary" className="col-form-label">Salary</label>
                                <input type="disabled" className="form-control" id="salary" value={props.employee_salary} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={props.click}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
