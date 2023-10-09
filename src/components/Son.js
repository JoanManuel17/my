import React, { useMemo } from "react";

export const Son = ({ numero, increment }) => {
  console.log('again reloaded...'); 

  const MemoHook = useMemo(() => increment, [increment]);

  return (
    <button className='btn btn-primary mr-3' onClick={() => MemoHook(numero)}>
      {numero}
    </button>
  );
};
