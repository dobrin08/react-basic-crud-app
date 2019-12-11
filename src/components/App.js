import React, { Component } from 'react';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';
import './css/App.css';

const products = [
  {
    name: 'Product Name 1',
    price: '200'
  },
  {
    name: 'Product Name 2',
    price: '650'
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    }

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();

    this.setState({products});
  }

  getProducts() {
    return this.state.products;
  }

  onAdd(name, price) {
    const products = this.getProducts();

    products.push({name, price});

    this.setState({products});
  }

  onEditSubmit(name, price, originalName) {
    let products = this.getProducts();

    products = products.map(product => {
      if( product.name === originalName ){
        product.name = name;
        product.price = price;
      }

      return product;
    })

    this.setState({products});
  }

  onDelete(name) {
    const products = this.getProducts();
    
    const filteredProducts = products.filter(product => {
      return product.name !== name;
    })

    this.setState({ products: filteredProducts });
  }

  render() {
    return (
      <div className="App">
        <h1 className="my-5">Products manager</h1>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <AddProduct
                onAdd = {this.onAdd}
              />
            </div>

            <div className="col-md-8 mt-4 mt-md-0">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                  {
                    this.state.products.map((product, i) => {
                      return (                        
                        <ProductItem
                          key = {i+1}
                          id = {i+1}
                          {...product}
                          onDelete={this.onDelete}
                          onEditSubmit={this.onEditSubmit}
                        />    
                      )
                    })
                  }
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
