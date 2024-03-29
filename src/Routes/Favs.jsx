import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
const { state } = useContextGlobal();

return (
  <>
    
    <h1>Dentistas Favoritos ★</h1>
    
    <div className="card-grid">
      {state.favs.map(item => <Card key={item.id} item={item}/>)}
    </div>
  </>
  );
};

export default Favs;
