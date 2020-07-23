import React,{Component} from 'react';
import Navbar from './Navbar';
import CardsSection from './CardsSection';
import HomeWorks from './HomeWorks';
import Quizzes from './Quizzes';
import Videos from './Videos';
import Footer from './Footer';


class Home extends Component {
    constructor(props){
        super(props);
       
    }
    render() { 
        return (  

          <React.Fragment>
          <Navbar/>
          <CardsSection title="Announcement"/>
          <HomeWorks />
          <Quizzes />
          <Videos/>
          <Footer/>
        </React.Fragment>
        );

    }
}
 
export default Home;

