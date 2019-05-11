import React, {useState} from 'react';
import Cart from './components/Cart';
import SizeSelector from './components/SizeSelector';
import OrderSelector from './components/OrderSelector';
import ProductTable from './components/ProductTable';

const App = ({ products }) => {
  const [selects, setSelects] = useState([{"sku":"123", "qty":1, "price":12.5}, {"sku":"456", "qty":1, "price":12.5}]);

  return (
    <div className="shopping-page">
      <Cart selects={ selects } />
      <SizeSelector />
      <OrderSelector />
      <ProductTable products={ products } />
    </div>
  );
}

export default App;
