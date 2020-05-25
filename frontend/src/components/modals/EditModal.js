import React, {Component} from 'react'

export class EditModal extends Component {

    click = (e) => {
        e.preventDefault()
        
        this.props.click(
            {
                id: document.getElementById('edit_employee_id').value,
                login: document.getElementById('edit_employee_login').value,
                name: document.getElementById('edit_employee_name').value,
                salary: document.getElementById('edit_employee_salary').value,
            }
        )
    }

    render() {
        return (
            <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="confirmModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="confirmModalLabel">Edit Employee</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="login" className="col-form-label">Id</label>
                                    <input type="text" disabled className="form-control" id="edit_employee_id" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="login" className="col-form-label">Login</label>
                                    <input type="text" className="form-control" id="edit_employee_login" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name" className="col-form-label">Name</label>
                                    <input type="text" className="form-control" id="edit_employee_name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="salary" className="col-form-label">Salary</label>
                                    <input type="number" min="0" className="form-control" id="edit_employee_salary" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" style={saveBtnStyle} className="btn btn-primary" onClick={this.click}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const saveBtnStyle = {
    width: '100%'
}

export default EditModal