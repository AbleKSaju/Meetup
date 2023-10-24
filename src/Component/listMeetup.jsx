import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FavoritesContext from "../store/Favorate-Context";


function ListMeetup({ list }) {
  const favoriteCtx=useContext(FavoritesContext)
  const isFavorite=favoriteCtx.isFavorite(list.id)
  const cardStyle = {
    float: "left",
    marginRight: "10px",
    width: "18rem",
  };
  const accessFavorate = () => {
    if(isFavorite){
       favoriteCtx.removeFav(list.id)
    }else{
      favoriteCtx.addFavorite({
        id:list.id,
        Image:list.Image,
        description:list.description,
       title:list.title,
       address:list.address
      })
    }
  }
  return (
    <div className="container">
      <Card style={cardStyle} key={list.id}>
        <Card.Img variant="top" src={list.Image} />
        <Card.Body>
          <Card.Title>{list.title}</Card.Title>
          <Card.Text>
            {list.description}
            <br />
            {list.address}
          </Card.Text>
          <Button variant="primary" onClick={accessFavorate}>
            {isFavorite?'Remove Fav':'Add to Favorite'}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ListMeetup;
