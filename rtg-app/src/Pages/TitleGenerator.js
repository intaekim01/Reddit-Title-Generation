import RichText from '../Components/RichText';
import React, { useState } from "react";
import copy from "copy-to-clipboard";
import { Toast } from 'bootstrap';
import IconV3 from "../Images/IconV3.png";
import { Oval } from 'react-loader-spinner';

function TitleGenerator({post, setPost}) {

    // setup State variables
    const [titles, setTitles] = useState(['', '', '']);
    const [err, setErr] = useState("");
    const [copyText, setCopyText] = useState('');
    const [loading, setLoading] = useState(false);

    // initiale toast component to show
    const toastTrigger = document.getElementById('copyButton')
    const toastTitleCopied = document.getElementById('copyToast')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
            const toast = new Toast(toastTitleCopied)
    
        toast.show()
      })
    }

    // sets copyText State to selected title
    const handleCopyText = (e) => {
        setCopyText(e.target.value);
     } 
    
    //  copies copyText State to clipboard
    const copyToClipboard = () => {
        copy(copyText);
        setTitles(['', '', ''])
     }

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
        setLoading(true);
        try {
            if (typeof post === 'string' && post.length > 0) {
                let text = convertToPlain(post)
                let text_to_utf8 = cleanString(text)
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ content: text_to_utf8 })
                };
                console.log('generating titles through https resource...')
                let url = new URL('https://inference.title-ai.com/generate_titles')
                const response = await fetch(url, requestOptions)
    
                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }
    
                const result = await response.json();
                setTitles(result);
                setLoading(false);
    
            }
        
        } catch (err) {
            setErr(err.message);
        }; 
                
    }

    const dismissClick = () => {
        setTitles(['', '', ''])
    }

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const regenerateClick = async () => {
        setLoading(true);
        await delay(2000);
        let titleArray = titles

        titleArray.map(arr => {
            arr.push(arr.shift());
            return arr
        })

        setTitles(titleArray);
        setLoading(false);

    }

    return (
        <div className="container-fluid page">

            <div className='container p-4'>

                <div className='row'>
                    <div>
                        <p>Paste your post</p>
                        <hr></hr>
                    </div>
                    <div className=''>
                        <RichText post={post} setPost={setPost}></RichText>
                    </div>
                    <div className='p-3'>

                        <div className="modal fade" id="titlesModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="titlesModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="titlesModalLabel">Select a title</h1>
                                        <button type="button" className="btn-close" onClick={dismissClick} data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    
                                    <div className="modal-body">
                                        {loading && 
                                        <div className='d-flex justify-content-center'>
                                            <Oval
                                            width="100"
                                            height="100"
                                            color='#FF4500'
                                            ariaLabel='loading'
                                            secondaryColor="#6C757D"
                                            />
                                        </div>
                                        
                                        }
                                        {!loading && 
                                        <div>
                                            <div className="form-check py-2">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={titles[0][0]} onChange={handleCopyText}></input>
                                                <label className="form-check-label d-flex" htmlFor="flexRadioDefault1">
                                                    {titles[0][0]}
                                                </label>
                                            </div>
                                            <div className="form-check py-2">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={titles[1][0]} onChange={handleCopyText}></input>
                                                <label className="form-check-label d-flex" htmlFor="flexRadioDefault2">
                                                    {titles[1][0]}
                                                </label>
                                            </div>
                                            <div className="form-check py-2">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value={titles[2][0]} onChange={handleCopyText}></input>
                                                <label className="form-check-label d-flex" htmlFor="flexRadioDefault3">
                                                    {titles[2][0]}
                                                </label>
                                            </div>
                                            <div className='col text-center pt-4'>
                                                <button type="button" className="btn btn-link" onClick={regenerateClick}>Don't like? Regenerate three more</button>
                                            </div>
                                        </div>
                                        }
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-secondary" onClick={dismissClick} data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" id="copyButton" data-bs-dismiss="modal" onClick={copyToClipboard}>Copy</button>
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

                    <div className="toast-container position-fixed bottom-0 end-0 p-3">
                        <div id="copyToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <img className="IconV3.png rounded me-2" src={IconV3} width="17" height="17" alt=''></img>
                                <strong className="me-auto"></strong>
                                <strong>title copied!</strong>
                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            
        </div>
    )

};

export default TitleGenerator