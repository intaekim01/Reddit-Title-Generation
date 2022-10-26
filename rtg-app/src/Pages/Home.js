import RichText from '../Components/RichText';
import React from "react";

function Home() {

    return (
        <div className="container-fluid page">

            <div className='container p-4'>
                <div>
                    <p>Paste your post</p>
                    <hr></hr>
                </div>
                <div>
                <RichText></RichText>
            </div>
            </div>
            
        </div>
    )

};

export default Home