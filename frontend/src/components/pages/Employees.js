import React, { Component } from 'react'
import SalaryFilter from '../salary-filter/SalaryFilter'
import EmployeeList from '../employee-list/EmployeeList'
import axios from 'axios'
import queryString from 'query-string'
import ConfirmModal from '../modals/ConfirmModal'

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
                maxSalary: 4000,
                offset: 0,
                limit: 30,
                sort: '+id',
            },
            delete_employee_id: null,
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
        console.log('edit', e.target.id)
    }

    delete = (e) => {
        e.preventDefault()
        const id = e.target.id
        this.setState({
            delete_employee_id: e.target.id
        })
        window.$('#deleteModal').modal('show')
    }

    deleteEmployee = (e) => {
        e.preventDefault()
        const id = e.target.id
        axios.delete(`http://localhost:8000/users/${id}`)
            .then(res => {
                this.getEmployees()
                window.$('#deleteModal').modal('hide')
                window.$('#alert').addClass('show')

                this.timeout = setTimeout(() => {
                    window.$('#alert').removeClass('show')
                }, 2000)
            })
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
                <ConfirmModal id="deleteModal" employee_id={this.state.delete_employee_id} title="Delete Employee" description={`Are you sure you want to delete employee ${this.state.delete_employee_id}?`} delete={this.deleteEmployee} />
                <div id="alert" className="alert alert-success alert-dismissible fade" role="alert" style={alertStyle}>
                    <strong>Success!</strong>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        )
    }
}

const divStyle = {
    padding: '30px 20px',
}

const alertStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '20px',
}

export default Employees
