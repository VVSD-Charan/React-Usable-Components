import React from 'react'
import './Contact.css'

export default function ContactUs() {
  return (
    <section className="App">
      <div className="register">
        <div className="col-1">
          <h2>Get in touch</h2>
          <span>Please describe your queries clearly</span>

          <form id="form" className="flex flex-col">
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Contact number" />
            <input type="text" placeholder="Message" />

            <button className="bton">Contact Us</button>
          </form>
        </div>

        <div className="col-2">
          {/* You can add content for the second column if needed */}
        </div>
      </div>
    </section>
  )
}
