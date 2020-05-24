import React, { Component } from 'react'
import SalaryFilter from '../salary-filter/SalaryFilter'
import EmployeeList from '../employee-list/EmployeeList'
import axios from 'axios'
import queryString from 'query-string'
import ConfirmModal from '../modals/ConfirmModal'
import EditModal from '../modals/EditModal'
import Alert from '../alerts/Alert'

export class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            is_loading: true,
            data: {
                count: 0,
                next_offset: null,
                previous_offset: null,
                results: [],
            },
            params: {
                minSalary: 0,
                maxSalary: 100000,
                offset: 0,
                limit: 30,
                sort: '+id',
            },
            delete_employee_id: '',
        }
    }

    componentDidMount() {
        this.getEmployees()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params !== this.props.match.params) {
            this.getEmployees()
        }
    }

    getEmployees() {
        this.setState({
            is_loading: true,
        })

        // Set query params using default values of they don't exist in url else extract values from url
        let query
        if(!this.props.location.search) {
            query = '?' + Object.keys(this.state.params).map(key => key + '=' + this.state.params[key]).join('&')
            
            this.props.history.replace({
                search: query
            });
        } else {
            query = this.props.location.search
        }
        query = query.replace('%2B', '+')

        // Update state
        let values = queryString.parse(this.props.location.search, {arrayFormat: 'comma', parseNumbers: true})
        this.setState({
            params: values
        })

        // API call
        axios.get(`http://localhost:8000/users/${query}`)
            .then(res => {
                this.setState({
                    is_loading: false,
                    data: res.data
                })
            })
    }

    // Generic filter function for all fields except sort
    filter = (param, value) => {
        let query = queryString.parse(this.props.location.search, {arrayFormat: 'comma', parseNumbers: true})
        query[param] = value

        // Replace url with new param values
        this.props.history.replace({
            search: queryString.stringify(query, {arrayFormat: 'comma'})
        })
    }

    sort = (e) => {
        e.preventDefault()

        let query = queryString.parse(this.props.location.search, {arrayFormat: 'comma', parseNumbers: true})
        
        // Replace sort value in query
        if(query.sort.replace('+', '').replace(' ', '') === e.target.id) {
            query.sort = '-' + e.target.id
        } else {
            query.sort = '+' + e.target.id
        }

        // Replace url with new param values
        this.props.history.replace({
            search: queryString.stringify(query, {arrayFormat: 'comma'})
        })
    }

    edit = (e) => {
        e.preventDefault()

        // Get employee
        const id = e.target.id
        const employee = this.state.data.results.find(e => e.id === id)

        // Update form values
        document.getElementById('edit_employee_id').value = employee.id
        document.getElementById('edit_employee_login').value = employee.login
        document.getElementById('edit_employee_name').value = employee.name
        document.getElementById('edit_employee_salary').value = employee.salary

        // Show edit modal
        window.$('#editModal').modal('show')
    }

    delete = (e) => {
        e.preventDefault()
        
        // Update delete_employee_id
        this.setState({
            delete_employee_id: e.target.id
        })

        // Show delete modal
        window.$('#deleteModal').modal('show')
    }

    editEmployee = (employee) => {
        // PATCH
        axios.patch(`http://localhost:8000/users/${employee.id}/`, employee)
            .then(res => {
                // Update list of employees
                this.getEmployees()

                // Hide modal
                window.$('#editModal').modal('hide')

                // Show alert
                this.showAlert()
            })
    }

    deleteEmployee = (e) => {
        e.preventDefault()

        // Delete API
        const value = e.target.value
        axios.delete(`http://localhost:8000/users/${value}`)
            .then(res => {
                console.log(res.status)
                // Update list of employees
                this.getEmployees()

                // Hide modal
                window.$('#deleteModal').modal('hide')

                // Show alert
                this.showAlert()
            })
    }

    showAlert() {
        // Show alert
        window.$('#alert').addClass('show')

        // Timeout to hide alert
        this.timeout = setTimeout(() => {
            window.$('#alert').removeClass('show')
        }, 2000)
    }

    render() {
        return (
            <div className="container" style={divStyle}>

                <SalaryFilter filter={this.filter} params={this.state.params} />

                <EmployeeList 
                    data={this.state.data} 
                    params={this.state.params} 
                    sort={this.sort} 
                    edit={this.edit} 
                    delete={this.delete} 
                    filter={this.filter} 
                    loading={this.state.is_loading} />

                <ConfirmModal 
                    id="deleteModal" 
                    value={this.state.delete_employee_id} 
                    title="Delete Employee" 
                    description={`Are you sure you want to delete employee ${this.state.delete_employee_id}?`} 
                    click={this.deleteEmployee} />

                <EditModal 
                    id="editModal" 
                    click={this.editEmployee} />

                <Alert status="success" displayText="Success!" />

            </div>
        )
    }
}

const divStyle = {
    padding: '30px 20px',
}

export default Employees
