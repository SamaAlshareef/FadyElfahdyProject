import React,{Component} from 'react';

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
            <a className="nav-item nav-link active navbar-font" href="/">Overview <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link navbar-font" href="/homeworks">Homeworks</a>
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

