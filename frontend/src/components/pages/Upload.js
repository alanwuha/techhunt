import React, { Component } from 'react'
import bsCustomFileInput from 'bs-custom-file-input'
import axios, {post} from 'axios'
import ShowAlert from '../alert/ShowAlert'

export class Upload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            is_loading: false,
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }

    componentDidMount = () => {
        bsCustomFileInput.init()
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.setState({
            is_loading: true
        })

        this.fileUpload(this.state.file)
            .then(res => {
                document.querySelector('form').reset()
                this.setState({
                    file: null,
                    is_loading: false,
                })
                ShowAlert('success', 'File uploaded!')
            }, err => {
                this.setState({
                    is_loading: false,
                })
                ShowAlert('danger', 'Upload failed.')
            })
    }

    onChange = (e) => {
        this.setState({
            file: e.target.files[0]
        })
    }

    fileUpload = (file) => {
        const url = 'http://localhost:8000/users/upload'
        const formData = new FormData()
        formData.append('file', file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config)
    }

    showLoading() {
        if(this.state.is_loading) {
            return (
                <div className="spinner-border spinner-border-sm ml-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }
    }

    renderSubmitButton() {
        if(this.state.is_loading) {
            return <button type="submit" disabled className="btn btn-sm btn-primary">Upload</button>
        } else {
            return <button type="submit" className="btn btn-sm btn-primary">Upload</button>
        }
    }

    render() {
        return (
            <div className="container pt-5">
            <h4 style={h4Style}>Upload</h4>
            <form onSubmit={this.onFormSubmit}>
                <div className="custom-file mb-4">
                    <input type="file" className="custom-file-input" id="customFile" onChange={this.onChange} />
                    <label className="custom-file-label" htmlFor="customFile">Choose file...</label>
                </div>
                {this.renderSubmitButton()}
                {this.showLoading()}
            </form>
        </div>
        )
    }
}

const h4Style = {
    fontWeight: '600',
    marginBottom: '30px',
    fontSize: '1.1rem',
}

export default Upload
