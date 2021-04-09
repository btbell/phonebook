import React, { Component } from 'react';
import { AiOutlineDelete, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";

class ListContacts extends Component {
  render() {
    return (
      <div className="mb-3">
        {this.props.contacts.map(item => (
          <div className="pb-list-item" key={item.pbId}>
            <div className="contact-info media-body">
              <div className="d-flex">
                <span className="contact-name">
                  <AiOutlineUser /> {item.name}
                </span>
                <span className="contact-phone ml-auto">
                  <AiOutlinePhone /> {item.phone}
                </span>
                <div className="ml-auto">
                  <button className="contact-delete btn btn-sm btn-danger"
                    onClick={()=> this.props.deleteContact(item)}>
                  <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListContacts;