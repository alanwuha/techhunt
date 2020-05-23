import React, { Component } from 'react'
import SalaryFilter from '../salary-filter/SalaryFilter'
import EmployeeList from '../employee-list/EmployeeList'
import axios from 'axios'

export class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        this.getEmployees()
    }

    getEmployees() {
        this.setState({
            is_loading: true,
        })
        axios.get(`http://localhost:8000/users/${this.props.location.search}`)
            .then(res => {
                this.setState({
                    is_loading: false,
                    employees: res.data.results
                })
            })
    }

    render() {
        return (
            <div className="container" style={divStyle}>
                <SalaryFilter />
                <EmployeeList employees={this.state.employees} />
            </div>
        )
    }
}

const divStyle = {
    padding: '30px 20px',
}

export default Employees
