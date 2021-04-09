import React, { Component } from 'react';

class SearchContact extends Component {
	render() {
		return (
      <div className="search-contacts row justify-content-center my-4">
        <div className="col-md-12">
          <div className="input-group">
            <input
              id="SearchContacts"
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Search Appointments"
              onChange={e=> this.props.searchContacts(e.target.value)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-contact dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by: <span className="caret" />
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-left">
                <button className={
                  	'sort-by dropdown-item ' +
                  	(this.props.orderBy === 'name' ? 'active': '')
                }  
                onClick={ e => this.props.changeOrder('name', this.props.orderDir)}
                href="#"
                >
                  Name
                </button>
                <button className={
                  	'sort-by dropdown-item ' +
                  	(this.props.orderBy === 'phone' ? 'active': '')
                }  
                onClick={ e => this.props.changeOrder('phone', this.props.orderDir)}
                href="#"
                >
                  Phone
                </button>
                
                <div role="separator" className="dropdown-divider" />
                <button className={
                  	'sort-by dropdown-item ' +
                  	(this.props.orderDir === 'asc' ? 'active': '')
                }  
                onClick={ e => this.props.changeOrder(this.props.orderBy, 'asc')}
                href="#"
                >
                  Asc
                </button>
                <button className={
                  	'sort-by dropdown-item ' +
                  	(this.props.orderDir === 'desc' ? 'active': '')
                }  
                onClick={ e => this.props.changeOrder(this.props.orderBy, 'desc')}
                href="#"
                >
                  Desc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchContact;