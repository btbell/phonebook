import React, { Component } from 'react';
import '../css/App.css';

import AddContact from './AddContact';
import SearchContact from './SearchContact';
import ListContacts from './ListContacts';

import {without} from 'lodash';

class App extends Component {

  constructor() {
    super();
    this.state = {
      myContacts: [],
      formDisplay: false,
      orderBy: 'name',
      orderDir: 'asc',
      queryText: '',
      lastIndex: 0
    };
    this.deleteContact = this.deleteContact.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addContact = this.addContact.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.searchContacts = this.searchContacts.bind(this);
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  searchContacts(query) {
    this.setState({queryText: query});
  }

  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir
    });
  }

  addContact(cntct) {
    let tempCntct = this.state.myContacts;
    cntct.pbId = this.state.lastIndex;
    tempCntct.unshift(cntct);
    this.setState({
      myContacts: tempCntct,
      lastIndex: this.state.lastIndex + 1
    });
  }

  deleteContact(cntct) {
    let tempCntct = this.state.myContacts;
    tempCntct = without(tempCntct, cntct);

    this.setState({
      myContacts: tempCntct
    })
  }

  componentDidMount() {
    fetch('./data.json')
    .then(response => response.json())
    .then (result => {
      const cntct = result.map(item => {
        item.pbId = this.state.lastIndex;
        this.setState({lastIndex: this.state.lastIndex + 1});
        return item;
      });
      this.setState({
        myContacts: cntct
      });
    });
  }


  render() {

    let order;
    let filteredContacts = this.state.myContacts;
    if(this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }


    filteredContacts = filteredContacts.sort((a,b) => {
      if (a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy]. toLowerCase()
        ) {
        return -1 * order;
    } else {
      return 1 * order;
      }
    }).filter(eachItem => {
      return(
        eachItem['name']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) ||
        eachItem['phone']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase())
      );
    });


    return (
      <main className="page bg-white" id="phonebook">
          <div className="container">
            <div className="row">
              <div className="col-md-12 banner">
                <div className="container">
                <h1>My UT Phone Book</h1>
                </div>
              </div>
            </div>
          </div>

          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-12 action-list">
                  <div className="container">
                    <AddContact
                      formDisplay={this.state.formDisplay}
                      toggleForm={this.toggleForm}
                      addContact = {this.addContact}
                    />
                    <SearchContact
                      orderBy = {this.state.orderBy}
                      orderDir = {this.state.orderDir}
                      changeOrder={this.changeOrder}
                      searchContacts={this.searchContacts}
                    />
                  </div>
                </div>  
                <div className="col-md-12 pb-list">
                  <div className="container">
                    <ListContacts 
                      contacts={filteredContacts}
                      deleteContact={this.deleteContact} />
                  </div>
                </div> 
              </div>
            </div>
          </section>
      </main>

    );
  }
}

export default App;
