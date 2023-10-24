import React, { createContext, useState } from 'react'

const FavoratesContext=createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite:(favoriteMettup)=>{},
    removeFav:(meetupId)=>{},
    isFavorite:(meetupId)=>{}

})
export function FavorateContext(props) {
    const [favorites,setFavorites] = useState([])
    function AddToFavorite(favoriteMettup){
        setFavorites((prevFavorites)=>{
            return prevFavorites.concat(favoriteMettup)
        })
    }
    function RemoveFavorite(meetupId){
        setFavorites((prevFavorites)=>{
            return prevFavorites.filter(meetup=>meetup.id!==meetupId)
        })
    }
    function ItemIsFavorite(meetupId){
        return favorites.some(meetup=>meetup.id===meetupId)
    }
    const context={
        favorites:favorites,
        totalFavorites:favorites.length,
        addFavorite:AddToFavorite,
        removeFav:RemoveFavorite,
        isFavorite:ItemIsFavorite
    }
  return (
    <div>
        <FavoratesContext.Provider value={context}>
        {props.children}
        </FavoratesContext.Provider>
    </div>
  )
}

export default FavoratesContext