import React, { Component } from 'react'
import SalaryFilter from '../salary-filter/SalaryFilter'
import EmployeeList from '../employee-list/EmployeeList'
import axios from 'axios'
import queryString from 'query-string'

export class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            params: {
                'minSalary': 0,
                'maxSalary': 4000,
                'offset': 0,
                'limit': 30,
                'sort': 'id',
            },
        }
    }

    componentDidMount() {
        this.getEmployees()

        // Param values
        let values = queryString.parse(this.props.location.search, {arrayFormat: 'comma', parseNumbers: true})
        console.log(values)

        this.setState({
            params: values
        })
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

        let query
        if(!this.props.location.search) {
            query = '?' + Object.keys(this.state.params).map(key => key + '=' + this.state.params[key]).join('&')
            
            this.props.history.replace({
                search: query
            });
        } else {
            query = this.props.location.search
        }

        axios.get(`http://localhost:8000/users/${query}`)
            .then(res => {
                this.setState({
                    is_loading: false,
                    employees: res.data.results
                })
            })
    }

    filter = (param, value) => {
        let query = queryString.parse(this.props.location.search, {arrayFormat: 'comma'})
        query[param] = value

        this.props.history.replace({
            search: queryString.stringify(query, {arrayFormat: 'comma'})
        })
    }

    render() {
        return (
            <div className="container" style={divStyle}>
                <SalaryFilter filter={this.filter} params={this.state.params} />
                <EmployeeList employees={this.state.employees} loading={this.state.is_loading} />
            </div>
        )
    }
}

const divStyle = {
    padding: '30px 20px',
}

export default Employees
