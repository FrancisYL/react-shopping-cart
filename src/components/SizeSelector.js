import React from 'react';

const sizes = ['S', 'M', 'L', 'XL'];

const SizeSelector = () => (
  <div className="size-selection">
    { Object.values(sizes).map(size => <button className="size-button">{ size }</button>)}
  </div>
);

export default SizeSelector;
