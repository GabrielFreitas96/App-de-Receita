import React, { useContext, useEffect } from 'react';
import myContext from '../Context/myContext';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Profile(props) {
  const { setShowSearchInput } = useContext(myContext);
  useEffect(() => {
    console.log('didMount');
    setShowSearchInput((prevState) => !prevState);
  }, []);
  return (
    <section>
      <h1>Profile </h1>
      <Header { ...props } pageTitle="Profile" />
      <Footer />
    </section>);
}

export default Profile;
