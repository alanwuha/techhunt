import React, {Component} from 'react'

export class Pagination extends Component {
    constructor(props) {
        super(props)
    }

    // Compute limit
    getLimit() {
        if(this.props.params.offset + this.props.params.limit - 1 < this.props.data.count) {
            return this.props.params.offset + this.props.params.limit - 1
        } else {
            return this.props.data.count - 1
        }
    }

    getBtnStyle(offset) {
        return (offset !== null) ? activeBtnStyle : disabledBtnStyle
    }

    click = (e) => {
        this.props.filter('offset', e.target.id)
    }

    render() {
        return (
            <div className="d-flex align-items-center">
                <button type="button" id={this.props.data.previous_offset} onClick={this.click} style={this.getBtnStyle(this.props.data.previous_offset)}>
                    <i id={this.props.data.previous_offset} className="fa fa-chevron-left" />
                </button>
                <span className="mx-3" style={spanStyle}>Showing {this.props.params.offset} to {this.getLimit()} of {this.props.data.count} records</span>
                <button type="button" id={this.props.data.next_offset} onClick={this.click} style={this.getBtnStyle(this.props.data.next_offset)}>
                    <i id={this.props.data.next_offset} className="fa fa-chevron-right" />
                </button>
            </div>
        )
    }
}

const activeBtnStyle = {
    backgroundColor: '#ddd',
    border: '0',
    padding: '5px 10px',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: '#4c5e7d',
}

const disabledBtnStyle = {
    display: 'none',
}

const spanStyle = {
    fontWeight: '600',
}

export default Pagination