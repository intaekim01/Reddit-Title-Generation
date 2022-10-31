import RichText from '../Components/RichText';
import React, { useState } from "react";

function Home({post, setPost}) {

    const [titles, setTitles] = useState({message: 'Generated titles will populate here'});
    const [err, setErr] = useState("");

    const handleClick = async () => {
        try {
            const response = await fetch('https://qf2lscafo5.execute-api.us-west-2.amazonaws.com/test/titlegeneration?transactionId=5&type=RETURN&amount=226k', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();

            setTitles(result);

        } catch (err) {
            setErr(err.message);
        }; 

    } 

    return (
        <div className="container-fluid page">

            <div className='container p-4'>

                <div className='row'>
                    <div>
                        <p>Paste your post</p>
                        <hr></hr>
                    </div>
                    <div className='row'>
                        <RichText post={post} setPost={setPost}></RichText>
                    </div>
                    <div className='p-3 text-center'>

                        <button type="button" className="btn btn-primary" onClick={handleClick} data-bs-toggle="modal" data-bs-target="#titlesModal">
                            Generate Titles!
                        </button>

                        
                        <div className="modal fade" id="titlesModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="titlesModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="titlesModalLabel">Select a title</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                            <label className="form-check-label d-flex" htmlFor="flexRadioDefault1">
                                                {titles.message}
                                            </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                                            <label className="form-check-label d-flex" htmlFor="flexRadioDefault2">
                                                {titles.message}
                                            </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"></input>
                                            <label className="form-check-label d-flex" htmlFor="flexRadioDefault3">
                                                {titles.message}
                                            </label>
                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary"  data-bs-dismiss="modal">Copy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )

};

export default Home