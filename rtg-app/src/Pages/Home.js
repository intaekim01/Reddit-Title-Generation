import result from "../Images/result.gif";
import logoV3 from "../Images/logoV4.png";
import { Link } from 'react-router-dom';

function Home() {
    
    return (
        <div>
             <div className="container-fluid">
                <div className="py-5"></div>
                <div className="container text-center p-5">
                    <img className="col-md result.gif" src={result} width="100%" height="100%" alt=''></img>
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
                
                
            </div>

            <div className="container-fluid text-center" style={{backgroundColor: "#DAE0E6"}}>
                <div className="container text-center p-5">
                    <h2>How does it work?</h2>
                </div>
                <h4>It's as simple as:</h4>
                <div className="d-flex justify-content-center py-2">
                    <span className="text-start">
                        <p>1. Write or copy your Reddit content </p>
                        <p>2. Paste content into the rich text editor</p>
                        <p>3. Click the Generate Titles!</p>
                    </span>
                </div>
                
                
                <div className="py-5"></div>
            </div>

        </div>
       
    )

};

export default Home