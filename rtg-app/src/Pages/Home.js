import RichText from '../Components/RichText';
import React, { useState } from "react";

function Home({post, setPost}) {

    const [titles, setTitles] = useState(['', '', '']);
    const [err, setErr] = useState("");

    function convertToPlain(html){

        // Create a new div element
        var tempDivElement = document.createElement("div");
        
        // Set the HTML content with the given value
        tempDivElement.innerHTML = html;
        
        // Retrieve the text property of the element 
        return tempDivElement.textContent || tempDivElement.innerText || "";
    }

    function cleanString(input) {
        var output = "";
        for (var i=0; i<input.length; i++) {
            if (input.charCodeAt(i) <= 127) {
                output += input.charAt(i);
            }
        }
        return output;
    }

    const handleClick = async () => {

        try {
            if (typeof post === 'string' && post.length > 0) {
                let text = convertToPlain(post)
                let text_to_utf8 = cleanString(text)
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ content: text_to_utf8 })
                };
                let url = new URL('https://35.88.248.227/generate_titles')
                const response = await fetch(url, requestOptions)
    
                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }
    
                const result = await response.json();
                setTitles(result);
    
            }
        
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
                    <div className='p-3'>

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
                                                {titles[0][0]}
                                            </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                                            <label className="form-check-label d-flex" htmlFor="flexRadioDefault2">
                                                {titles[1][0]}
                                            </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"></input>
                                            <label className="form-check-label d-flex" htmlFor="flexRadioDefault3">
                                                {titles[2][0]}
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

                    <div className='d-flex justify-content-center'>
                        <button type="button" className="btn btn-primary " onClick={handleClick} data-bs-toggle="modal" data-bs-target="#titlesModal">
                            Generate Titles!
                        </button>
                    </div>

                </div>
                
            </div>
            
        </div>
    )

};

export default Home