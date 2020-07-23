import React,{Component} from 'react';

class Questions extends Component {
    constructor(props){
        super(props);
       
    }
    render() { 
        return (  
        <div className="container-fluid">
            <p className="header">Chemistry Homework</p>
            <div className="row d-flex justify-content-start ml-5">
                
                <div className="col-6">
                <div class="card border border-round shadow p-3 mb-5 bg-white rounded">
                    <div class="card-body">
                    <p className="title-font">What is the first element on the periodic table?</p>
                   
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                    <label class="form-check-label" for="exampleRadios1">
                        <p className="footer-font2">Carbon</p>
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                    <label class="form-check-label" for="exampleRadios2">
                    <p className="footer-font2">Hydrogen</p>
                        
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                    <label class="form-check-label" for="exampleRadios2">
                    <p className="footer-font2">Sodium hydroxide</p>
                    
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                    <label class="form-check-label" for="exampleRadios2">
                    <p className="footer-font2">Nitrogen</p>
                    
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                    <label class="form-check-label" for="exampleRadios2">
                    <p className="footer-font2">H20</p>
                    
                    </label>
                    </div>
                    <div className= "d-flex flex-row">
                    <img src="/images/microphone.png" className="microphone-icon"/>
                    <p className="title-font mt-2 ml-1"> Say the answer by voice</p>
                    </div>
                    
                    </div>
                </div>
                
                    
                </div>
                <div className="col-6">
                <div class="card border border-round shadow p-3 mb-5 bg-white rounded feedback mb-5">
                    <div class="card-body">
                        <p  className=""></p>
                        <input type="text" className="form-control footer-font2" placeholder="No Feedback yet"  />
                        </div>
                        </div>
                </div>
            </div>
        </div>
          
            
        );

    }
}
 
export default Questions;

