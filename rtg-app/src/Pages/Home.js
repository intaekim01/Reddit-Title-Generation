import result from "../Images/result.gif";
import logoV3 from "../Images/logoV4.png";
import './Home.css';

function Home() {
    
    return (
        <div className="container-fluid">
            <div className="py-5"></div>
            <div className="container text-center p-5">
                <img className="result.gif" src={result} width="90%" alt=''></img>
                <img className="logoV3 py-5" src={logoV3}></img>
                <h4>leveraging state-of-the-art natural language processing models to generate titles</h4>

            </div>
            <textarea id="typing-text" readonly></textarea>
            
            
            
        </div>
    )

};

export default Home