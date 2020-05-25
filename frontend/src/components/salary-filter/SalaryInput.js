import React, {Component} from 'react'

export class SalaryInput extends Component {

    constructor(props) {
        super(props)
        this.timeout = 0
    }

    // To show search icon for MinimumSalary input
    showSearchIcon() {
        if(this.props.searchIcon) {
            return (
                <div className="flex" style={imgStyle}>
                    <i className="fa fa-search" />
                </div>
            )
        }
    }

    // Perform filter only after user has stopped typing for some time
    onChange = (e) => {
        const salary = e.target.value
        
        if(this.timeout) {
            clearTimeout(this.timeout)
        }

        this.timeout = setTimeout(() => {
            this.props.filter(this.props.param, salary)
        }, 300)
    }

    render() {
        return (
            <div className="d-flex" style={divStyle}>
                {this.showSearchIcon()}
                <div className="flex" style={titleStyle}>
                    <div style={salaryStyle}>{this.props.salaryText}</div>
                    <div>Enter amount</div>
                </div>
                <div className="flex m-2"><b>$</b></div>
                <div className="flex-fill">
                    <input 
                        type="number"
                        min="0"
                        style={inputStyle}
                        onChange={this.onChange} />
                </div>
            </div>
        )
    }
}

const divStyle = {
    borderRadius: '5px',
    border: '1px solid #eee',
}

const imgStyle = {
    backgroundColor: '#eee',
    color: '#666',
    padding: '10px',
    textAlign: 'center',
}

const titleStyle = {
    fontSize: '0.65rem',
    fontWeight: '600',
    padding: '5px 20px',
    minWidth: '130px',
}

const salaryStyle = {
    color: '#aaa',
}

const inputStyle = {
    width: '100%',
    height: '100%',
    paddingLeft: '20px',
    border: '0',
}

export default SalaryInput