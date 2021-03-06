import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [isHiddenSearchBar, setVisibleSearchBar] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [categoriesFoods, setCategoriesFoods] = useState([]);
  const [categoriesDrinks, setCategoriesDrinks] = useState([]);
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [doneRecipesFilter, setDoneRecipesFilter] = useState([]);
  const [detailRecipeInfo, setdetailRecipeInfo] = useState([]);
  const [recipeInProgress, setRecipeInProgress] = useState([]);
  const [drinkInProgress, setDrinkInProgress] = useState([]);
  const [isFavoriteBtn, setIsFavoriteBtn] = useState(false);
  const [favoritesRecipes, setFavoriteRecipes] = useState([]);
  const [favoritesRecipesfilter, setFavoriteRecipesFilter] = useState([]);
  const [disablebtnFinishRecipe, setdisablebtnFinishRecipe] = useState(true);
  const [filteredByIngredient, setFilteredByIngredient] = useState(false);
  const [ingredientSelectInExplore, setIngredientSelect] = useState('');
  const stateContext = {
    isHiddenSearchBar,
    setVisibleSearchBar,
    showSearchInput,
    setShowSearchInput,
    apiData,
    setApiData,
    categoriesFoods,
    setCategoriesFoods,
    categoriesDrinks,
    setCategoriesDrinks,
    doneRecipes,
    setDoneRecipes,
    doneRecipesFilter,
    setDoneRecipesFilter,
    detailRecipeInfo,
    setdetailRecipeInfo,
    isFavoriteBtn,
    setIsFavoriteBtn,
    favoritesRecipes,
    setFavoriteRecipes,
    favoritesRecipesfilter,
    setFavoriteRecipesFilter,
    recipeInProgress,
    setRecipeInProgress,
    drinkInProgress,
    setDrinkInProgress,
    disablebtnFinishRecipe,
    setdisablebtnFinishRecipe,
    filteredByIngredient,
    setFilteredByIngredient,
    ingredientSelectInExplore,
    setIngredientSelect,
  };

  return (
    <MyContext.Provider value={ stateContext }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;
