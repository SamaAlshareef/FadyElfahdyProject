import React,{Component} from 'react';

class Footer extends Component {
    constructor(props){
        super(props);
       
    }
    render() { 
        return (  

            <footer class="footer custom-footer mt-auto mt-3 ">
            <div class="container-fluid">
               <div className="row ">
                   <div className="col-6 d-flex flex-column">
                        <img src="/images/FadyElfahdLogo.png" className="footer-icon float-left"/>                         
                   </div>
                   <div className="col-2">
                        <p className="footer-font  text-center">Socia Media</p>
                        <img className="media-logos mx-auto d-block" src="/images/SocialMediaLogos.png" />
                   </div>
                   <div className="col-2 pl-5">
                        <p className="footer-font ">Help</p>
                        <p className="text-left footer-font2"> Support</p>
                        <p className="text-left footer-font2">FAQs</p>
                   </div>
                   <div className="col-2 ">
                        <p className="footer-font">Contact</p>
                        <p className="text-left footer-font2">fady-elfahdy@gmail.com</p>
                        <p className="text-left footer-font2">02-222222</p>
                   </div>
               </div>
               <div className="row" style={{backgroundColor:"#575757"}}>
               <div className="col-3">
                   <p className=" footer-font2 text-center">Privacy policy</p>
                   </div>
                   <div className="col-3">
                   <p className=" footer-font2 text-left">Terms & conditions</p>
                   </div>
                   <div className="col-6">
                    <p className=" footer-font2">All member work copyright of respective owner, otherwise © 2018-2020</p>
                   </div>
               </div>
            </div>
            </footer>
        );

    }
}
 
export default Footer;

