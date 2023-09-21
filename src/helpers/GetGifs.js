import React from "react";

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=9WZV3YSMeS7XVaz3ecMesO4xJRNfZY1D&q=${category}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`; 
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.original.url,
    };
  });
  return gifs;
};  