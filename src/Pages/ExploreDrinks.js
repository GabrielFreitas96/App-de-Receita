import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../Components/Footer';
import myContext from '../Context/myContext';
import Header from '../Components/Header';
import { fetchApi } from '../Helpers/useFetch';
import '../styles/explore-drinks.css';

function ExploreDrink(props) {
  const { history } = props;
  const [dataRandom, setDataRandom] = useState();

  const { setShowSearchInput } = useContext(myContext);
  useEffect(() => {
    // console.log('didMount');
    setShowSearchInput((prevState) => !prevState);

    const fetchRandom = async () => {
      const data = await fetchApi('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      setDataRandom({ ...data.drinks[0] });
      console.log(data);
    };
    fetchRandom();
  }, []);

  const handlePush = (param) => {
    history.push(param);
  };

  return (
    <section className="container-explore-drinks">
      <Header { ...props } pageTitle="Explore Drinks" />
      <div className="btns-container">
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => handlePush('./drinks/ingredients') }
        >
          By Ingredient
        </button>

        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => handlePush(`/drinks/${dataRandom.idDrink}`) }
        >
          Surprise me!
        </button>
      </div>
      <Footer />
    </section>
  );
}

ExploreDrink.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default ExploreDrink;
