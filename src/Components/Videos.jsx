import React,{Component} from 'react';

class Videos extends Component {
    constructor(props){
        super(props);
       
    }
    render() { 
        return (  

            <div className="container-fluid pt-5" >
                <div className="row no-gutters ">
                <h1 className="header">Recent Videos</h1>
                <div className="card-deck pl-5  pr-5 d-flex justify-content-center ">
                    
                    <div className="col-3">
                    <div className="card border border-gold shadow p-3 mb-5 bg-white rounded">
                        <img src="/images/study1.jpg" className="border border-non-gold card-img d-flex justify-content-center " alt="..."/>
                        <div className="card-body">
                        <div className="h-25">
                            <h5 className="card-title title-font text-center h-25">Title</h5>
                            <p className="text-center">Subtitle</p>
                            </div>
                            <div className="h-25">
                            <p className="card-text  text-center ">Suspendisse in justo mauris.Morbi
                                    vitae lectus est. Pellentesque
                                    commodo nisi id erat pretium,
                                    sit amet facilisis orci condimentum.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-3">
                    <div className="card border border-gold  shadow p-3 mb-5 bg-white rounded">
                        <img src="/images/study2.jpg" className="border border-non-gold card-img d-flex justify-content-center " alt="..."/>
                        <div className="card-body">
                        <div className="h-25">
                            <h5 className="card-title title-font text-center h-25">Title</h5>
                            <p className="text-center">Subtitle</p>
                            </div>
                            <div className="h-25">
                            <p className="card-text  text-center ">Suspendisse in justo mauris.Morbi
                                    vitae lectus est. Pellentesque
                                    commodo nisi id erat pretium,
                                    sit amet facilisis orci condimentum.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-3">
                    <div className="card border border-gold  shadow p-3 mb-5 bg-white rounded">
                        <img src="/images/study3.jpg" className="border border-non-gold card-img d-flex justify-content-center " alt="..."/>
                        <div className="card-body">
                        <div className="h-25">
                            <h5 className="card-title title-font text-center h-25">Title</h5>
                            <p className="text-center">Subtitle</p>
                            </div>
                            <div className="h-25">
                            <p className="card-text  text-center ">Suspendisse in justo mauris.Morbi
                                    vitae lectus est. Pellentesque
                                    commodo nisi id erat pretium,
                                    sit amet facilisis orci condimentum.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-3">
                    <div className="card border border-gold shadow p-3 mb-5 bg-white rounded">
                        <img src="/images/study4.jpg" className="border border-non-gold card-img d-flex justify-content-center " alt="..."/>
                        <div className="card-body">
                        <div className="h-25">
                            <h5 className="card-title title-font text-center h-25">Title</h5>
                            <p className="text-center">Subtitle</p>
                            </div>
                            <div className="h-25">
                            <p className="card-text  text-center ">Suspendisse in justo mauris.Morbi
                                    vitae lectus est. Pellentesque
                                    commodo nisi id erat pretium,
                                    sit amet facilisis orci condimentum.</p>
                            </div>
                        </div>
                        </div>
                    </div>
           
                    <img src="/images/pagination.png" className="d-flex justify-content-center pagination-icon"/>
                </div>
                </div>
            
          </div>
            
        );

    }
}
 
export default Videos;
