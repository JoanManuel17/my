import React, { useMemo } from "react";

export const Son = ({ numero, increment }) => {
  console.log('Rendering Son component...'); 

  const memoHook = useMemo(() => {
    return (
      <button className='btn btn-primary mr-3' onClick={() => increment(numero)}>
        {numero}
      </button>
    );
  }, [numero, increment]);

  return memoHook;
};