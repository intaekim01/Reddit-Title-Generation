import animatedText from "../Images/animatedText.gif";
import Step1 from "../Images/Step1.png";
import Step2 from "../Images/Step2.png";
import Step3 from "../Images/Step3.png";
import ArrowV1 from "../Images/ArrowV1.png";
import ArrowV2 from "../Images/ArrowV2.png";
import { Link } from 'react-router-dom';

function Home() {
    
    return (
        <div>
            {/* HERO IMAGE */}
             <div className="container-fluid">
                <div className="py-5"></div>
                <div className="py-5"></div>
                <div className="container text-center p-5">
                    <img className="hide-display animatedText.gif" src={animatedText} width="100%" height="100%" alt=''></img>
                    <h5 className="unhide-display">Type in your Reddit post, article, or story ... auto generate titles 😉</h5>
                    <p>leveraging state-of-the-art natural language processing models to generate titles</p>
              
                    <div className="py-5">
                        <button type="button" className="btn btn-primary mx-2 " data-bs-toggle="modal" data-bs-target="#titlesModal">
                            <Link className="nav-link" to="/title_generator">try it out</Link>
                        </button>
                        <button type="button" className="btn btn-outline-primary mx-2" data-bs-toggle="modal" data-bs-target="#titlesModal">
                            <Link className="nav-link" to="/about">learn more</Link>
                        </button>
                    </div>
                </div>
                <div className="py-5"></div>
                
            </div>

            <div className="container-fluid text-center" style={{backgroundColor: "#DAE0E6"}}>
                
                {/* SECTION: HOW DO YOU USE IT */}
                <div className="container text-center p-5">
                    <h2>How do you use it?</h2>
                </div>

                <div className="container d-flex justify-content-center text-center">
                    <div className="row py-5">
                        <div className="d-flex col-sm-12 col-md-6 align-items-center px-5">
                            <h4 style={{color: "#FF4500"}}>Step 1<hr></hr> Enter your Reddit content in the text editor</h4>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <img className="Step1.png" src={Step1} width="400" height="300" alt=''></img>
                        </div>
                    </div>

                </div>

                <div className="container d-flex justify-content-center text-center">
                    <div className="row ">
                        <img className="ArrowV1.png arrow" src={ArrowV1} alt=''></img>
                    </div>

                </div>

                <div className="container d-flex justify-content-center text-center">
                    <div className="row py-5">
                        <div className="d-flex col-sm-12 col-md-6 order-md-2 align-items-center px-5">
                            <h4 style={{color: "#FF4500"}}>Step 2 <hr></hr> Click the Generate Titles button!</h4>
                        </div>
                        <div className="col-sm-12 col-md-6 order-md-1">
                            <img className="Step2.png" src={Step2} width="400" height="300" alt=''></img>
                        </div>
                        
                    </div>

                </div>
                
                <div className="container d-flex justify-content-center text-center">
                    <div className="row ">
                        <img className="ArrowV2.png arrow" src={ArrowV2}  alt=''></img>
                    </div>

                </div>

                <div className="container d-flex justify-content-center text-center pb-5">
                    <div className="row py-5">
                        <div className="d-flex col-sm-12 col-md-6 align-items-center px-5">
                            <h4 style={{color: "#FF4500"}}>Step 3<hr></hr> Select your favorite title and copy</h4>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <img className="Step3.png" src={Step3} width="400" height="300" alt=''></img>
                        </div>
                    </div>

                </div>

                <div className="pt-5">
                    <h4>It's as simple as that 😉</h4>
                    <div className="py-5">
                        <button type="button" className="btn btn-primary mx-2 " data-bs-toggle="modal" data-bs-target="#titlesModal">
                            <Link className="nav-link" to="/title_generator">try it out</Link>
                        </button>
                    </div>
                </div>
                
                
                <div className="py-5"></div>
            </div>

        </div>
       
    )

};

export default Home