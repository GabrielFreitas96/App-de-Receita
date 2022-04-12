import React, { useContext, useEffect } from 'react';
import myContext from '../Context/myContext';
import Header from '../Components/Header';
import { getfavoriteFoodLocalStore } from '../Helpers/favoriteLocalStore';
import CardFavoritesRecipes from '../Components/CardFavoritesRecipes';

function FavoritesRecipes(props) {
  const { setShowSearchInput, setFavoriteRecipes,
    setFavoriteRecipesFilter } = useContext(myContext);
  useEffect(() => {
    setShowSearchInput((prevState) => !prevState);
    const favoriteLocalStore = getfavoriteFoodLocalStore();
    setFavoriteRecipes(favoriteLocalStore);
    setFavoriteRecipesFilter(favoriteLocalStore);
  }, []);

  return (
    <section>
      <Header { ...props } pageTitle="Favorite Recipes" />
      <CardFavoritesRecipes />
    </section>
  );
}

export default FavoritesRecipes;
