import React from 'react';

const orders = ['----- Select -----', 'Lowest to Highest', 'Highest to Lowest'];

const OrderSelector = () => (
  <div className="order-selection">
    { 'Order by ' }
    <select>
      { Object.values(orders).map(order => <option value={ order }>{order}</option> )}
    </select>
  </div>
);

export default OrderSelector;
