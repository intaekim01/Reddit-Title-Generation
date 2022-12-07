import BARTimg from "../Images/BARTimg.png";
import example1 from "../Images/example1.png";
import example2 from "../Images/example2.png";
import t5 from "../Images/t5.gif";

function About() {

    return (

        <div>
            {/* Our Mission and Why We Care Section */}
            <div className="container-fluid pb-3">
                <div className="container px-md-5">
                    <div className="row px-md-5 pt-md-5">
                        <div className="col-sm-12 col-md-6">
                            <div className="row">
                                <h4 className="py-3">Our Mission</h4>
                                <span>
                                    TitleAi is focused on tackling the <b>disconnect in relevance and interpretability between a Reddit title and its post</b>, which is a pervasive issue among the various Reddit communities across the platform. Using data scraped from Reddit, 
                                    we are finetuning two state of the art summarization models in T5 and BART to produce more accurate and relevant titles 
                                    that meet standards expected from the average Reddit user, thereby improving the ability of all Reddit users to find 
                                    topical information and increasing the ease with which a user can create a post. We intend to use our MVP as a proof 
                                    of concept that Natural Language Generation tools are an added value to the Reddit social media platform.
                                </span>
                            </div>
                        </div>
                        
                        <div className="col-sm-12 col-md-6">
                            <div className="row">
                                <h4 className="py-3">Why We Care</h4>
                                <span className="align-text-top">
                                    Now, Why do we care about irrelevant or ineffective titles? Reddit is structured such that content is socially curated 
                                    and promoted by site members through engagement, specifically through their voting system. The average monthly content-driven 
                                    reddit posts is approximately 2 million, so close to a million posts won`t get the engagement they`re looking for due to "bad" 
                                    titles. However with optimized titles, not only do content creators benefit through increased engagement on their posts, the 
                                    entire community benefits because the filtration speed for good and bad content will increase exponentially.
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Motivation Banner Section */}
            <div className="container-fluid" style={{backgroundColor: "#FF4500"}}>
                <div className="row py-5">

                    <div className="col-md-3 " style={{minHeight: "200"}}>
                        <div className="text-center">
                            <h1>Motivation</h1>
                        </div>
                    </div>

                    <div className="col-md-9" style={{minHeight: "200"}}>
                        <div className="">
                            <p>
                                There were an estimated 430 million Reddit users monthly and 300 million posts in 2021. 
                                After conducting online research and market analysis, we estimate that 45% of content-driven reddit 
                                posts contain either sub optimal title lengths, irrelevant title content, and/or ineffective titles. 
                                We researched everything from what causes content engagement, to what a high quality title should consist of, 
                                from newspaper headlines to blog posts, and there was a consensus on having a certain length of words or characters, 
                                effectively grabbing the reader`s attention, and accurately summarizing the content.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bad Examples With Carousel Section */}
            <div className="container-fluid">
                <div className="container px-md-5">
                    <div className="row py-5">
                        <div className="col-sm-12 col-md-6">
                            <div className="row px-md-5">
                                <h4>Bad Title Examples</h4>
                                <p>
                                    We gathered reddit data for posts that were generated in 2021 and analyzed millions of records. 
                                    The results of that analysis showed about 45% of all legitmate reddit posts had either sub-optimal title lengths, 
                                    irrelevant title content, and/or obvious ineffective titles. For title and headline generation, research has shown there 
                                    is an ideal title length and even a recommended range. Reddit titles we found that were less than three words long or 
                                    over twenty-five words were identified as having sub-optimale title lengths. Titles were deemed irrelevant if 
                                    their cosine similarty score between the post and the title fell below a 0.1. And lastly, reddit titles that 
                                    were just copies of the post were considered ineffective titles. The images here show examples of each type of "bad" title.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex col-sm-12 col-md-6 align-items-center">
                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="example1.png d-block w-100" src={example1} width="100%" height="100%" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5 style={{color: "#FF4500"}}>sub-optimal title lengths</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="example2.png d-block w-100" src={example2} width="100%" height="100%" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5 style={{color: "#FF4500"}}>irrelevant title content</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="example1.png d-block w-100" src={example1} width="100%" height="100%" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5 style={{color: "#FF4500"}}>ineffective titles</h5>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* SECTION: HOW DOES IT WORK */}
            <div className="container-fluid" style={{backgroundColor: "#DAE0E6"}}>
                <div className="container px-md-5">
                    <div className="row py-5">
                        <div className="col-sm-12 col-md-6">
                            <div className="row px-md-5">
                                <h4>How It Works</h4>
                                <p>Our title generator is powered by two state-of-the-art natural language models: Bart & T5</p>
                                <p>
                                    Seq-to-seq architecture which uses a bidirectional encoder (BERT) and left-to-right decoder (GPT).
                                    BART employs a diverse set of tasks where the model attempts to generate the correct output
                                    sequence from scrambled and masked text,  forces the model to understand the entire context 
                                    of an input sequence, and is useful therefore extremely useful for the summarization task
                                </p>
                                <p>T5: Utilizes transfer learning, which is when a model trained on a singular general task is used for another related task</p>
                                <div className="">
                                    <h5>Data Sources</h5>
                                    <p>The data used in our training and testing datasets compose raw re  ddit data, 
                                        which was extracted from a group of individuals at Pushshift.io(link?) using the Python Reddit API Wrapper (PRAW). 
                                        The raw data contained posts that were not in-scope towards our goal; in order to obtain content-driven reddit posts,
                                        the data was cleansed to ensure only the most optimal data was used for training and testing purpopses.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <div className="row text-center ">
                                <h4>BART<center><hr className="d-flex text-center" style={{maxWidth: "50%"}}/></center></h4>
                                <h5 style={{color: "#FF4500"}}>Bidirectional Auto-Regressive Transformers</h5>
                            </div>
                            <div className="row">
                                <img className="BARTimg.png" src={BARTimg} width="100%" height="100%" alt=''></img>
                            </div>

                            <div className="row text-center pt-5">
                                <h4>T5<center><hr className="d-flex text-center" style={{maxWidth: "50%"}}/></center></h4>
                                <h5 style={{color: "#FF4500"}}>Text-to-Text Transfer Transformer</h5>
                            </div>
                            <div className="row">
                                <img className="t5.gif" src={t5} width="100%" height="100%" alt=''></img>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    )

};

export default About