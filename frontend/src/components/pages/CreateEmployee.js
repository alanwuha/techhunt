import React, { Component } from 'react'
import axios from 'axios'
import ShowAlert from '../alert/ShowAlert'

export class CreateEmployee extends Component {

    click = (e) => {
        e.preventDefault()

        const employee = {
            id: document.getElementById('create_employee_id').value,
            login: document.getElementById('create_employee_login').value,
            name: document.getElementById('create_employee_name').value,
            salary: document.getElementById('create_employee_salary').value,
        }

        axios.post(`http://localhost:8000/users/${employee.id}/`, employee)
            .then(res => {
                ShowAlert('success', `Employee ${employee.id} has been created.`)
                this.clearForm()
            }, err => {
                ShowAlert('danger', 'There was an error in creating this employee.')
            })
    }

    clearForm() {
        document.getElementById('create_employee_id').value = ''
        document.getElementById('create_employee_login').value = ''
        document.getElementById('create_employee_name').value = ''
        document.getElementById('create_employee_salary').value = ''
    }

    render() {
        return (
            <div className="container pt-5">
                <h4 style={h4Style}>Create Employee</h4>
                <form style={formStyle}>
                    <div className="form-group">
                        <label htmlFor="login" className="col-form-label">Id</label>
                        <input type="text" className="form-control" id="create_employee_id" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login" className="col-form-label">Login</label>
                        <input type="text" className="form-control" id="create_employee_login" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="col-form-label">Name</label>
                        <input type="text" className="form-control" id="create_employee_name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary" className="col-form-label">Salary</label>
                        <input type="text" className="form-control" id="create_employee_salary" />
                    </div>
                </form>
                <button type="button" className="btn btn-sm btn-primary" onClick={this.click}>Save</button>
            </div>
        )
    }
}

const h4Style = {
    fontWeight: '600',
    marginBottom: '30px',
    fontSize: '1.1rem',
}

const formStyle = {
    marginBottom: '30px'
}

export default CreateEmployee
