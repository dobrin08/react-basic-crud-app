import React, { Component } from 'react';

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
  	event.preventDefault();

  	this.props.onAdd(this.nameInput.value, this.priceInput.value)

  	this.nameInput.value = '';
  	this.priceInput.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Add product</h3>

        <div className="form-group">
          <input className="form-control" placeholder="Name" ref={nameInput => this.nameInput = nameInput}/>
        </div>
        
        <div className="form-group">
          <input className="form-control" placeholder="Price" ref={priceInput => this.priceInput = priceInput}/>
        </div>

        <div className="form-group">
          <button className="btn btn-success btn-block">Add</button>
        </div>
      </form>
    );
  }
}

export default AddProduct;
