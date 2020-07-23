import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    constructor(props){
        super(props);
       
    }
    render() { 
        return (  

      
        <nav className="navbar navbar-expand-lg navbar-light">
       
        <img src="/images/FadyElfahdLogoBlackLowRes.png" className="logo-icon navbar-brand" href="#"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto pr-5">
            <Link to={'/'} className="nav-link navbar-font"> Overview </Link> <span className="sr-only">(current)</span>
            <Link to={'/homeworks'} className="nav-link navbar-font"> Homeworks </Link> <span className="sr-only">(current)</span>
            <a className="nav-item nav-link navbar-font" href="#">Quizzes</a>
            <a className="nav-item nav-link navbar-font" href="#">Online Courses</a>
            <a className="nav-item nav-link navbar-font" href="#">Online Session</a>
            <button className="btn-gold-custom nav-btn-color">Profile</button>
            </div>
        </div>
        </nav>
      
            
        );

    }
}
 
export default Navbar;

