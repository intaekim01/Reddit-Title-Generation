import animatedText from "../Images/animatedText.gif";
import BARTimg from "../Images/BARTimg.png";
import t5 from "../Images/t5.gif";
import { Link } from 'react-router-dom';

function Home() {
    
    return (
        <div>
            {/* HERO IMAGE */}
             <div className="container-fluid">
                <div className="py-5"></div>
                <div className="py-5"></div>
                <div className="container text-center p-5">
                    <img className="animatedText.gif" src={animatedText} width="100%" height="100%" alt=''></img>
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
                <h4>It's as simple as:</h4>
                <div className="d-flex justify-content-center py-2">
                    <span className="text-start">
                        <p>1. Write or copy your Reddit content </p>
                        <p>2. Paste content into the rich text editor</p>
                        <p>3. Click the Generate Titles!</p>
                    </span>
                </div>
                
                {/* SECTION: HOW DOES IT WORK */}
                <div className="container text-center p-5">
                    <h2>How does it work?</h2>
                </div>

                <div className="container text-center">
                    <h4>Our title generator is powered by two state-of-the-art natural language models: Bart & T5</h4>
                    <div className="row py-5">
                        <div className="col-sm-12 col-md-4">
                            <h3>BART</h3>
                            <h4 style={{color: "#FF4500"}}>Bidirectional Auto-Regressive Transformers</h4>
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <img className="BARTimg.png" src={BARTimg} width="100%" height="100%" alt=''></img>
                            <p>Seq-to-seq architecture which uses a bidirectional encoder (BERT) and left-to-right decoder (GPT)</p>
                        </div>
                    </div>

                    <div className="row py-5">
                        <div className="col-sm-12 col-md-4">
                            <h3>T5</h3>
                            <h4 style={{color: "#FF4500"}}>Text-to-Text Transfer Transformer</h4>
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <img className="t5.gif" src={t5} width="100%" height="100%" alt=''></img>
                            <p>Seq-to-seq architecture which uses a bidirectional encoder (BERT) and left-to-right decoder (GPT)</p>
                        </div>
 
                    </div>

                </div>
                
                <div className="py-5"></div>
            </div>

        </div>
       
    )

};

export default Home