import React from "react";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
const { state } = useContextGlobal();

  return (
    <>
      <h1>Dentistas Favoritos ★</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
