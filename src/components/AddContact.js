import React, { Component } from 'react';

import { AiOutlineUserAdd } from "react-icons/ai";

class AddContact extends Component {

	constructor() {
		super();
		this.state = {
			name: '',
			phone: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd(e) {
		e.preventDefault();
		let tempCntct = {
			name: this.state.name,
			phone: this.state.phone
		};

		this.props.addContact(tempCntct);

		this.setState({
			name: '',
			phone: ''
		});
		this.props.toggleForm();
	}

	handleChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});

	}

	render() {
		return (
			      <div
        className={
          'card textcenter mt-3 ' +
          (this.props.formDisplay ? '' : 'add-contact')
        }
      >
        		<div className="card-header" 
        		onClick={this.props.toggleForm}
        		>
        			<AiOutlineUserAdd /> Add Contact
        		</div>

        		<div className="card-body">
          		<form id="cntctForm" noValidate onSubmit={this.handleAdd}>
            		<div className="form-group form-row">
              		<label
                		className="col-md-2 col-form-label text-md-left"
                		htmlFor="name"
                		readOnly
              >
                Contact Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Contact's Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-left"
                htmlFor="phone"
              >
                Contact Phone
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Contact's Phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-contact d-block ml-auto"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

		);
	}
}

export default AddContact;