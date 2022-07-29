import React from 'react'

const Contact = () => {
  return (
    <>
    <div className = "contact_info">
      <div className = "container-fluid">
        <div className = "row">
          <div className = "col-lg-10 offset-lg-1 d-flex justify-content-between">
            { /* phoneNumber */}
            <div className = "contact_info_item d-flex justify-content-start align-items-center" >
              <img src = "https://img.icons8.com/office/24/000000/iphone.png" alt = "phone" />
              <div className = "contact_info_content">
                <div className = "contact_info_title">
                  Phone
                </div>
                <div className = "contact_info_text">
                  +91 1235698752
                </div>
              </div>

            </div>
            { /* EMAIL ADDRESS  */}
            <div className = "contact_info_item d-flex justify-content-start align-items-center" >
              <img src = "https://img.icons8.com/office/24/000000/iphone.png" alt = "phone" />
              <div className = "contact_info_content">
                <div className = "contact_info_title">
                  Email
                </div>
                <div className = "contact_info_text">
                  thapa@technical.com
                </div>
              </div>

            </div>
            { /* ADDRESS */}
            <div className = "contact_info_item d-flex justify-content-start align-items-center" >
              <img src = "https://img.icons8.com/office/24/000000/iphone.png" alt = "phone" />
              <div className = "contact_info_content">
                <div className = "contact_info_title">
                  Address
                </div>
                <div className = "contact_info_text">
                  Gurugram , Haryana   
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    { /* CONTACT US FORM */}

    <div className = "contact_form">
      <div className = "container">
        <div className = "row">
          <div className = "col-lg-10 offset-lg-1">
            <div className = "contact_form_container py-5">
              <div className = "contact_form_title">
                GET IN TOUCH 
              </div>
              <form id = "caontact_form">
                <div className = "contact_form_name d-flex justify-content-between align-items-between">
                   <input type = "text" name = "name" id = "name" autoComplete = "off" 
              placeholder="Your Name"
              /> 
                    <input type = "email" name = "email" id = "email" autoComplete = "off" 
              placeholder="Your Email Id"
              /> 
                    <input type = "number" name = "phone" id = "phone" autoComplete = "off" 
              placeholder="Your Phone Number"
              /> 
                </div>
                <div className = "contact_form_text mt-5">
                  <textarea className = "text_field contact_form_message" 
                  placeholder = "Message" cols = "30" rows = "10"></textarea>
                </div>
                <div className = "contact_form_button">
                  <button type = "submit" className = "button contact_submit_button">
                    SEND MESSAGE 
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Contact