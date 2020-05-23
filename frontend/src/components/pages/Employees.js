import React, { Component } from 'react'
import SalaryFilter from '../salary-filter/SalaryFilter'
import EmployeeList from '../employee-list/EmployeeList'

export class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [
                {id: 'e0001', login: 'alan', name: 'Alan Tan', salary: '10000.00'},
                {id: 'e0002', login: 'alan', name: 'Alan Tan', salary: '10000.00'},
                {id: 'e0003', login: 'alan', name: 'Alan Tan', salary: '10000.00'},
                {id: 'e0004', login: 'alan', name: 'Alan Tan', salary: '10000.00'},
                {id: 'e0005', login: 'alan', name: 'Alan Tan', salary: '10000.00'},
            ]
        }
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
