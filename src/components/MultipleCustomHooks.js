import React from "react";
import UseCounter from "../hooks/UseCounter";
import { UseFetch } from "../hooks/UseFetch";

export const MultipleCustomHooks = () => {
  const { counter, increment } = UseCounter(1);
  const { data, isLoading, hasError } = UseFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : hasError ? (
        <div className="alert alert-danger text-center">{hasError}</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{data[0]?.quote}</p>
          <footer className="blockquote-footer">{data[0]?.author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={() => increment()}>
        Next
      </button>
    </>
  );
};
