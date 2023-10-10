import React, { useState, useEffect } from "react";

export const ComponentApp = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.giphy.com/v1/gifs/search?api_key=eAtY1pE7EXegmfV8ZO3dPR3c3ApG7Ndz&q=1&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
        );
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Cargando los datos solicitados</p>
      ) : (
        <div>
          {hasError ? (
            <p>Hubo un error al cargar los datos</p>
          ) : (
            <div>
              <h2>Resultados de la busqueda</h2>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
