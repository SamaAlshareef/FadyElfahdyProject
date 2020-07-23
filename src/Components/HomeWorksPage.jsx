import React from 'react';
import Navbar from './Navbar';
import CardsSection from './CardsSection';
import HomeWorks from './HomeWorks';
import Quizzes from './Quizzes';
import Videos from './Videos';
import Footer from './Footer';
import Questions from './Questions';

function HomePage() {
  return (
    <React.Fragment>
      <Navbar/>
      <Questions/>
      <Footer/>
    </React.Fragment>
  );
}

export default HomePage;
