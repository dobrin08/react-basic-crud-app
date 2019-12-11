import React, { Component } from 'react';

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    }

    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onEdit() {
    this.setState({ isEdit: true })
  }

  onEditSubmit(event) {
    event.preventDefault();

    this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);

    this.setState({ isEdit: false })
  }

  onDelete() {
    const {onDelete, name} = this.props;

    onDelete(name);
  }

  render() {
    const { name, price, id } = this.props;

    return (
      <tbody>
        {
          this.state.isEdit
            ? (
              <tr>
                <td colSpan="4">
                  <form onSubmit={this.onEditSubmit} className="form-inline justify-content-center">
                    <input className="form-control" placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                    
                    <input className="form-control" placeholder="Price" ref={priceInput => this.priceInput = priceInput} defaultValue={price}/>
                    
                    <button className="btn btn-success">Save</button>
                  </form>
                </td>
              </tr>
            )
            : (
              <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                  <button onClick={this.onEdit} className="btn btn-warning mr-2">Edit</button>

                  <button onClick={this.onDelete} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            )
        }
      </tbody>
    );
  }
}

export default ProductItem;
