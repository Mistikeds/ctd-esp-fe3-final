import React from "react";
import { useContextGlobal } from "./utils/global.context";
import MyLink from "./MyLink";


const Card = ({ item }) => {
  const { state, dispatch } = useContextGlobal();
  const favs = state.favs;
  const esFav = favs.some((dentist) => dentist.id === item.id);

  const addFav = () => {
    if (esFav) {
      dispatch({ type: "REMOVE_FAV", payload: item.id });
      alert("El doctor se eliminó de tu lista de favoritos.");
    } else {
      dispatch({ type: "ADD_FAV", payload: item });
      alert("El doctor se agregó a tu lista de favoritos.");
    }
  };

  return (
    <div className="card">
      <img src="./public/images/doctor.jpg" alt="" />
      <MyLink to={"/detalle/" + item.id} name={item.name} />
      <h5>{item.username}</h5>
      <button onClick={addFav} className={`favButton ${esFav ? 'added' : ''}`}>
        {esFav ? "Quitar de favoritos ✰" : "Agregar a favoritos ★"}
      </button>
    </div>
  );
};

export default Card;
