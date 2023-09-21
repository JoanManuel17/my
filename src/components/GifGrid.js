import React from "react";
import { useFetchGifs } from "../hooks/UseFetchGifs";
import {GifItem} from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image, key) => {
          return <GifItem key={key} {...image}></GifItem>;
        })}
      </div>
    </>
  );
};
