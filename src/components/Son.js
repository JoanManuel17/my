import React from "react";

export const Son = ({ numero, increment }) => {
  console.log('Again reloading...');
  return (
    <button className='btn btn-primary mr-3' onClick={() => increment(numero)}>
      {numero}
    </button>
  );
};
