import React, {useState} from 'react';
import Cart from './components/Cart';
import SizeSelector from './components/SizeSelector';
import OrderSelector from './components/OrderSelector';
import ProductTable from './components/ProductTable';

const useSelection = () => {
  const [selected, setSelected] = useState([]);
  const toggle = (x, delta) => {
    const newSelected = selected.slice();
    const index = newSelected.findIndex(obj => obj.sku === x.sku);
    if (index === -1) {
      x.qty=1;
      newSelected.push(x);
    }
    else {
      newSelected[index].qty += delta;
    }
    setSelected(newSelected);
  }
  return [selected, toggle];
}

const App = ({ products }) => {
  const [show, setShow] = useState(false);
  const [selected, toggle] = useSelection();

  return (
    <div className="shopping-page">
      <Cart selectedState={ { selected, toggle } }
            cartState={ { show, setShow } }
      />
      <SizeSelector />
      <OrderSelector />
      <ProductTable products={ products }
                    setShow={ setShow }
                    toggle={ toggle }
      />
    </div>
  );
}

export default App;
