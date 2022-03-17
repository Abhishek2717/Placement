import React from 'react'
import pfp from "../screens/my pfp.jpeg"
import "../screens/about.css"
const About = () =>
{
    return (
      <>
        <div className="container emp-profile">
          <form method="">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img src={pfp} alt="pfp"></img>
                </div>
              </div>

              <div className="col-md-6">
                <div className="profile-head">
                  <h5>Prakhar Mamgain</h5>
                  <h5>Btech CST</h5>
                  <p className="semester mt-3 mb-5">6</p>

                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                      >
                        Basic Info
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="parent-tab"
                        data-toggle="tab"
                        href="#parent"
                        role="tab"
                      >
                        Parents Info
                      </a>
                    </li>
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
                        Address
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
                        Educational Details
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2">
                <input
                  type="submit"
                  className="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                ></input>
              </div>
            </div>

            <div className="row">
              {/* left side url */}

              <div className="col-md-4">
                <div className="profile-work">
                  <p>Work Link</p>
                  <a
                    href="https://www.linkedin.com/in/prakhar-mamgain-746b341ab/"
                    target="_smile"
                  >
                    LinkedIn
                  </a>
                  <br></br>
                  <a href="https://github.com/ProPrakhar332" target="_smile">
                    GitHub
                  </a>
                  <br></br>
                  <a href="https://leetcode.com/ProPrakhar/" target="_smile">
                    LeetCode
                  </a>
                  <br></br>
                  <a
                    href="https://www.hackerrank.com/leviquackerman0"
                    target="_smile"
                  >
                    HackerRank
                  </a>
                  <br></br>
                  <a
                    href="https://www.hackerearth.com/@mamgain332prakhar"
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
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>Prakhar Mamgain</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>mamgain332prakhar@gmail.com</p>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>DOB</label>
                      </div>
                      <div className="col-md-6">
                        <p>22-09-2001</p>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Mobile No.</label>
                      </div>
                      <div className="col-md-6">
                        <p>1454654654545145</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="parent"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Father's Name</label>
                      </div>
                      <div className="col-md-6">
                        <label>Prabodh Mamgain</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Father's Mobile Number</label>
                      </div>
                      <div className="col-md-6">
                        <label>9759010954</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Mother's Name</label>
                      </div>
                      <div className="col-md-6">
                        <label>Anita Mamgain</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Mother's Mobile Number</label>
                      </div>
                      <div className="col-md-6">
                        <label>9412152552</label>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="personal"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>DAte of Birth</label>
                      </div>
                      <div className="col-md-6">
                        <label>22-09-2001</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Gender</label>
                      </div>
                      <div className="col-md-6">
                        <label>Male</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Nationality</label>
                      </div>
                      <div className="col-md-6">
                        <label>Indian</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Blood Group</label>
                      </div>
                      <div className="col-md-6">
                        <label>B-</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Aadhar Number</label>
                      </div>
                      <div className="col-md-6">
                        <label>12216546854151</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>PAN Number</label>
                      </div>
                      <div className="col-md-6">
                        <label>54646454654654</label>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="address"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Permanent Address</label>
                      </div>
                      <div className="col-md-6">
                        <label>74/15 Ashok Vihar,Dehradun</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Permanent Address PIN Code</label>
                      </div>
                      <div className="col-md-6">
                        <label>248001</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Correspondence Address</label>
                      </div>
                      <div className="col-md-6">
                        <label>same as permanent</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Correspondence Address PIN Code</label>
                      </div>
                      <div className="col-md-6">
                        <label>248001</label>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="edu"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>College Name</label>
                      </div>
                      <div className="col-md-6">
                        <label>Graphic Era University</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Marks in College(in %)</label>
                      </div>
                      <div className="col-md-6">
                        <label>92</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>School Name</label>
                      </div>
                      <div className="col-md-6">
                        <label>St. Joseph's Academy</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Marks in XII(in %)</label>
                      </div>
                      <div className="col-md-6">
                        <label>92</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Marks in X(in %)</label>
                      </div>
                      <div className="col-md-6">
                        <label>91.5</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
}
export default About;