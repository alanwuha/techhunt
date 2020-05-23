import React, {Component} from 'react'

export class SalaryInput extends Component {

    constructor(props) {
        super(props)
        this.timeout = 0
    }

    showSearchIcon() {
        if(this.props.searchIcon) {
            return (
                <div className="flex" style={imgStyle}>
                    <i className="fa fa-search" />
                </div>
            )
        }
    }

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
                    <div style={minSalaryStyle}>Minimum salary</div>
                    <div>Enter amount</div>
                </div>
                <div className="flex m-2"><b>$</b></div>
                <div className="flex-fill">
                    <input 
                        type="text"
                        style={inputStyle}
                        // defaultValue={this.props.salary}
                        // ref={(input) => this.input = input}
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
    minWidth: '120px',
}

const minSalaryStyle = {
    color: '#aaa',
}

const inputStyle = {
    width: '100%',
    height: '100%',
    paddingLeft: '20px',
    border: '0',
}

export default SalaryInput