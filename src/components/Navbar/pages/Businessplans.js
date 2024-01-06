import React from 'react'
import '../../../App.css'
import { services_content } from '../../webdata'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          {/* About us heading and content  */}
          <div className="col-md-12 text-center">
            <h2 className="section-title">Business Plans</h2>
          </div>

          {/* Cards layout  */}
          <div className="container">
            {services_content.map((item, index) => {
              return (
                <div className="card">
                  <Link to={item.link} key={index} className="card-link">
                    <div className="team-item" key={index}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="team-img"
                      />
                      <h3>{item.title}</h3>
                      <div className="team-info">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
