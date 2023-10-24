import React, { useContext } from "react";
import FavoratesContext from "../store/Favorate-Context";
import ListMeetup from "../Component/listMeetup";

function MyFavorates() {
  const favoriteCtx = useContext(FavoratesContext);
  return (
    <div>
      <h1>All Favorites</h1>
      {favoriteCtx.totalFavorites >= 1 ? (
        favoriteCtx.favorites.map((val) => <ListMeetup list={val} />)
      ) : (
        <h3 className="mt-5">You got no favorites yet</h3>
      )}
    </div>
  );
}
export default MyFavorates;
