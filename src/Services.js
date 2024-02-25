import React from 'react'
import Header from './commons/Header';
import Footer from './commons/Footer';

// Importing services imgs 
import collaborationsimg from './img/service//collaborations.png'
import financeimg from './img/service/finance.png'
import insuranceimg from './img/service/insurance.png'
import legalitiesimg from './img/service/legalities.png'
import businessimg from './img/service/business.png'

// Importing breadcrumb images
import breadcrumbshape1 from './img/breadcrumb/breadcrumb-shape-1.png'
import breadcrumb2 from './img/breadcrumb/breadcrumb-2.jpg'

// Importing cta 
import ctabg from './img/cta/cta-bg.jpg'

// Importing cards 
import sale1 from './img/card/sale-1.png'
import sale2 from './img/card/sale-2.png'
import sale3 from './img/card/sale-3.png'
import cardimg1 from './img/card/card-img-1.png'
import cardimg2 from './img/card/card-img-2.png'
import cardimg3 from './img/card/card-img-3.png'
import cardimg4 from './img/card/card-img-4.png'
import cardshape1 from './img/card/card-shape-1.png' 
import cardbg from './img/card/card-bg.png'
import Faq from './commons/Faq';

const Services = () => {
    return (
        <div>
            <div className="body-overlay" />
            {/* tp-offcanvus-area-end */}
            <Header/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* tp-breadcrumb-area-start */}
                        <div className="about-banner-area p-relative">
                            <div className="about-shape-1 z-index-3">
                                <img src={breadcrumbshape1} alt="" />
                            </div>
                            <div className="about-banner p-relative z-index fix">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="about-banner-content">
                                                <h4 className="about-banner-title" data-parallax="{&quot;y&quot;: 1000, &quot;smoothness&quot;: 10}">
                                                    <span>Our Top</span> <br />
                                                    <span>Services</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-breadcrumb-area-end */}
                        {/* tp-breadcrumb-header-area-start */}
                        <div className="about-img-area mb-100 z-index-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="about-img about-img-height p-relative" style={{background:`url(${breadcrumb2})`,backgroundRepeat:'no-repeat'}}>
                                            <div className="about-img-content">
                                                <h4 className="about-img-title" data-parallax="{&quot;y&quot;: 1000, &quot;smoothness&quot;: 10}">
                                                    <span>Our</span> <br />
                                                    <span>Services</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-breadcrumb-header-area-end */}
                        {/* tp-service-area-strat */}
                        <div className="tp-service-area pb-120 z-index">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                                            <h3 className="tp-section-title tp-title-anim">Accounting Software <br />
                                                That Handles it All.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                                            <div className="tp-service-sm-icon" style={{textAlign:'center'}}>
                                                <img src={collaborationsimg} alt='collaborations' height={150} width={140}/>
                                            </div>
                                            <div className="tp-service-sm-content">
                                                <span>Collaborations</span>
                                                <h3 className="tp-service-sm-title"><a href="service-details.html">Automate Workflows <br /> and Monitor your Sales.</a></h3>
                                                <div className="tp-service-sm-link">
                                                    <a href="/collaborations">Learn More <i className="far fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                                            <div className="tp-service-sm-icon" style={{textAlign:'center'}}>
                                                <img src={financeimg} alt='finance' height={150} width={140}/>
                                            </div>
                                            <div className="tp-service-sm-content">
                                                <span>Finance</span>
                                                <h3 className="tp-service-sm-title"><a href="service-details.html">Track your Marketing to
                                                    see the best Results.</a></h3>
                                                <div className="tp-service-sm-link">
                                                    <a href="/finance">Learn More <i className="far fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".8s">
                                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                                            <div className="tp-service-sm-icon" style={{textAlign:'center'}}>
                                                <img src={insuranceimg} alt='insurance' height={150} width={140}/>
                                            </div>
                                            <div className="tp-service-sm-content">
                                                <span>Insurance</span>
                                                <h3 className="tp-service-sm-title"><a href="service-details.html">Automate recurring
                                                    invoices and save time.</a></h3>
                                                <div className="tp-service-sm-link">
                                                    <a href="/insurance">Learn More <i className="far fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                                            <div className="tp-service-sm-icon" style={{textAlign:'center'}}>
                                                <img src={legalitiesimg} alt='legalities' height={150} width={140}/>
                                            </div>
                                            <div className="tp-service-sm-content">
                                                <span>Legalities</span>
                                                <h3 className="tp-service-sm-title"><a href="service-details.html">Get real-time visibility
                                                    into every expense.</a></h3>
                                                <div className="tp-service-sm-link">
                                                    <a href="/legalities">Learn More <i className="far fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                                            <div className="tp-service-sm-icon"  style={{textAlign:'center'}}>
                                                <img src={businessimg} alt='business' height={150} width={140}/>
                                            </div>
                                            <div className="tp-service-sm-content">
                                                <span>Business Management</span>
                                                <h3 className="tp-service-sm-title"><a href="service-details.html">Quick &amp; Easy Repeater Fields Option</a></h3>
                                                <div className="tp-service-sm-link">
                                                    <a href="/business">Learn More <i className="far fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-service-area-end */}
                        {/* tp-card-area-start */}
                        <div className="tp-card-area tp-card-space pt-100 pb-175">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                                        <div className="tp-card-thumb-wrapper p-relative">
                                            <div className="tp-card-main-img">
                                                <img src={cardbg} alt="" />
                                            </div>
                                            <div className="tp-card-img-1">
                                                <img src={cardshape1} alt="" />
                                            </div>
                                            <div className="tp-card-img-2 d-none d-sm-block">
                                                <img src={cardimg1} alt="" />
                                            </div>
                                            <div className="tp-card-img-3 d-none d-sm-block">
                                                <img src={cardimg2} alt="" />
                                            </div>
                                            <div className="tp-card-img-4 d-none d-sm-block">
                                                <img src={cardimg3} alt="" />
                                            </div>
                                            <div className="tp-card-img-5">
                                                <img src={cardimg4} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                                        <div className="tp-card-title-box">
                                            <h3 className="tp-section-title pb-15">Manage All your Cards in one Place</h3>
                                            <p>Digital products are where it’s at! There are so many benefits
                                                to selling digital products. It’s easy to get started and they <br />
                                                can be extremely profitable</p>
                                            <a className="tp-btn-inner tp-btn-hover alt-color-black" href="service-details.html">
                                                <span>Get Started Free</span>
                                                <b />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-card-area-end */}
                        {/* tp-sales-area-start */}
                        <div className="tp-sales-area tp-sales-space">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-lg-6 order-1 order-md-1 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                                        <div className="tp-sales-section-box pb-20">
                                            <h3 className="tp-section-title pb-15">Track and Analyze Sales in Real time</h3>
                                            <p>Centralize and simplify payments, and get comprehensive <br />
                                                insights on your financials softuch.! </p>
                                        </div>
                                        <div className="tp-sales-feature">
                                            <ul>
                                                <li className="yellow-1"><span><i className="far fa-check" /> <em>No hidden fees.</em></span></li>
                                                <li className="purple-2"><span><i className="far fa-check" /> <em>100% security. Guaranteed.</em></span></li>
                                                <li className="green-3"><span><i className="far fa-check" /> <em>No training or maintenance needed</em></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 order-0 order-md-2 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                                        <div className="tp-sales-img-wrapper p-relative text-end">
                                            <div className="tp-sales-main-thumb">
                                                <img src={sale1} alt="" />
                                            </div>
                                            <div className="tp-sales-sub-img-1">
                                                <img src={sale2} alt="" />
                                            </div>
                                            <div className="tp-sales-sub-img-2 d-none d-sm-block">
                                                <img src={sale3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-sales-area-end */}
                    
                        {/* tp-faq-area-start */}
                        <Faq/>
                        {/* tp-faq-area-end */}
                        {/* tp-cta-area-start */}
                        <div className="tp-cta-area p-relative">
                            <div className="tp-cta-grey-bg grey-bg-2" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="tp-cta-bg" data-background={ctabg}>
                                            <div className="tp-cta-content tp-inner-font text-center">
                                                <h3 className="tp-section-title text-white">Try our service now!</h3>
                                                <p>Eyerything you need to accept cord payments and grow your business <br />
                                                    anywhere on the planet.</p>
                                                <a className="tp-btn-inner white-bg text-black" href="service-details.html">Get Started Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-cta-area-end */}
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
export default Services