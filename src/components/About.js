import React from 'react'
import './about.css'
const About = (props) => {
  return (
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#212529' : 'white'}} >

<section style={{marginTop:'6%',marginBottom:'10%'}}>
        <div className="container">
            <div className="row">

                <div className="col-lg-12 col-12 text-center">

                    <h2 className="mb-5 text-danger">DailyDose a NewsApp</h2>
                </div>

                <div className="col-lg-4 col-12">
                    <nav id="navbar-example3" className="h-100 flex-column align-items-center">
                        <nav className="nav nav-pills flex-column">
                            <a className="nav-link smoothscroll" href="#introduction">Introduction</a>

                            <a className="nav-link smoothscroll" href="#features"><strong>Features Privided</strong></a>

                            <a className="nav-link smoothscroll" href="#item-3">Chapter 2: <strong>Work less, do more</strong></a>

                            <a className="nav-link smoothscroll" href="#item-4">Chapter 3: <strong>Delegate</strong></a>

                            <a className="nav-link smoothscroll" href="#item-5">Chapter 4: <strong>Habits</strong></a>
                        </nav>
                    </nav>
                </div>

                <div className="col-lg-8 col-12">
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2">
                        <div className="scrollspy-example-item" id="introduction">
                            <h5>Introducing <span style={{color:'red'}}>DailyDose</span> </h5>

                            <p>Welcome to DailyDose News App, your go-to source for staying informed and up-to-date on the latest happenings around the globe. With our comprehensive coverage spanning politics, technology, entertainment, sports, and more, you'll never miss a beat. What sets us apart is our commitment to providing a personalized experience tailored to your interests. Customize your news feed to prioritize the topics and sources that matter most to you, ensuring you get the information you care about most. Our breaking news alerts deliver important updates straight to your device, keeping you in the know even on the busiest of days. Plus, with offline reading capabilities, you can save articles to enjoy later, even without an internet connection. Our user-friendly interface makes navigating the app a breeze, so you can spend less time searching for news and more time staying informed. And when you come across shareworthy content, easily spread the word to friends and family via social media, email, or messaging apps. Welcome to a smarter way to stay informed - welcome to DailyDose News App.</p>

                            <p className="blockquote">
                            "Stay informed, stay inspired. Your daily dose of news awaits."</p>

                                                           </div>

                        <div className="scrollspy-example-item" id="features">
                            <h5>Features that <span style={{color:'red'}}>dailyDose</span> Provides</h5>

                            <p> <strong>1. Real-Time Updates:</strong> Deliver news updates in real-time without the need for manual refreshing, keeping users informed of the latest developments as they happen.</p>

                            <p><strong>2. Interactive News Feed:</strong> Implement an interactive and dynamic news feed that displays headlines, images, and summaries, with options to filter by category or topic.</p>

                            <p><strong>3. Social Media Integration:</strong> Enable users to share articles easily on social media platforms like Facebook, Twitter, LinkedIn, and others, increasing the app's reach and user engagement.</p>

                            <p><strong>4. Search and Filtering:</strong> Provide robust search functionality allowing users to search for specific topics, keywords, or articles within the app's content. Additionally, offer advanced filtering options to refine search results based on criteria such as date, relevance, or source.</p>

                            <p><strong>5. Multi-language Support:</strong> Cater to a diverse audience by offering support for multiple languages, allowing users to consume news content in their preferred language.</p>

                            <p><strong>6. Accessibility Features:</strong> Ensure accessibility compliance by incorporating features such as screen reader compatibility, keyboard navigation, and alt text for images to accommodate users with disabilities.</p>

                            <p><strong>7. Advertising Integration:</strong> Monetize the app through strategically placed advertisements while ensuring a non-intrusive user experience. Consider offering an ad-free subscription option for users who prefer an ad-free experience.</p>

                            <p><strong>8. Content Curation Tools:</strong> Provide editors with tools to curate and organize news content effectively, ensuring the quality and relevance of articles displayed to users.</p>

                            <p><strong>9. Analytics and Insights:</strong> Implement analytics tools to track user engagement, behavior, and preferences, enabling data-driven decision-making and continuous optimization of the app.</p>

                                                                <div className="row">
                                <div className="col-lg-6 col-12 mb-3">
                                    {/* <img src="images/portrait-mature-smiling-authoress-sitting-desk.jpg" className="scrollspy-example-item-image img-fluid" alt=""/> */}
                                </div>

                                <div className="col-lg-6 col-12 mb-3">
                                    {/* <img src="images/businessman-sitting-by-table-cafe.jpg" className="scrollspy-example-item-image img-fluid" alt=""/> */}
                                </div>
                            </div>

                            <p>If you need some specific CSS templates, you can Google with keywords such as templatemo gallery, templatemo digital marketing, etc.</p>
                        </div>

                        <div className="scrollspy-example-item" id="item-3">
                            <h5>Work less, do more</h5>

                            <p>"Work less, do more" encapsulates the idea of achieving greater productivity and efficiency while reducing the overall time spent on tasks. It emphasizes the importance of working smarter rather than harder, focusing on high-impact activities, eliminating time-wasting tasks, and optimizing workflows to accomplish more in less time. The goal is to strike a balance between productivity and well-being, allowing individuals to achieve their goals without sacrificing their personal lives or burning out.</p>

                            <div className="row align-items-center">
                                <div className="col-lg-6 col-12">
                                    {/* <img src="images/tablet-screen-contents.jpg" className="img-fluid" alt=""/> */}
                                </div>

                                <div className="col-lg-6 col-12">
                                    <p>Modern ebook ever</p>

                                    <p><strong>This could describe the most up-to-date advancements and features in ebook technology.</strong></p>
                                </div>
                            </div>
                        </div>

                        <div className="scrollspy-example-item" id="item-4">
                            <h5>Delegate</h5>

                            <p>Delegation, the art of entrusting tasks and responsibilities to others, is a cornerstone of effective leadership and productivity.</p>

                            <p>Delegating tasks allows leaders to focus their time and energy on high-impact activities, thereby increasing overall efficiency and productivity.</p>

                            
                            {/* <img src="images/portrait-mature-smiling-authoress-sitting-desk.jpg" className="scrollspy-example-item-image img-fluid mb-3" alt=""/> */}

                           
                        </div>

                        <div className="scrollspy-example-item" id="item-5">
                            <h5>Habits</h5>

                            <p>Habits are routine behaviors or actions that are performed regularly and often unconsciously. </p>

                            <p>Habits can be both positive and negative, influencing various aspects of life including health, productivity, relationships, and overall well-being. Positive habits contribute to personal growth and success, while negative habits can hinder progress and lead to undesirable outcomes. </p>

                            

                            <blockquote className="blockquote">Habits often operate within a loop consisting of a cue or trigger, a routine or behavior, and a reward or consequence, which reinforces the habit loop. </blockquote>

                            <p>You may browse website for more CSS templates. Thank you for visiting our website.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

            {/* <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong className='fs-5'> Analyze your Text :</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils gives you a way to Analyze your text Quickly and Efficiently. be it word count, Character Count or</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong className='fs-5'>Free to Use :</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text . textutils reports the number of words and characters . thus it is suitable for writing text with word/ charaacter limit .
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong className='fs-5'>Browser Compatible :</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                 this word counter software works in any web browsers such as chrome , firefox , internet Explorer, Safari , Opera . it suits to count characters in facebook ,blogs , books , excel , documents , essays  etc.
            </div>
            </div>
        </div>
        </div> */}
    </div>
  )
}
export default About


