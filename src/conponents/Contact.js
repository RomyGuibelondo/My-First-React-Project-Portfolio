import React from 'react'

function contact() {
  return (
    <div className="section5 contact" id="section5">
      <div className="container">
        <div className="wrapper">
          <div className="company-info">
            <ul>
              <li><i className="fa fa-road">44 Main street</i></li>
              <li><i className="fa fa-phone">+(639)360 462 031</i></li>
              <li><i className="fa fa-envelope">romy@gmail.com</i></li>
            </ul>
          </div>
          <div className="contact">
            <h3>E-mail Me</h3>
            <form id="contact-form">
              <p>
                <label htmlFor="name">First Name</label>
                <input type="text" name="name" id="name" required placeholder='First Name' />
              </p>
              <p>
                <label>Last Name</label>
                <input type="text" name="lastName" id="lastName" placeholder="Last Name"/>
                </p>
                <p>
                  <label>E-mail Address</label>
                  <input type="email" name="email" id="email" required placeholder="Email Address"/>
                </p>
                <p>
                  <label>Phone Number</label>
                  <input type="text" name="phone" id="phone" placeholder="Phone Number"/>
                </p>
                <p class="full">
                  <label>Message</label>
                  <textarea name="message" rows="5" id="message" placeholder="Message"></textarea>
                </p>
                <p class="full">
                  <button type="submit">Submit</button>
                </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact