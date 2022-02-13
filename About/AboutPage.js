import React from "react";
import "./aboutpage.css";
import UserHeader from "../../components/UserHeader";

function AboutPage() {
  return (
    <div className="about">
      <UserHeader />
      <div className="about-desc">
        <div className="desc-1">
          <div style={{ position: "relative", flex: "3" }}>
            <span className="perfect-center" style={{width:"100%"}}>What brings up this idea :</span>
          </div>
          <div style={{ position: "relative", flex: "9" }}>
            <span className="perfect-center desc-text">
              One of the biggest problems that we as a student 
              have faced in our lives is Unemployability. <br></br>
              Problems: <br></br>1. Inspite of having all the good tech
              skills, misses oppurtunity as being unaware of jobs relevant to
              their skills. <br></br>2. Being active on every job portal looking for jobs
              is cumbersome and most of the time we return bare handed. <br></br>3. Don't
              know which tech should be explored and have good career in
              present. <br></br>4. As companies, reaching out to talent pool as large as
              possible so as every potential candidate is being known of the job
              post
            </span>
          </div>
        </div>
        <div className="desc-2">
          <div style={{ position: "relative", flex: "3" }}>
            <span className="perfect-center" style={{width:"100%"}}>
              How we tackle this :
            </span>
          </div>
          <div style={{ position: "relative", flex: "9" }}>
            <span className="perfect-center desc-text">
              <b>JOB-O-MANIA</b> : A platform which connects student community and
              companies fulfilling their respective needs. Students will get
              personalized mail for every job matching to their skills and
              Companies have the assurance that their job post is being notified
              to every potential candidate. Not only mails but also a platform
              where every student can look out job posted by companies. Also a
              great interpretation of stats of trending and most relevant skills
              one should have.
            </span>
          </div>
        </div>
      </div>
      <h1>Meet the Developers</h1>
      <div className="about-dev">
        <div class="cards-container">
          <div class="card-container">
            <div class="card">
              <div class="front">
                <img src="images/himanshu.jpeg" />
                <h3>Himanshu Ranjan</h3>
                <p>Full Stack Developer</p>
                <p>Algorithms Expert</p>
                <div className="social-media">
                  <a
                    href="https://github.com/Himanshuranjan848"
                    target="_blank"
                  >
                    <img src="images/github.png" />
                  </a>
                  <a
                    href="https://m.facebook.com/100004139138512/"
                    target="_blank"
                  >
                    <img src="images/facebook1.png" />
                  </a>
                  <a
                    href="https://mobile.twitter.com/Himansh34063115"
                    target="_blank"
                  >
                    <img src="images/twitter.png" />
                  </a>
                  <a
                    href="https://www.linkedin.com/mwlite/in/himanshu-ranjan-542857190"
                    target="_blank"
                  >
                    <img src="images/linkedin.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="card-container">
            <div class="card">
              <div class="front">
                <img src="images/yash.jpg" />
                <h3>Yash Kumar</h3>
                <p>Full Stack Developer</p>
                <p>Problem Solver</p>
                <div className="social-media">
                  <a href="https://github.com/Yash-Kr" target="_blank">
                    <img src="images/github.png" />
                  </a>
                  <a
                    href="https://m.facebook.com/100039875958208/"
                    target="_blank"
                  >
                    <img src="images/facebook1.png" />
                  </a>
                  <a
                    href="https://mobile.twitter.com/@Name_is_Yash_"
                    target="_blank"
                  >
                    <img src="images/twitter.png" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yash-kr/"
                    target="_blank"
                  >
                    <img src="images/linkedin.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="card-container">
            <div class="card">
              <div class="front">
                <img src="images/shubham.png" />
                <h3>Shubham Singh</h3>
                <p>Back End Developer</p>
                <p>Algorithms Expert</p>
                <p></p>
                <div className="social-media">
                  <a href="https://github.com/shubham-2702" target="_blank">
                    <img src="images/github.png" />
                  </a>
                  <a href="#">
                    <img src="images/facebook1.png" />
                  </a>
                  <a href="#">
                    <img src="images/twitter.png" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shubham-singh-976863190"
                    target="_blank"
                  >
                    <img src="images/linkedin.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
