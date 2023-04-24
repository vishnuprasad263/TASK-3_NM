import React from 'react';

class Product extends React.Component {
  render() {
    const {name, price, image} = this.props.product;
    return (
      <div className="product">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price}</p>
        <button>Add to Cart</button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: 'Product 1',
        price: '$20',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        name: 'Product 2',
        price: '$30',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 3,
        name: 'Product 3',
        price: '$40',
        image: 'https://via.placeholder.com/150'
      },
    ]
  };

  render() {
    const {products} = this.state;
    return (
      <div className="app">
        <h1>VINCHDE Website</h1>
        <div className="products">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;