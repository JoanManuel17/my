import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input ref={inputRef} className="form-control" placeholder="Your name" />
      <button className="btn btn-outline-primary mt-5" onClick={onClick}>
        Focus
      </button>
    </>
  );
};
