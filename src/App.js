import React, {useState} from 'react';
import Cart from './components/Cart';
import SizeSelector from './components/SizeSelector';
import OrderSelector from './components/OrderSelector';
import ProductTable from './components/ProductTable';

const storage = {
  "12064273040195392": {
    "S": 0,
    "M": 3,
    "L": 1,
    "XL": 2
  },
  "51498472915966370": {
    "S": 0,
    "M": 2,
    "L": 3,
    "XL": 2
  },
  "10686354557628304": {
    "S": 1,
    "M": 2,
    "L": 2,
    "XL": 1
  },
  "11033926921508488": {
    "S": 3,
    "M": 2,
    "L": 0,
    "XL": 1
  },
  "39876704341265610": {
    "S": 2,
    "M": 0,
    "L": 0,
    "XL": 0
  },
  "10412368723880252": {
    "S": 3,
    "M": 2,
    "L": 2,
    "XL": 2
  },
  "8552515751438644": {
    "S": 2,
    "M": 0,
    "L": 0,
    "XL": 2
  },
  "18644119330491310": {
    "S": 3,
    "M": 3,
    "L": 2,
    "XL": 0
  },
  "11854078013954528": {
    "S": 1,
    "M": 1,
    "L": 1,
    "XL": 0
  },
  "876661122392077": {
    "S": 3,
    "M": 1,
    "L": 0,
    "XL": 1
  },
  "9197907543445676": {
    "S": 3,
    "M": 3,
    "L": 1,
    "XL": 2
  },
  "10547961582846888": {
    "S": 2,
    "M": 2,
    "L": 0,
    "XL": 0
  },
  "6090484789343891": {
    "S": 2,
    "M": 0,
    "L": 2,
    "XL": 3
  },
  "18532669286405344": {
    "S": 2,
    "M": 3,
    "L": 0,
    "XL": 2
  },
  "5619496040738316": {
    "S": 1,
    "M": 3,
    "L": 3,
    "XL": 2
  },
  "11600983276356164": {
    "S": 3,
    "M": 3,
    "L": 3,
    "XL": 1
  },
  "27250082398145996": {
    "S": 1,
    "M": 0,
    "L": 0,
    "XL": 2
  }
};

const useSelection = () => {
  const [selected, setSelected] = useState([]);
  const toggleSelected = (x, size, delta) => {
    const newSelected = selected.slice();
    const index = newSelected.findIndex(obj => obj.sku === x.sku && obj.size === size);
    if (index === -1) {
      const y = Object.assign({}, x);
      y.qty=1;
      y.size = size;
      newSelected.push(y);
    }
    else {
      newSelected[index].qty += delta;
    }
    setSelected(newSelected);
  }
  return [selected, toggleSelected];
}

const useInventory = () => {
  const [inventory, setInventory] = useState(storage);
  const toggleInventory = (sku, size, delta) => {
    const newInventory = Object.assign({}, inventory);
    newInventory[sku][size] -= delta;
    setInventory(newInventory);
  }
  return [inventory, toggleInventory];
}

const App = ({ products }) => {
  const [show, setShow] = useState(false);
  const [selected, toggleSelected] = useSelection();
  const [inventory, toggleInventory] = useInventory();

  return (
    <div className="shopping-page">
      <Cart selectedState={ { selected, toggleSelected } }
            toggleInventory={ toggleInventory }
            cartState={ { show, setShow } }
      />
      <SizeSelector />
      <OrderSelector />
      <ProductTable products={ products }
                    inventoryState={ { inventory, toggleInventory } }
                    setShow={ setShow }
                    toggleSelected={ toggleSelected }
      />
    </div>
  );
}

export default App;
