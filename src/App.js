import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';

function App() {
  const { products } = data;
  const [cartItem, setCartItem] = useState([]);


  const onAdd = (product) => {
    const exist = cartItem.find(x => x.id === product.id);
    if (exist) {
      setCartItem(cartItem.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  }

  const onRemove = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItem(cartItem.filter((x) => x.id !== product.id))
    } else {
      setCartItem(cartItem.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  }


  return (
    <div className="App">
      <Header countCartItem={cartItem.length}></Header>
      <div className='row'>
        <Main onAdd={onAdd} products={products}></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItem={cartItem}></Basket>
      </div>
    </div>
  );
}

export default App;
