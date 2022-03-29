import React from 'react'
import pfp from "../screens/my pfp.jpeg"
import "../screens/about.css"
const About = () =>
{
    return (
      <body>
        <div className="container emp-profile">
          <form method="">
            <div className="row mt-3">
              <div className="col-md-4">
                <div className="profile-img">
                  <img src={pfp} alt="pfp"></img>
                  <br></br>
                  <br></br>
                  <div className="bt">
                    <input
                      type="submit"
                      className="profile-edit-btn"
                      name="btnAddMore"
                      value="Edit Profile"
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="profile-head">
                  <h5>Abhisehk Pal</h5>
                  <h5>Btech CSE</h5>
                  <h5>6th semester</h5>
                  <br></br>
                  <br></br>
                  <br></br>
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="personal-tab"
                        data-toggle="tab"
                        href="#personal"
                        role="tab"
                      >
                        Personal Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="address-tab"
                        data-toggle="tab"
                        href="#address"
                        role="tab"
                      >
                        Communication Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="edu-tab"
                        data-toggle="tab"
                        href="#edu"
                        role="tab"
                      >
                        Academic Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="home-tab"
                        data-toggle="tab"
                        href="#docs"
                        role="tab"
                      >
                        Doccument Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="home-tab"
                        data-toggle="tab"
                        href="#acc"
                        role="tab"
                      >
                        Account Status
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              {/* left side url */}

              <div className="col-md-4">
                <div className="profile-work">
                  <a
                    href="https://www.linkedin.com/in/abhishek-pal-952541152/"
                    target="_smile"
                  >
                    LinkedIn
                  </a>
                  <br></br>
                  <br></br>
                  <a href="https://github.com/Abhishek2717" target="_smile">
                    GitHub
                  </a>
                  <br></br>
                  <br></br>
                  <a href="https://leetcode.com/abhi2717/" target="_smile">
                    LeetCode
                  </a>
                  <br></br>
                  <br></br>
                  <a
                    href="https://www.hackerrank.com/work/login"
                    target="_smile"
                  >
                    HackerRank
                  </a>
                  <br></br>
                  <br></br>
                  <a
                    href="https://www.hackerearth.com/@abhishek8130"
                    target="_smile"
                  >
                    HackerEarth
                  </a>
                  <br></br>
                </div>
              </div>

              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade"
                    id="parent"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>Father's Name</label>
                      </div>
                      <div className="col-md-6">
                        <label>Bhagwan Singh Pal</label>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>Father's Mobile Number</label>
                      </div>
                      <div className="col-md-6">
                        <label>9752283140</label>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>Mother's Name</label>
                      </div>
                      <div className="col-md-6">
                        <label>Suman Pal</label>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>Mother's Mobile Number</label>
                      </div>
                      <div className="col-md-6">
                        <label>7300600138</label>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="personal"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <label>Abhishek Pal</label>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>Father's Name</label>
                      </div>
                      <div className="col-md-6">
                        <label>Mr. Bhagwan Singh Pal</label>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>Mother's Name</label>
                      </div>
                      <div className="col-md-6">
                        <label>Mrs. Suman Pal</label>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>Date of Birth</label>
                      </div>
                      <div className="col-md-6">
                        <label>17 June 2000</label>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="address"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <label>abhishekpal.geu@gmail.com</label>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>Phone Number</label>
                      </div>
                      <div className="col-md-6">
                        <label>9027385767</label>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>Permanent Address</label>
                      </div>
                      <div className="col-md-6">
                        <label>27/2 karanpur road,Dehradun</label>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="edu"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>University Roll Number</label>
                      </div>
                      <div className="col-md-6">
                        <label>2014524</label>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>CGPA(in %)</label>
                      </div>
                      <div className="col-md-6">
                        <label>89</label>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>Marks in XII(in %)</label>
                      </div>
                      <div className="col-md-6">
                        <label>84</label>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>Marks in X(in %)</label>
                      </div>
                      <div className="col-md-6">
                        <label>74</label>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="acc"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>Account Verification</label>
                      </div>
                      <div className="col-md-6">
                        <label>Verified</label>
                      </div>
                    </div>
                    
                  </div>
                  <div
                    className="tab-pane fade"
                    id="docs"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>Aadhar Number</label>
                      </div>
                      <div className="col-md-6">
                        <label>965990906634</label>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="head col-md-6">
                        <label>PAN Number</label>
                      </div>
                      <div className="col-md-6">
                        <label>65459759010954</label>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </body>
    );
}
export default About;