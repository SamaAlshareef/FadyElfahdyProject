import React,{Component} from 'react';

class CardsSection extends Component {
    constructor(props){
        super(props);
       
    }
    render() { 
        return (  

            <div className="container-fluid pt-5" >
                <div className="row no-gutters d-flex ">
                <h1 className="header">{this.props.title}</h1>
                <div className="card-deck  pr-5d-flex justify-content-center ">
                    
                    <div className="col-sm-3">
                    <div className="card border border-gold h-100 shadow p-3 mb-5 bg-white rounded">
                        <img src="/images/study1.jpg" className="border border-non-gold card-img d-flex justify-content-center " alt="..."/>
                        <div className="card-body">
                            <div className="h-25">
                            <h5 className="card-title title-font text-center">Session Next Sunday
                                                    Postponed</h5>
                                                    </div>
                            <p className="card-text  text-center h-50">Suspendisse in justo mauris.Morbi
                                    vitae lectus est. Pellentesque
                                    commodo nisi id erat pretium,
                                    sit amet facilisis orci condimentum.</p>
                            <a href="#" class="card-link d-flex justify-content-center gold-font">Read More</a>
                          
                        </div>
                        </div>
                    </div>
           
                    <div className="col-sm-3">
                    <div className="card border border-gold  h-100 shadow p-3 mb-5 bg-white rounded ">
                        <img src="/images/study2.jpg" className="border border-non-gold card-img d-flex justify-content-center " alt="..."/>
                        <div className="card-body">
                       
                            <h5 className="card-title title-font text-center h-25">Ramadan Schedule</h5>
                                                   
                            <p className="card-text text-center h-50">Suspendisse in justo mauris.Morbi
                                    vitae lectus est. Pellentesque
                                    commodo nisi id erat pretium,
                                    sit amet facilisis orci condimentum.</p>
                            <a href="#" class="card-link d-flex justify-content-center gold-font">Read More</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="card border border-gold  h-100  shadow p-3 mb-5 bg-white rounded">
                        <img src="/images/study3.jpg" className="border border-non-gold card-img d-flex justify-content-center " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title title-font text-center h-25 ">Next Week Quiz</h5>
                            <p className="card-text text-center h-50">Suspendisse in justo mauris.Morbi
                                    vitae lectus est. Pellentesque
                                    commodo nisi id erat pretium,
                                    sit amet facilisis orci condimentum.</p>
                            <a href="#" class="card-link d-flex justify-content-center gold-font h-25">Read More</a>
                        </div>
                        </div>
                    </div>
            
                    <div className="col-sm-3">
                    <div className="card border border-gold  h-100 shadow p-3 mb-5 bg-white rounded">
                        <img src="/images/study4.jpg" className="border border-non-gold card-img d-flex justify-content-center " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title title-font text-center h-25">Online Session Next Week</h5>
                            <p className="card-text text-center h-50">Suspendisse in justo mauris.Morbi
                                    vitae lectus est. Pellentesque
                                    commodo nisi id erat pretium,
                                    sit amet facilisis orci condimentum.</p>
                            <a href="#" class="card-link d-flex justify-content-center gold-font h-25">Read More</a>
                        </div>
                        </div>
                    </div>
                    <img src="/images/pagination.png" className="d-flex mx-auto d-block pagination-icon"/>
          </div>
                </div>
            
          </div>
            
        );

    }
}
 
export default CardsSection;

