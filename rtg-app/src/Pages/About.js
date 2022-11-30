function About() {

    return (
        <div className="container-fluid ">
            <div className="container-fluid ">
                <div className="row p-5">
                    <div className="col-4 text-center">
                        <h1>Our Mission</h1>
                    </div>
                    <div className="col-8">
                        <p>
                            TitleAi is focused on tackling the disconnect in relevance and interpretability between a Reddit title and its post, 
                            which is a pervasive issue among the various Reddit communities across the platform.. Using data scraped from Reddit, 
                            we are finetuning two state of the art summarization models in T5 and BART to produce more accurate and relevant titles 
                            that meet standards expected from the average Reddit user, thereby improving the ability of all Reddit users to find 
                            topical information and increasing the ease with which a user can create a post. We intend to use our MVP as a proof 
                            of concept that Natural Language Generation tools are an added value to the Reddit social media platform.
                        </p>
                    </div>

                </div>
            </div >
            <div className="container-fluid ">
                <div className="row p-5">
                    <div className="col-4 text-center">
                        <h1>Our Mission</h1>
                    </div>
                    <div className="col-8">
                        <p>
                            TitleAi is focused on tackling the disconnect in relevance and interpretability between a Reddit title and its post, 
                            which is a pervasive issue among the various Reddit communities across the platform.. Using data scraped from Reddit, 
                            we are finetuning two state of the art summarization models in T5 and BART to produce more accurate and relevant titles 
                            that meet standards expected from the average Reddit user, thereby improving the ability of all Reddit users to find 
                            topical information and increasing the ease with which a user can create a post. We intend to use our MVP as a proof 
                            of concept that Natural Language Generation tools are an added value to the Reddit social media platform.
                        </p>
                    </div>

                </div>
            </div >

            <div className="container text-center">
                <br></br>
                
                <br></br>
                <p>TitleAi is focused on tackling the disconnect in relevance and interpretability between a Reddit title and its post, 
                    which is a pervasive issue among the various Reddit communities across the platform.. Using data scraped from Reddit, 
                    we are finetuning two state of the art summarization models in T5 and BART to produce more accurate and relevant titles 
                    that meet standards expected from the average Reddit user, thereby improving the ability of all Reddit users to find 
                    topical information and increasing the ease with which a user can create a post. We intend to use our MVP as a proof 
                    of concept that Natural Language Generation tools are an added value to the Reddit social media platform.</p>
                <br></br>
                <h1>Why It's Important</h1>
                <br></br>
                <p>There were an estimated 430 million Reddit users monthly and 300 million posts in 2021. 
                    After conducting online research and market analysis, we estimate that 45% of content-driven reddit 
                    posts contain either sub optimal title lengths, irrelevant title content, and/or ineffective titles. 
                    We researched everything from what causes content engagement, to what a high quality title should consist of, 
                    from newspaper headlines to blog posts, and there was a consensus on having a certain length of words or characters, 
                    effectively grabbing the reader`s attention, and accurately summarizing the content.</p>
                <br></br>
                <p>Now, Why do we care about irrelevant or ineffective titles? Reddit is structured such that content is socially curated 
                    and promoted by site members through engagement, specifically through their voting system. The average monthly content-driven 
                    reddit posts is approximately 2 million, so close to a million posts won`t get the engagement they`re looking for due to "bad" 
                    titles. However with optimized titles, not only do content creators benefit through increased engagement on their posts, the 
                    entire community benefits because the filtration speed for good and bad content will increase exponentially.</p>
                <br></br>
                <h1>How It Works</h1>
                <br></br>
                <p>It's as simple as:
                    1. Write or copy/paste the Reddit content you are wanting a title for
                    2. Click submit
                    3. 
                </p>
                <br></br>
                <h2>Behind the Scenes</h2>
                <br></br>
                <h3>NLP Models</h3>
                <p>There are two primary models being used in the generated titles (this should be underlined)</p>
                <p>BART: employs a diverse set of tasks where the model attempts to generate the correct output
                    sequence from scrambled and masked text,  forces the model to understand the entire context 
                    of an input sequence, and is useful therefore extremely useful for the summarization task</p>
                <p>T5: Utilizes transfer learning, which is when a model trained on a singular general task is used for another related task</p>
                <br></br>
                <h3>Model Evaluation</h3>
                <p>Add info about Model Evaluation</p>
                <br></br>
                <h3>Data Source</h3>
                <p>The data used in our training and testing datasets compose raw re  ddit data, 
                    which was extracted from a group of individuals at Pushshift.io(link?) using the Python Reddit API Wrapper (PRAW). 
                    The raw data contained posts that were not in-scope towards our goal; in order to obtain content-driven reddit posts,
                    the data was cleansed to ensure only the most optimal data was used for training and testing purpopses.</p>
                <br></br>
                <button className="btn btn-primary">
                    Launch demo modal
                </button>
            </div>
        </div>
    )

};

export default About