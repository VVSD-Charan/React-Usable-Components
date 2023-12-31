import React from 'react'
import '../../../App.css'
import { aboutus_content, whyus } from '../../webdata';

const Aboutus = () => {

    return (
        <section className='section-white'>
            <div className='container'>
                <div className='row'>

                    {/* About us heading and content  */}
                    <div className='col-md-12 text-center'>
                        <h2 className='section-title'>
                            About us
                        </h2>

                        <div className='div-subtitle'>
                            <p className='section-subtitle'>
                                {aboutus_content}
                            </p>
                        </div>
                    </div>

                    {/* Cards layout  */}
                    <div className='container'>
                    {
                        whyus.map((item, index) => {
                            return (
                                <div className='card'>
                                    <div className='team-item' key={index}>
                                        <img src={item.image} alt={item.title} className='team-img' />
                                        <h3>{item.title}</h3>
                                        <div className='team-info'>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutus;