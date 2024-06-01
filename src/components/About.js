import React from "react";
import "./about.css";
const About = (props) => {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#000",
    backgroundColor: props.mode === "dark" ? "#212529   " : "white",
  };

  return (
    <div
      className="container"
      style={{
        color: props.mode === "dark" ? "white" : "#042743",
        backgroundColor: props.mode === "dark" ? "#212529" : "white",
      }}
    >
      <section style={{ marginTop: "6%", marginBottom: "10%" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center">
              <h2 className="mb-5" style={{ color: "red" }}>
                DailyDose a NewsApp
              </h2>
              <p
                style={{
                  borderBottom: "4px solid red",
                  width: "30%",
                  margin: "auto",
                  borderRadius: "10px",
                  marginTop: "-32px",
                }}
              ></p>
            </div>

            <div className="col-lg-4 col-12">
              <nav
                id="navbar-example3"
                className="h-100 flex-column align-items-center"
              >
                <nav
                  className="nav nav-pills flex-column"
                  style={{
                    backgroundColor:
                      props.mode === "dark" ? "#71727538" : "white",
                  }}
                >
                  <a className="nav-link smoothscroll" href="#introduction">
                    <strong>Introduction</strong>
                  </a>

                  <a className="nav-link smoothscroll" href="#Features">
                    <strong>Features Provided</strong>
                  </a>

                  <a className="nav-link smoothscroll" href="#About-Developers">
                    <strong>About Developers</strong>
                  </a>

                  <a className="nav-link smoothscroll" href="#FAQ">
                    <strong>Why to choose DailyDose?</strong>
                  </a>

                  {/* <a className="nav-link smoothscroll" href="#item-5">Chapter 4: <strong>Habits</strong></a> */}
                </nav>
              </nav>
            </div>

            <div className="col-lg-8 col-12">
              <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example3"
                data-bs-smooth-scroll="true"
                className="scrollspy-example-2"
              >
                {/* Introduction Started */}
                <div className="scrollspy-example-item" id="introduction">
                  <h4 style={myStyle}>
                    Introducing <span style={{ color: "red" }}>DailyDose</span>{" "}
                  </h4>
                  <p
                    style={{ borderBottom: "3px solid red", maxWidth: "33%" }}
                  ></p>

                  <p>
                    Welcome to DailyDose News App, your go-to source for staying
                    informed and up-to-date on the latest happenings around the
                    globe. With our comprehensive coverage spanning politics,
                    technology, entertainment, sports, and more, you'll never
                    miss a beat. What sets us apart is our commitment to
                    providing a personalized experience tailored to your
                    interests. Customize your news feed to prioritize the topics
                    and sources that matter most to you, ensuring you get the
                    information you care about most. Our breaking news alerts
                    deliver important updates straight to your device, keeping
                    you in the know even on the busiest of days. Plus, with
                    offline reading capabilities, you can save articles to enjoy
                    later, even without an internet connection. Our
                    user-friendly interface makes navigating the app a breeze,
                    so you can spend less time searching for news and more time
                    staying informed. And when you come across shareworthy
                    content, easily spread the word to friends and family via
                    social media, email, or messaging apps. Welcome to a smarter
                    way to stay informed - welcome to DailyDose News App.
                  </p>

                  <div
                    className="logo"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src="/images/logo.png"
                      alt="DailyDose"
                      title="DailyDose"
                      style={{ maxWidth: "50%" }}
                    />
                  </div>

                  <p
                    className="blockquote"
                    style={{
                      color: props.mode === "dark" ? "white" : "#042743",
                      backgroundColor:
                        props.mode === "dark" ? "#717275" : "white",
                    }}
                  >
                    "Stay informed, stay inspired. Your daily dose of news
                    awaits."
                  </p>
                </div>
                {/* Introduction Ended */}

                {/* Features Started */}
                <div className="scrollspy-example-item">
                  <h4 id="Features" style={myStyle}>
                    Features that{" "}
                    <span style={{ color: "red" }}>dailyDose</span> Provides
                  </h4>
                  <p
                    style={{ borderBottom: "3px solid red", maxWidth: "49%" }}
                  ></p>

                  <p>
                    {" "}
                    <strong>1. Real-Time Updates:</strong> Deliver news updates
                    in real-time without the need for manual refreshing, keeping
                    users informed of the latest developments as they happen.
                  </p>

                  <p>
                    <strong>2. Interactive News Feed:</strong> Implement an
                    interactive and dynamic news feed that displays headlines,
                    images, and summaries, with options to filter by category or
                    topic.
                  </p>

                  <p>
                    <strong>3. Social Media Integration:</strong> Enable users
                    to share articles easily on social media platforms like
                    Facebook, Twitter, LinkedIn, and others, increasing the
                    app's reach and user engagement.
                  </p>

                  <p>
                    <strong>4. Search and Filtering:</strong> Provide robust
                    search functionality allowing users to search for specific
                    topics, keywords, or articles within the app's content.
                    Additionally, offer advanced filtering options to refine
                    search results based on criteria such as date, relevance, or
                    source.
                  </p>

                  <p>
                    <strong>5. Multi-language Support:</strong> Cater to a
                    diverse audience by offering support for multiple languages,
                    allowing users to consume news content in their preferred
                    language.
                  </p>

                  <p>
                    <strong>6. Accessibility Features:</strong> Ensure
                    accessibility compliance by incorporating features such as
                    screen reader compatibility, keyboard navigation, and alt
                    text for images to accommodate users with disabilities.
                  </p>

                  <p>
                    <strong>7. Advertising Integration:</strong> Monetize the
                    app through strategically placed advertisements while
                    ensuring a non-intrusive user experience. Consider offering
                    an ad-free subscription option for users who prefer an
                    ad-free experience.
                  </p>

                  <p>
                    <strong>8. Content Curation Tools:</strong> Provide editors
                    with tools to curate and organize news content effectively,
                    ensuring the quality and relevance of articles displayed to
                    users.
                  </p>

                  <p>
                    <strong>9. Analytics and Insights:</strong> Implement
                    analytics tools to track user engagement, behavior, and
                    preferences, enabling data-driven decision-making and
                    continuous optimization of the app.
                  </p>
                </div>
                {/* Features Ended */}

                {/* About Developers Started */}
                <div className="scrollspy-example-item" id="About-Developers">
                  <h4 style={myStyle}>
                    About Developers of{" "}
                    <span style={{ color: "red" }}>DailyDose</span>
                  </h4>
                  <p
                    style={{ borderBottom: "3px solid red", maxWidth: "46%" }}
                  ></p>

                  <ul>
                    <li>
                      {" "}
                      <p>
                        A DailyDose is a News App that is free to use. it Give
                        us Daily News Update. In this you get the news according
                        to the category provided.
                      </p>
                    </li>
                    <li>
                      <p>
                        This Project is Made Under the Supervision of{" "}
                        <span style={{ color: "red" }}>
                          Mr. Avinash Shrivastav
                        </span>{" "}
                        and Created by{" "}
                        <span style={{ color: "red" }}>Aman Mittal</span> and{" "}
                        <span style={{ color: "red" }}>Love Rathore</span>.
                      </p>
                    </li>
                    <li>
                      <p>
                        Credits for Creativity , Color and Designing goes to{" "}
                        <span
                          style={{
                            color: "red",
                            fontFamily: "monotype corsiva",
                            fontSize: "24px",
                          }}
                        >
                          Love Rathore
                        </span>{" "}
                        (<strong>Designer</strong>)
                      </p>
                    </li>
                    <li>
                      <p>
                        Credits for Development,Implementation and Project Leads
                        goes to{" "}
                        <span
                          style={{
                            color: "red",
                            fontFamily: "monotype corsiva",
                            fontSize: "24px",
                          }}
                        >
                          Aman Mittal
                        </span>{" "}
                        (<strong>Project Leader, Developer</strong>)
                      </p>
                    </li>
                  </ul>

                  <div className="row">
                    <div className="photo col-lg-6 col-12 mb-3">
                      <img
                        src="/images/ph1.jpg"
                        className=" scrollspy-example-item-image img-fluid"
                        alt="Project Leader"
                        title="Project Leader"
                        style={{ height: "100%" }}
                      />
                    </div>

                    <div className="photo col-lg-6 col-12 mb-1">
                      <img
                        src="/images/love2.jpg"
                        className="scrollspy-example-item-image img-fluid"
                        alt="Designer"
                        title="Designer"
                        style={{ height: "95%" }}
                      />
                    </div>
                  </div>

                  <div className="contact">
                    <ul>
                      <li>
                        For More details you can contact us on 👉👉
                        <a
                          href="https://alphacoderaman.netlify.app"
                          style={{ color: "red" }}
                        >
                          Click Me
                        </a>
                        👈👈
                      </li>
                    </ul>
                  </div>
                </div>
                {/* About Developers Ended */}

                {/* FAQ Started */}
                <div className="scrollspy-example-item" id="FAQ">
                  <h4 style={myStyle}>
                    FAQ (<span style={{ color: "red" }}>F</span>requently{" "}
                    <span style={{ color: "red" }}>A</span>sked{" "}
                    <span style={{ color: "red" }}>Q</span>uestion)
                  </h4>
                  <p
                    style={{ borderBottom: "3px solid red", maxWidth: "50%" }}
                  ></p>

                  <h5 style={myStyle}>
                    1.What is <span style={{ color: "red" }}>DailyDose</span>{" "}
                    News App?
                  </h5>
                  <p>
                    DailyDose News App is your go-to source for staying informed
                    about current events, breaking news, and trending stories
                    from around the world. We curate content from reputable
                    sources to ensure that you receive accurate and up-to-date
                    information.
                  </p>

                  <h5 style={myStyle}>2. How do I navigate the app?</h5>
                  <p>
                    Our app is designed to be user-friendly and intuitive.
                    Simply browse through the different sections, such as Top
                    Stories, Politics, Technology, and more, to find the news
                    that interests you. You can also use the search function to
                    look for specific topics or articles.
                  </p>

                  <h5 style={myStyle}>
                    3. Is the news on{" "}
                    <span style={{ color: "red" }}>DailyDose</span> App
                    reliable?
                  </h5>
                  <p>
                    {" "}
                    Yes, we take the credibility of our news very seriously. We
                    have a team of experienced journalists who verify the
                    information before it is published on our platform.
                    Additionally, we source our news from reputable sources to
                    ensure accuracy and reliability.
                  </p>

                  <h5 style={myStyle}>4. Can I customize my news feed?</h5>
                  <p>
                    Absolutely! DailyDose News App allows you to personalize
                    your news feed based on your interests. You can choose to
                    follow specific topics, sources, or even customize your feed
                    based on your location.
                  </p>

                  <h5 style={myStyle}>5. How often is the news updated?</h5>
                  <p>
                    We update our news feed regularly throughout the day to keep
                    you informed about the latest developments. You can expect
                    to see new articles and updates as they happen.
                  </p>

                  <h5 style={myStyle}>
                    6. Is <span style={{ color: "red" }}>DailyDose</span> News
                    App free to use?
                  </h5>
                  <p>
                    Yes, our app is free to download and use. However, some
                    premium features may require a subscription.
                  </p>

                  <h5 style={myStyle}>
                    7. How can I provide feedback or report a problem?
                  </h5>
                  <p>
                    We value your feedback! If you have any suggestions,
                    questions, or encounter any issues while using our app,
                    please don't hesitate to contact our support team. You can
                    reach us through the app or via email at{" "}
                    <a href="mailto:support@dailydosenews.com.">
                      support@dailydosenews.com.
                    </a>
                  </p>

                  <p>
                    We hope this FAQ section helps address any questions you may
                    have about the DailyDose News App. Thank you for choosing us
                    as your trusted source for news updates!
                  </p>

                  {/* <img src="images/portrait-mature-smiling-authoress-sitting-desk.jpg" className="scrollspy-example-item-image img-fluid mb-3" alt=""/> */}
                </div>
                {/* FAQ Ended */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
