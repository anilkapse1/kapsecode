import React from "react";
import styled from "styled-components";

const Me = () => {
  const Mecontainer = styled.div`
    p {
      font-size: 2vw;
    }
    .me_section {
      font-family: "Poppins", sans-serif;
      border: 1px solid #add8e6;

      .resume_section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .left_section {
          flex: 1 0 55%;
          color: #00008b;
          padding: 20px;

          ul {
            list-style-type: none;
            li {
              color: black;
              margin-bottom: 10px;
              font-weight: 400;
              font-size: 1.2vw;
              line-height: 2;
            }
          }

          .work_history {
            margin-bottom:20px;
            h2 {
              border: 1px solid black;
              border-width: 1px 0;
              margin-bottom: 20px;
            }
            .work_history_data {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;

              .work_history_left_section {
                flex: 1 0 35%;
                p {
                  font-size: 1.5vw;
                }
              }
              .work_history_right_section {
                flex: 1 0 65%;
                h2 {
                  border: none;
                  font-size: 1.5vw;
                }
                span {
                }
                ul {
                  list-style-type: disc;
                  li {
                    color: black;
                    margin-bottom: 10px;
                    font-weight: 400;
                    font-size: 1.2vw;
                    line-height: 2;
                  }
                }
              }
            }
          }
        }

        .right_section {
          flex: 1 0 35%;
          background: #00008b;
          color: white;
          padding: 20px;
          .name_title{
            h1{
                font-size:4vw;
            }
            span{
                text-transform:uppercase;
            }
          }
          .personal_info{
            margin-top:20px;
            h2 {
              border: 1px solid white;
              border-width: 1px 0;
              margin-bottom: 20px;
            }
            .list{
                margin-bottom:20px;
                h3{

                }
                p{

                }
            }
          }
        }
      }
    }
  `;
  return (
    <Mecontainer>
      <p>
        I am happy to share details about my education, work and certification{" "}
      </p>
      <div className="me_section">
        <div className="resume_section">
          <div className="left_section">
            <ul>
              <li>
                Senior UI Developer with 6 year’s experience and specialization
                in Frontend development. Passionate for responsive website
                development, Web application and writing a frontend blog and a
                firm believer in the mobile-first approach and penchant for
                meeting deadlines.
              </li>

              <li>https://anilkapse1.github.io/kapsecode/</li>
            </ul>

            <div className="work_history">
              <h2>Work History</h2>
              <div className="work_history_data">
                <div className="work_history_left_section">
                  <p>2016-03 - 2017-03</p>
                </div>
                <div className="work_history_right_section">
                  <h2>Web Developer</h2>
                  <span>GCI NETWORK PVT LTD, Malad, Maharashtra</span>
                  <ul>
                    <li>
                      Designed, implemented and monitored web pages and sites
                      for continuous improvement.
                    </li>
                    <li>
                      Created site layout and user interface using HTML and CSS
                      practices.
                    </li>
                  </ul>
                </div>

                <div className="work_history_left_section">
                  <p>2017-05 - Current</p>
                </div>
                <div className="work_history_right_section">
                  <h2>Senior UI Developer</h2>
                  <span>ORION INNOVATION, POWAI, Mumbai, Maharashtra</span>
                  <ul>
                    <li>Managed complete code performance.</li>
                    <li>
                      Coordinated for entire project related activities to be in
                      tune with the core business objectives
                    </li>
                    <li>
                      Analyzed the project requirement for further proceeding as
                      well as delivered and implemented the project as per
                      scheduled milestones.
                    </li>
                    <li>
                      Developing React applications with Redux and other
                      relevant technologies.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* education area */}
            <div className="work_history">
              <h2>Education</h2>
              <div className="work_history_data">
                <div className="work_history_left_section">
                  <p>2008-06 -2012-01</p>
                </div>
                <div className="work_history_right_section">
                  <h2>B.Sc. (IT): Information Technology</h2>
                  <span>Viva College,Virar, Mumbai University</span>
                </div>
              </div>
            </div>

            {/* language area */}
            <div className="work_history">
              <h2>Language</h2>
              <div className="work_history_data">
                <div className="work_history_left_section">
                </div>
                <div className="work_history_right_section">
                  <span>Hindi, English, Gujarati, Marathi</span>
                </div>
              </div>
            </div>

            {/* interest area */}
            <div className="work_history">
              <h2>Interests</h2>
              <div className="work_history_data">
                <div className="work_history_left_section"></div>
                <div className="work_history_right_section">
                  <h2>PERSONAL DETAILS</h2>
                  <div style={{marginBottom:'10px'}}>
                    <span>Date of Birth: 22-May-1990</span>
                  </div>
                  <div style={{marginBottom:'10px'}}>
                    <span>
                      Languages Known: Hindi, English, Gujarati and Marathi
                    </span>
                  </div>
                  <div style={{marginBottom:'10px'}}>
                    <span>
                      Mailed Address: At Post Khattalawada, Rohitvas behind
                      grampanchayat office, St-Sanjan, TalUmergam, Dist - Valsad
                      , Pin - 396120 Gujarat
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right_section">
               <div className="name_title">
                    <h1>Anil R Kapse</h1>
                    <span>Senior UI Developer</span>
               </div>     
               <div className="personal_info">
                    <h2>Personal Info</h2>
                    <div className="list">
                        <h4>Phone</h4>
                        <p>
                            +91 97 1212 9313
                        </p>
                    </div>
                    <div className="list">
                        <h4>E-mail</h4>
                        <p>
                            mr.anilkapse@gmail.com
                        </p>
                    </div>
                    <div className="list">
                        <h4>LinkedIn</h4>
                        <p>
                        https://www.linkedin.com/in/anil-kapse/
                        </p>
                    </div>
               </div> 

               <div className="personal_info">
                    <h2>Skills</h2>
                    <div className="list">
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>SASS</p>
                    <p>Bootstrap5.3</p>
                    <p>Jquery</p>
                    <p>JavaScript</p>
                    <p>ES6</p>
                    <p>ReactJs</p>
                    <p>NodeJs</p>
                    <p>ExpressJs</p>
                    <p>MongoDB</p>
                    <p>RestApi</p>
                    <p>Git</p>
                    </div>
               </div> 

          </div>
        </div>
      </div>
    </Mecontainer>
  );
};

export default Me;
