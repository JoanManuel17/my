import { memo } from "react";

export const Son = memo(({ numero, increment }) => {
  console.log("Again reloaded...");
  return <button onClick={() => increment(numero)}>{numero}</button>;
});
