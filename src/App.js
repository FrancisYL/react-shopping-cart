import React, {useState} from 'react';
import Cart from './components/Cart';
import SizeSelector from './components/SizeSelector';
import OrderSelector from './components/OrderSelector';
import ProductTable from './components/ProductTable';

const App = ({ products }) => {
  const [selects, setSelects] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <div className="shopping-page">
      <Cart selects={ selects } cartState={ { show, setShow } } />
      <SizeSelector />
      <OrderSelector />
      <ProductTable products={ products } setShow={ setShow } />
    </div>
  );
}

export default App;
