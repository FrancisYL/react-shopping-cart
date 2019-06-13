import React, {useState, useEffect} from 'react';
import Cart from './components/Cart';
import SizeSelector from './components/SizeSelector';
import OrderSelector from './components/OrderSelector';
import ProductTable from './components/ProductTable';
import "rbx/index.css";
import { Button, Container, Message } from "rbx";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

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

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

const Banner = ({ user }) => (
  <React.Fragment>
    { user ? <Welcome user={ user } /> : <SignIn /> }
    {/* <Title>{ title || '[loading...]' }</Title> */}
  </React.Fragment>
);

const Welcome = ({ user }) => (
  <Message color="info">
    <Message.Header>
      Welcome, {user.displayName}
      <Button primary onClick={() => firebase.auth().signOut()}>
        Log out
      </Button>
    </Message.Header>
  </Message>
);

const SignIn = () => (
  <StyledFirebaseAuth
    uiConfig={uiConfig}
    firebaseAuth={firebase.auth()}
  />
);

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
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

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
      <Banner user={ user } />
      <Cart cartState={ { show, setShow } }
            selectionState={ { selection, toggleSelection } }
            inventory={ inventory }
            db={ db }
            user={ user }
      />
      <SizeSelector />
      <OrderSelector />
      <ProductTable products={ products }
                    setShow={ setShow }
                    toggleSelection={ toggleSelection }
                    inventoryState={ { inventory, setInventory } }
                    db={ db }
                    user={ user }
      />
    </div>
  );
}

export default App;
