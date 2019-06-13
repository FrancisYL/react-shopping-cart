import React, {useState, useEffect} from 'react';
import Cart from './components/Cart';
import SizeSelector from './components/SizeSelector';
import OrderSelector from './components/OrderSelector';
import ProductTable from './components/ProductTable';
import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyD-wpCPVpq6U6hAq4WwzVSpNDdYEoWrxCQ",
  authDomain: "react-shopping-cart-1a504.firebaseapp.com",
  databaseURL: "https://react-shopping-cart-1a504.firebaseio.com",
  projectId: "react-shopping-cart-1a504",
  storageBucket: "react-shopping-cart-1a504.appspot.com",
  messagingSenderId: "1017712100265",
  appId: "1:1017712100265:web:1b0851942d678cb1"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const useSelection = () => {
  const [selection, setSelection] = useState([]);
  const toggleSelection = (x, size, delta) => {
    const newSelected = selection.slice();
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
    setSelection(newSelected);
  }
  return [selection, toggleSelection];
}

const App = ({ products }) => {
  const [show, setShow] = useState(false);
  const [selection, toggleSelection] = useSelection();
  const [inventory, setInventory] = useState(null);

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) {
        setInventory(snap.val());
      }
    }
    db.ref("/inventory").on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  return (
    <div className="shopping-page">
      <Cart cartState={ { show, setShow } }
            selectionState={ { selection, toggleSelection } }
            inventory={ inventory }
            db={ db }
      />
      <SizeSelector />
      <OrderSelector />
      <ProductTable products={ products }
                    setShow={ setShow }
                    toggleSelection={ toggleSelection }
                    inventoryState={ { inventory, setInventory } }
                    db={ db }
      />
    </div>
  );
}

export default App;
