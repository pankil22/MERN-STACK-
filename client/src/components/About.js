import React from 'react';

const About = () => {

  return (
    <>
    <div className = "container emp-profile">
      <form method = "GET">
        <div className = "row">
          <div className = "col-md-4">
            <img src = ""  alt = "Pankil"/>
          </div>

          <div className = "col-md-6">
            <div className = "profile-head">
              <h5>Pankil Kamboj</h5>
              <h6>LEARNING MERN STACK</h6>
              <p className = "profile-rating mt-3 mb-5">
                RANKINGS : <span> 1/10 </span>
              </p>

              <ul className ="nav nav-tabs" role = "tablist">
    <li className ="nav-item">
      <a className ="nav-link active" id = "home-tab" data-toggle = "tab" href="#home" role = "tab">About</a>
    </li>
    <li className ="nav-item">
    <a className ="nav-link active" id = "profile-tab" data-toggle = "tab" href="#profile" role = "tab">TimeLine</a>

    </li>
  </ul>
            </div>
          </div>
          <div className = "col-md-2">
            <input type = "submit" className = "profile-edit-btn" name = "btnAddMore" value = "Edit Profile"/>

          </div>

        </div>
        <div className = "row">
          {/* LEFT SIDE URL */}
          <div className = "col-md-4">
            <div className = "profile-work">
              <p> WORK LINK </p>
              <a href = "https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target = "_thapa">YOUTUBE </a><br />
              <a href = "https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target = "_thapa">INSTAGRAM </a><br />
              <a href = "https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target = "_thapa">SNAPCHAT </a><br />
              <a href = "https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target = "_thapa">GIT HUB MERN  </a><br />
              <a href = "https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target = "_thapa">WEB DEVELOPER </a><br />
              <a href = "https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target = "_thapa">FIGMA </a><br />
              <a href = "https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target = "_thapa">SOFTWARE ENGINEER </a><br />

            </div>

          </div>



          {/* RIGHT SIDE TOGGLE */}
          <div className = "col-md-4 pl-5 about-info">
            <div className = "tab-content profile-tab" id = "myTabContent">
                <div className = "tab-pane fade show active" id = "home" role = "tabpanel" aria-labelledby="home-tab">
                  <div className = "row">
                    <div className = "col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className = "col-md-6">
                     <p>1651616516165156161</p>
                    </div>
                  </div>

                  <div className = "row mt-3">
                    <div className = "col-md-6">
                      <label>Name</label>
                    </div>
                    <div className = "col-md-6">
                     <p>Pankil Kamboj</p>
                    </div>
                  </div>

                  <div className = "row mt-3">
                    <div className = "col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className = "col-md-6">
                     <p>Web Developer</p>
                    </div>
                  </div>

                  <div className = "row mt-3">
                    <div className = "col-md-6">
                      <label>Email</label>
                    </div>
                    <div className = "col-md-6">
                     <p>pankil123@gmail.com</p>
                    </div>
                  </div>

                  <div className = "row mt-3">
                    <div className = "col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className = "col-md-6">
                     <p>9810860767</p>
                    </div>
                  </div>
                  </div>
            </div>

          </div>

        </div>
      </form>
    </div>
    </>
  )
}

export default About

