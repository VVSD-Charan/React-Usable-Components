import React from 'react'

// Importing logos 
import whiteLogo from '../img/logo/logo-white.png'
import blackLogo from '../img/logo/logo-black.png'

// importing project imgs 
import projectinner4 from '../img/project/project-inner-4.jpg'
import projectinner5 from '../img/project/project-inner-5.jpg'
import projectinner6 from '../img/project/project-inner-6.jpg'
import projectinner7 from '../img/project/project-inner-7.jpg'

// importing hero images 
import scrolldown from '../img/hero/scroll-down.png'
import herouser from '../img/hero/hero-user.jpg'
import img21 from '../img/hero/hero-img-2-1.png'
import img23 from '../img/hero/hero-img-2-3.png'
import img02 from '../img/hero/image_02.png'
import img24 from '../img/hero/hero-img-2-4.png'
import imgshape22 from '../img/hero/hero-shape-2-2.png'
import herobg2 from '../img/hero/hero-bg-2.png'

// importing payment 
import hand from '../img/payment/hand.png'
import qrcode from '../img/payment/qrcode.png'
import coin1 from '../img/payment/coin-1.png'
import coin2 from '../img/payment/coin-2.png'
import mobile from '../img/payment/mobile.png'
import payment3 from '../img/payment/payment-3.png'
import message from '../img/payment/message.png'
import background from '../img/payment/background.png'
import payimage from '../img/payment/image.png' 
import getpaid from '../img/payment/get-paid.png'

// importing payment logo 
import paylogomain from '../img/payment-logo/logo-main.png'
import paylogo1 from '../img/payment-logo/logo-1.png'
import paylogo2 from '../img/payment-logo/logo-2.png'
import paylogo3 from '../img/payment-logo/logo-3.png'
import paylogo4 from '../img/payment-logo/logo-4.png'
import paylogo5 from '../img/payment-logo/logo-5.png'
import paylogo6 from '../img/payment-logo/logo-6.png'
import paylogo7 from '../img/payment-logo/logo-7.png'
import paylogo8 from '../img/payment-logo/logo-8.png'
import paylogo9 from '../img/payment-logo/logo-9.png'
import paylogo10 from '../img/payment-logo/logo-10.png'
import paylogo11 from '../img/payment-logo/logo-11.png'
import paylogo12 from '../img/payment-logo/logo-12.png'
import paylogo13 from '../img/payment-logo/logo-13.png'
import paylogo14 from '../img/payment-logo/logo-14.png'
import paylogo15 from '../img/payment-logo/logo-15.png'
import paylogo16 from '../img/payment-logo/logo-16.png'

// Importing service images 
import servbg21 from '../img/service/sv-bg-2-1.jpg'
import servicon21 from '../img/service/sv-icon-2-1.png'
import servicon22 from '../img/service/sv-icon-2-2.png'
import servicon23 from '../img/service/sv-icon-2-3.png'
import servicon24 from '../img/service/sv-icon-2-4.png'


const Home = () => {
    return (
        <div>
            {/* back-to-top-start  */}
            <button className="scroll-top scroll-to-target tp-style-green" data-target="html">
                <i className="far fa-angle-double-up" />
            </button>
            {/* back-to-top-end  */}
            <header className="tp-header-height">
                {/* tp-header-area-start */}
                <div id="header-sticky" className="tp-header-2__area header-sticky-bg-2 tp-header-2__transparent tp-header-2__plr z-index-3">
                    <div className="container-fluid g-0">
                        <div className="row g-0 align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                                <div className="tp-header-2__logo">
                                    <a className="white-logo" href="index.html"><img src={whiteLogo} alt="" /></a>
                                    <a className="black-logo" href="index.html"><img src={blackLogo} alt="" /></a>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 d-none d-lg-block">
                                <div className="tp-header-2__main-menu text-center">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li>
                                                <a href="index.html">Home</a>
                                                <ul className="submenu">
                                                    <li><a href="index.html">Data analytics</a></li>
                                                    <li><a href="index-2.html">Payment Gateway</a></li>
                                                    <li><a href="index-3.html">CRM Software</a></li>
                                                    <li><a href="index-4.html">Security Software</a></li>
                                                    <li><a href="index-5.html">Saas</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Pages</a>
                                                <ul className="submenu">
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="team-details.html">Team Details</a></li>
                                                    <li><a href="career.html">Career</a></li>
                                                    <li><a href="career-details.html">Career Details</a></li>
                                                    <li><a href="integrations.html">Integrations</a></li>
                                                    <li><a href="price.html">Price</a></li>
                                                    <li><a href="register.html">Register</a></li>
                                                    <li><a href="sign-in.html">Signin</a></li>
                                                    <li><a href="404.html">404</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="service-details.html">Features</a>
                                                <ul className="submenu">
                                                    <li><a href="service.html">Service</a></li>
                                                    <li><a href="service-details.html">Service Details</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="blog-details.html">Blog</a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-list.html">Blog List</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                    <li><a href="blog-details-2.html">Blog Details 02</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="project-details.html">Portfoilo</a>
                                                <ul className="submenu">
                                                    <li><a href="project.html">Project</a></li>
                                                    <li><a href="project-details.html">Project Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                                <div className="tp-header-2__right d-flex align-items-center justify-content-end">
                                    <a className="tp-header-2__login d-none d-md-block" href="/careers">Careers</a>
                                    <a className="header-bottom__bar tp-menu-bar d-lg-none" href="javascript:void(0)"><i className="fal fa-bars" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* tp-header-area-end */}
            </header>
            {/* tp-offcanvus-area-start */}
            <div className="tpoffcanvas-area">
                <div className="tpoffcanvas">
                    <div className="tpoffcanvas__close-btn">
                        <button className="close-btn"><i className="fal fa-times" /></button>
                    </div>
                    <div className="tpoffcanvas__logo text-center">
                        <a href="index.html">
                            <img src={whiteLogo} alt="" />
                        </a>
                    </div>
                    <div className="mobile-menu" />
                    <div className="tpoffcanvas__instagram text-center">
                        <div className="tpoffcanvas__instagram-title">
                            <h4>instagram</h4>
                        </div>
                        <a href="#"><img src={projectinner4} alt="" /></a>
                        <a href="#"><img src={projectinner5} alt="" /></a>
                        <a href="#"><img src={projectinner6} alt="" /></a>
                        <a href="#"><img src={projectinner7} alt="" /></a>
                    </div>
                    <div className="tpoffcanvas__info text-center">
                        <h4 className="offcanva-title">we are here</h4>
                        <a href="https://www.google.com/maps/@23.506657,90.3443647,7z" target="_blank">
                            27 Division St, New York, <br />
                            NY 10002, USA
                        </a>
                    </div>
                    <div className="tpoffcanvas__social">
                        <div className="social-icon text-center">
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-instagram" /></a>
                            <a href="#"><i className="fab fa-facebook-square" /></a>
                            <a href="#"><i className="fab fa-dribbble" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-overlay" />
            {/* tp-offcanvus-area-end */}
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main className="fix">
                        {/* tp-hero-area-start */}
                        <div className="tp-hero-2__area tp-hero-2__ptb tp-hero-2__plr z-index fix p-relative" style={{backgroundImage: `url(${herobg2})`}}>
                            <div className="scroll-bg d-none d-sm-block">
                                <img src={scrolldown} alt="" />
                            </div>
                            <div className="tp-hero-2__mouse-scroll smooth d-none d-sm-block">
                                <a className="mouse-scroll-btn" href="#payment-method" />
                                <span>Scroll Down</span>
                            </div>
                            <div className="tp-hero-2__shape-img-1 d-none d-sm-block">
                                <svg width={238} height={159} viewBox="0 0 238 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="line-2" d="M234.344 52.0221C223.737 68.476 166.957 94.3438 103.492 41.3862C75.8453 16.8451 105.128 -10.4919 114.849 24.3323C124.571 59.1564 92.7914 100.54 68.4537 105.873C44.1161 111.206 27.3149 102.11 30.0997 91.4562C34.0369 76.394 74.0714 111.53 2.64231 134.089" stroke="white" strokeWidth={2} />
                                    <path className="line-2" fillRule="evenodd" clipRule="evenodd" d="M2.0625 133.958C2.41561 133.237 3.42407 131.16 3.56794 130.842C3.9652 129.948 4.03834 129.444 4.05489 128.923C4.06249 128.505 4.01353 128.07 4.12522 127.291C4.19178 126.861 3.87842 126.464 3.44849 126.405C3.01856 126.345 2.62947 126.648 2.56291 127.077C2.47204 127.784 2.47586 128.238 2.48453 128.637C2.48792 129.095 2.47134 129.451 2.12998 130.203C1.96731 130.57 0.83986 132.515 0.507014 133.501C0.331505 134.015 0.368942 134.416 0.454587 134.597C0.576866 134.857 0.815639 135.113 1.20469 135.308C1.70511 135.556 2.55838 135.75 3.5093 135.988C4.40364 136.21 5.40968 136.481 6.2686 136.942C6.98849 137.334 7.59496 137.863 7.84287 138.677C7.96607 139.092 8.3949 139.33 8.81178 139.207C9.22866 139.084 9.47003 138.645 9.34683 138.23C8.99025 137 8.10724 136.153 7.01332 135.56C6.04391 135.035 4.91164 134.714 3.88939 134.463C3.27915 134.309 2.71001 134.182 2.27274 134.041C2.20216 134.019 2.13233 133.988 2.0625 133.958Z" fill="none" />
                                </svg>
                            </div>
                            <div className="container-fluid g-0">
                                <div className="row g-0 align-items-end">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="tp-hero-2__title-box">
                                            <h3 className="tp-hero-2__title tp-char-animation">The
                                                next generation payment ways.</h3>
                                        </div>
                                        <div className="tp-hero-2__btn">
                                            <a className="tp-btn-green wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s" href="service-details.html">Get Started For Free</a>
                                        </div>
                                        <div className="tp-hero-2__user p-relative">
                                            <h4 className="tp-char-animation-2">Over<span>5Ok+ Client</span> all over the world</h4>
                                            <div className="tp-hero-2__user-img">
                                                <img src={herouser} alt="" />
                                            </div>
                                            <div className="tp-hero-2__shape-1">
                                                <svg width={101} height={15} viewBox="0 0 101 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.336934 5.24122C16.3707 0.583948 58.7418 -4.19312 99.9564 13.9568" stroke="white" strokeWidth="1.5" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="tp-hero-2__right text-end p-relative">
                                            <div className="tp-hero-2__main-img wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                                                <img src={img21} alt="" />
                                            </div>
                                            <div className="tp-hero-2__sub-img-1 d-none d-sm-block" data-parallax="{&quot;x&quot;: 100, &quot;smoothness&quot;: 30}">
                                                <img src={img02} alt="" />
                                            </div>
                                            <div className="tp-hero-2__sub-img-2 d-none d-sm-block" data-parallax="{&quot;x&quot;: -100, &quot;smoothness&quot;: 10}">
                                                <img src={img23} alt="" />
                                            </div>
                                            <div className="tp-hero-2__sub-img-3 d-none d-sm-block" data-parallax="{&quot;y&quot;: -80, &quot;smoothness&quot;: 30}">
                                                <img src={img24} alt="" />
                                            </div>
                                            <div className="tp-hero-2__sub-img-4">
                                                <img src={imgshape22} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-hero-area-end */}
                        {/* tp-payment-area-start */}
                        <div id="payment-method" className="tp-payment__area pt-110 pb-110">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-7">
                                        <div className="tp-payment__title-box text-center mb-55">
                                            <h3 className="tp-section-title-lg">You'll love our <br /> powerful payments.</h3>
                                            <p>We've got all your payments covered</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-xl-12">
                                        <div className="row">
                                            <div className="col-md-6 mb-30">
                                                <div className="tp-payment__item tp-payment__bg-color-2 p-relative z-index wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                                                    <div className="tp-payment__shape-4">
                                                        <img src={qrcode} alt="" />
                                                    </div>
                                                    <div className="tp-payment__shape-5">
                                                        <img src={mobile} alt="" />
                                                    </div>
                                                    <div className="tp-payment__shape-6">
                                                        <img src={hand} alt="" />
                                                    </div>
                                                    <div className="tp-payment__shape-7">
                                                        <img src={coin1} alt="" />
                                                    </div>
                                                    <div className="tp-payment__shape-8">
                                                        <img src={coin2} alt="" />
                                                    </div>
                                                    <div className="tp-payment__content">
                                                        <h3 className="tp-payment__title">Scan &amp; Go</h3>
                                                        <p>Transform your payment link into a QR code
                                                            that customers can scan with their <br />
                                                            phone to pay.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-30">
                                                <div className="tp-payment__item tp-payment__bg-color-3 p-relative z-index wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                                                    <div className="tp-payment__shape-9">
                                                        <img src={payment3} alt="" />
                                                    </div>
                                                    <div className="tp-payment__shape-11">
                                                        <img src={message} alt="" />
                                                    </div>
                                                    <div className="tp-payment__content">
                                                        <h3 className="tp-payment__title">Easily Send Requesrs
                                                            vai e-mail or SMS</h3>
                                                        <p>... or copy-paste the link</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 mb-30">
                                        <div className="tp-payment__item p-relative z-index wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                            <div className="tp-payment__shape-1">
                                                <img src={background} alt="" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="tp-payment__content tp-payment__content-space">
                                                        <h3 className="tp-payment__title">Online Billing &amp; <br /> Invoicing Payments.</h3>
                                                        <p>Get paid faster with Online Invoicing <br /> and the Virtual Terminal.</p>
                                                        <a href="service-details.html">Explore Invoicing Tools<i className="far fa-arrow-right" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="tp-payment__shape-2">
                                                        <img src={payimage} alt="" />
                                                    </div>
                                                    <div className="tp-payment__shape-3 d-none d-sm-block">
                                                        <img src={getpaid} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-payment-area-end */}
                        {/* tp-payment-method-area-start */}
                        <div className="tp-payment-method__area tp-payment-method__space">
                            <div className="container-fluid g-0">
                                <div className="row g-0 justify-content-center">
                                    <div className="col-xl-7">
                                        <div className="tp-payment-method__title-box text-center mb-20">
                                            <h3 className="tp-section-title-lg pb-10">All major <br />
                                                payment methods</h3>
                                            <p>We've got all your payments covered</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-12">
                                        <div className="tp-payment-method__wrapper text-center p-relative">
                                            <div className="tp-payment-method__main-circle p-relative z-index">
                                                <div className="tp-payment-method__main-img z-index-3">
                                                    <img src={paylogomain} alt="" />
                                                </div>
                                                <div className="tp-payment-method__line-1">
                                                    <div className="tp-payment-method__circle circle-1" />
                                                    <span><img src={paylogo3} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-2 d-none d-lg-block">
                                                    <div className="tp-payment-method__circle circle-2" />
                                                    <span><img src={paylogo1} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-3">
                                                    <div className="tp-payment-method__circle circle-3" />
                                                    <span><img src={paylogo2} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-4 d-none d-lg-block">
                                                    <div className="tp-payment-method__circle circle-4" />
                                                    <span><img src={paylogo4} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-5">
                                                    <div className="tp-payment-method__circle circle-5" />
                                                    <span><img src={paylogo5} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-6 d-none d-lg-block">
                                                    <div className="tp-payment-method__circle circle-6" />
                                                    <span><img src={paylogo6} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-7">
                                                    <div className="tp-payment-method__circle circle-7" />
                                                    <span><img src={paylogo7} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-8 d-none d-lg-block">
                                                    <div className="tp-payment-method__circle circle-8" />
                                                    <span><img src={paylogo16} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-9">
                                                    <div className="tp-payment-method__circle circle-9" />
                                                    <span><img src={paylogo15} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-10 d-none d-lg-block">
                                                    <div className="tp-payment-method__circle circle-10" />
                                                    <span><img src={paylogo14} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-11">
                                                    <div className="tp-payment-method__circle circle-11" />
                                                    <span><img src={paylogo13} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-12 d-none d-lg-block">
                                                    <div className="tp-payment-method__circle circle-12" />
                                                    <span><img src={paylogo12} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-13">
                                                    <div className="tp-payment-method__circle circle-13" />
                                                    <span><img src={paylogo11} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-14 d-none d-lg-block">
                                                    <div className="tp-payment-method__circle circle-14" />
                                                    <span><img src={paylogo10} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-15">
                                                    <div className="tp-payment-method__circle circle-15" />
                                                    <span><img src={paylogo9} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-16">
                                                    <div className="tp-payment-method__circle circle-16" />
                                                    <span><img src={paylogo8} alt="" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-payment-method-area-end */}
                        {/* tp-service-area-end */}
                        <div className="tp-service-2__area p-relative pt-70 pb-160">
                            <div className="tp-service-2__shape">
                                <img src={servbg21} alt="" />
                            </div>
                            <div className="container z-index-5">
                                <div className="row align-items-center mb-50">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="tp-service-2__section-box">
                                            <h3 className="tp-section-title-lg pb-20">We provide the <br />
                                                best service for you</h3>
                                            <p>We've got all your payments covered</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s">
                                        <div className="tp-service-2__user-box p-relative d-flex flex-wrap justify-content-lg-start justify-content-lg-end align-items-center">
                                            <div className="tp-service-2__user-shape">
                                                <svg width={470} height={18} viewBox="0 0 470 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M199.614 1.72387C177.533 2.31462 155.712 3.04101 134.432 3.83514C104.309 4.95854 74.1969 6.12068 44.2665 7.96073C34.8451 8.5418 25.2775 8.90979 15.915 9.63613C10.0378 10.0913 2.24477 10.7401 1.22204 10.8757C0.687102 10.9531 0.453729 11.0695 0.37832 11.1082C-0.151901 11.3794 -0.0551557 11.6407 0.244125 11.8441C0.364308 11.9313 0.668216 12.1444 1.51186 12.1735C57.9321 14.1588 115.625 10.285 172.113 9.87824C270.075 9.18096 371.005 11.9507 468.189 17.9938C469.037 18.0423 469.862 17.8001 469.98 17.4418C470.121 17.0931 469.508 16.7542 468.66 16.7057C371.312 10.6529 270.216 7.87347 172.066 8.58044C119.421 8.95813 65.7369 12.3575 13.0188 11.1953C14.2301 11.0985 15.4178 11.0016 16.5018 10.9144C25.8267 10.1881 35.3541 9.8298 44.7379 9.24873C74.6046 7.40868 104.655 6.24654 134.739 5.13282C172.066 3.73826 211.02 2.53737 250.28 1.97567C264.325 2.06283 278.322 2.15003 292.32 2.25656C322.602 2.48899 353.025 3.16691 383.236 4.07725C392.332 4.3581 401.428 4.64861 410.524 4.9004C413.541 4.98757 421.317 5.23932 422.401 5.21995C423.745 5.20058 424.004 4.73577 424.027 4.65829C424.098 4.48397 424.051 4.24185 423.391 4.03847C423.32 4.00942 422.896 3.91251 421.953 3.8544C367.023 0.426098 308.368 -0.145196 250.327 0.677985C189.104 0.319659 127.646 0.164636 66.5783 0C65.704 0 64.99 0.290577 64.9829 0.648903C64.9782 1.00723 65.6827 1.29782 66.557 1.3075C110.775 1.42371 155.217 1.53986 199.614 1.72387Z" fill="url(#paint0_linear_552_4801)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_552_4801" x1={0} y1={9} x2={470} y2={9} gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#491EB8" stopOpacity={0} />
                                                            <stop offset={1} stopColor="#DA2A51" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="tp-service-2__user">
                                                <span data-purecounter-duration={0} data-purecounter-end={35} className="purecounter">35</span>
                                                <p>Active Users</p>
                                            </div>
                                            <div className="tp-service-2__user">
                                                <span>240<i>+</i></span>
                                                <p>Trusted Companies</p>
                                            </div>
                                            <div className="tp-service-2__user">
                                                <span>78<i>k</i></span>
                                                <p>Customer care</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gx-60">
                                    <div className="col-xl-3 col-lg-3 col-md-6 mb-40 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".4s">
                                        <div className="tp-service-2__item-wrapper p-relative">
                                            <div className="tp-service-2__item d-flex justify-content-between flex-column">
                                                <div className="tp-service-2__icon">
                                                    <img src={servicon21} alt="" />
                                                </div>
                                                <div className="tp-service-2__text">
                                                    <h4 className="tp-service-2__title-sm"><a href="service-details.html">Online</a></h4>
                                                    <a className="tp-service-2__link" href="service-details.html">Explore<i className="far fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                            <div className="tp-service-2__bg-shape" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 mb-40 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".6s">
                                        <div className="tp-service-2__item-wrapper p-relative">
                                            <div className="tp-service-2__item d-flex justify-content-between flex-column">
                                                <div className="tp-service-2__icon">
                                                    <img src={servicon22} alt="" />
                                                </div>
                                                <div className="tp-service-2__text">
                                                    <h4 className="tp-service-2__title-sm"><a href="service-details.html">Bank Transfers</a></h4>
                                                    <a className="tp-service-2__link" href="service-details.html">Explore<i className="far fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                            <div className="tp-service-2__bg-shape tp-service-2__color-2" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 mb-40 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".8s">
                                        <div className="tp-service-2__item-wrapper p-relative">
                                            <div className="tp-service-2__item d-flex justify-content-between flex-column">
                                                <div className="tp-service-2__icon">
                                                    <img src={servicon23} alt="" />
                                                </div>
                                                <div className="tp-service-2__text">
                                                    <h4 className="tp-service-2__title-sm"><a href="service-details.html">Keyed</a></h4>
                                                    <a className="tp-service-2__link" href="service-details.html">Explore<i className="far fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                            <div className="tp-service-2__bg-shape tp-service-2__color-3" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 mb-40 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                                        <div className="tp-service-2__item-wrapper p-relative">
                                            <div className="tp-service-2__item  d-flex justify-content-between flex-column">
                                                <div className="tp-service-2__icon">
                                                    <img src={servicon24} alt="" />
                                                </div>
                                                <div className="tp-service-2__text">
                                                    <h4 className="tp-service-2__title-sm"><a href="service-details.html">In-Person</a></h4>
                                                    <a className="tp-service-2__link" href="service-details.html">Explore<i className="far fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                            <div className="tp-service-2__bg-shape tp-service-2__color-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-xl-10 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                                        <div className="tp-service-2__bottom-wrapper p-relative mt-30">
                                            <div className="tp-service-2__feature-item">
                                                <h4 className="tp-service-2__feature-title">More free tools than you can handle</h4>
                                                <div className="tp-service-2__feature-box d-flex justify-content-between">
                                                    <div className="tp-service-2__feature-list">
                                                        <ul>
                                                            <li>Invoicing</li>
                                                            <li>Online Checkout</li>
                                                            <li>Point-of-Sale</li>
                                                            <li>Online Food Ordering</li>
                                                            <li>ICard Vault</li>
                                                            <li>Customer Portal</li>
                                                            <li>Inventory</li>
                                                            <li>Virtual Terminal</li>
                                                            <li>Recurring Plans</li>
                                                            <li>Payment Links</li>
                                                            <li>SMS Payments</li>
                                                            <li>QR Codes</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-service-area-end */}
                        {/* tp-account-area-strat */}
                        <div className="tp-account-area pb-120">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="tp-account-thumb-wrapper p-relative text-center wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                                            <div className="tp-account-bg">
                                                <img src="assets/img/account/account-bg.png" alt="" />
                                            </div>
                                            <div className="tp-account-main-img">
                                                <img src="assets/img/account/acc-main.png" alt="" />
                                            </div>
                                            <div className="tp-account-author">
                                                <img src="assets/img/account/ac-author.png" alt="" />
                                            </div>
                                            <div className="tp-account-shape-1">
                                                <img src="assets/img/account/ac-shape-1.png" alt="" />
                                            </div>
                                            <div className="tp-account-shape-2">
                                                <img src="assets/img/account/ac-shape-2.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="tp-account-step-wrapper">
                                            <div className="tp-account-section-box mb-40">
                                                <h4 className="tp-section-subtitle-2">Open An Account</h4>
                                                <h3 className="tp-section-title-lg">Let’s get started</h3>
                                            </div>
                                            <div className="tp-account-step mb-50">
                                                <div className="tp-account-item d-flex align-items-center">
                                                    <span>01</span>
                                                    <p>Sign up in a few minutes</p>
                                                </div>
                                                <div className="tp-account-item d-flex align-items-center">
                                                    <span>02</span>
                                                    <p>Let us verify your identity</p>
                                                </div>
                                                <div className="tp-account-item d-flex align-items-center">
                                                    <span>03</span>
                                                    <p>Your account is open; you can send <br /> your first payment</p>
                                                </div>
                                            </div>
                                            <div className="tp-account-btn-box">
                                                <a className="tp-btn-green mb-15" href="register.html">Open An Account in Minutes</a>
                                                <p>Try it for 30 days. For free. No obligations.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-account-area-end */}
                        {/* tp-testimonial-area-start */}
                        <div className="tp-testimonial-2-area pt-110 pb-120" data-background="assets/img/testimonial/testi-bg-2-1.png">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-8">
                                        <div className="tp-testimonial-2-section-box mb-15 text-center">
                                            <h3 className="tp-section-title-lg text-white">What people <br />
                                                are saying about us</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="tp-testimonial-2-section">
                                            <div className="tp-testimonial-2-slider-active">
                                                <div>
                                                    <div className="tp-testimonial-2-item p-relative wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                                                        <div className="tp-testimonial-2-border-shape">
                                                            <img src="assets/img/testimonial/BODY.png" alt="" />
                                                        </div>
                                                        <div className="tp-testimonial-2-star">
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div className="tp-testimonial-2-content">
                                                            <p>"Is it possible to Love your credit card processor? with Softec, yes!"</p>
                                                        </div>
                                                        <div className="tp-testimonial-2-author d-flex align-items-center">
                                                            <div className="tp-testimonial-2-img">
                                                                <img src="assets/img/testimonial/testi-icon-2-1.png" alt="" />
                                                            </div>
                                                            <div className="tp-testimonial-2-author-info">
                                                                <h5>Lana Rey</h5>
                                                                <span>Founder &amp; Leader</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="tp-testimonial-2-item p-relative wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                                        <div className="tp-testimonial-2-border-shape">
                                                            <img src="assets/img/testimonial/BODY.png" alt="" />
                                                        </div>
                                                        <div className="tp-testimonial-2-star">
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div className="tp-testimonial-2-content">
                                                            <p>"Is it possible to Love your credit card processor? with Softec, yes!"</p>
                                                        </div>
                                                        <div className="tp-testimonial-2-author d-flex align-items-center">
                                                            <div className="tp-testimonial-2-img">
                                                                <img src="assets/img/testimonial/testi-icon-2-2.png" alt="" />
                                                            </div>
                                                            <div className="tp-testimonial-2-author-info">
                                                                <h5>J. McGhee</h5>
                                                                <span>Founder &amp; Leader</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="tp-testimonial-2-item p-relative wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                                        <div className="tp-testimonial-2-border-shape">
                                                            <img src="assets/img/testimonial/BODY.png" alt="" />
                                                        </div>
                                                        <div className="tp-testimonial-2-star">
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div className="tp-testimonial-2-content">
                                                            <p>"Is it possible to Love your credit card processor? with Softec, yes!"</p>
                                                        </div>
                                                        <div className="tp-testimonial-2-author d-flex align-items-center">
                                                            <div className="tp-testimonial-2-img">
                                                                <img src="assets/img/testimonial/testi-icon-2-3.png" alt="" />
                                                            </div>
                                                            <div className="tp-testimonial-2-author-info">
                                                                <h5>Michael H.</h5>
                                                                <span>Founder &amp; Leader</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="tp-testimonial-2-item p-relative wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                                                        <div className="tp-testimonial-2-border-shape">
                                                            <img src="assets/img/testimonial/BODY.png" alt="" />
                                                        </div>
                                                        <div className="tp-testimonial-2-star">
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8 0L10.472 5.26604L16 6.11567L12 10.2124L12.944 16L8 13.266L3.056 16L4 10.2124L0 6.11567L5.528 5.26604L8 0Z" fill="#FFCF55" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div className="tp-testimonial-2-content">
                                                            <p>"Is it possible to Love your credit card processor? with Softec, yes!"</p>
                                                        </div>
                                                        <div className="tp-testimonial-2-author d-flex align-items-center">
                                                            <div className="tp-testimonial-2-img">
                                                                <img src="assets/img/testimonial/testi-icon-2-1.png" alt="" />
                                                            </div>
                                                            <div className="tp-testimonial-2-author-info">
                                                                <h5>Lana Rey</h5>
                                                                <span>Founder &amp; Leader</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-testimonial-area-end */}
                        {/* tp-faq-area-start */}
                        <div className="tp-faq-area pt-140 pb-120 fix">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="tp-faq-left-wrapper p-relative">
                                            <div className="tp-faq-section-box pb-20">
                                                <h4 className="tp-section-subtitle-2">Support</h4>
                                                <h3 className="tp-section-title-lg">Frequently <br /> Asked Questions</h3>
                                                <p>Sed ut perspiciatis unde omnis iste natus error <br /> sit voluptatem accusantium.!</p>
                                            </div>
                                            <div className="tp-faq-btn">
                                                <a className="tp-btn-green" href="contact.html">Get in Touch</a>
                                            </div>
                                            <div className="tp-faq-img" data-parallax="{&quot;x&quot;: -50, &quot;smoothness&quot;: 30}">
                                                <img src="assets/img/faq/faq-1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="tp-custom-accordion">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-items">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Why should I choose Softec?
                                                            <span className="accordion-btn" />
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            The Softec Shop is built right into your account dashboard, and is accessible
                                                            immediately after signing up.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-items tp-faq-active">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            Do I need to change banks?
                                                            <span className="accordion-btn" />
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            The Softec Shop is built right into your account dashboard, and is accessible
                                                            immediately after signing up.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-items">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            How can I order equipment?
                                                            <span className="accordion-btn" />
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            The Softec Shop is built right into your account dashboard, and is accessible
                                                            immediately after signing up.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-items">
                                                    <h2 className="accordion-header" id="headingFour">
                                                        <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            Do you offer volume discounts?
                                                            <span className="accordion-btn" />
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            The Softec Shop is built right into your account dashboard, and is accessible
                                                            immediately after signing up.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-items">
                                                    <h2 className="accordion-header" id="headingFive">
                                                        <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                            How does signing up work?
                                                            <span className="accordion-btn" />
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            The Softec Shop is built right into your account dashboard, and is accessible
                                                            immediately after signing up.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-faq-area-end */}
                        {/* tp-cta-area-start */}
                        <div className="tp-cta-area p-relative">
                            <div className="tp-cta-grey-bg grey-bg-2" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="tp-cta-bg" data-background="assets/img/cta/cta-bg.jpg">
                                            <div className="tp-cta-content text-center">
                                                <h3 className="tp-section-title-lg text-white">Try our service now!</h3>
                                                <p>Eyerything you need to accept cord payments and grow your business <br />
                                                    anywhere on the planet.</p>
                                                <a className="tp-btn-green" href="service-details.html">Get Started Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-cta-area-end */}
                    </main>
                    <footer>
                        {/* tp-footer-area-start */}
                        <div className="tp-footer__pl-pr grey-bg-2 tp-footer-style-2">
                            <div className="tp-footer__area pt-90 tp-footer__tp-border-bottom">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                                            <div className="tp-footer__widget footer-widget-2 footer-col-2-1">
                                                <div className="tp-footer__logo mb-25">
                                                    <a href="index.html">
                                                        <img src="assets/img/logo/logo-black.png" alt="" />
                                                    </a>
                                                </div>
                                                <div className="tp-footer__contact-info">
                                                    <a href="https://www.google.com.bd/maps/place/লাক্সেমবার্গ/@49.8143242,5.5590915,10z/data=!3m1!4b1!4m5!3m4!1s0x479545b9ca212147:0x64db60f602d392ef!8m2!3d49.815273!4d6.129583" target="_blank">1811 Silverside Rd, Wilmington,<br />DE 19810, USA</a>
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.5" d="M7.7295 5.20453L8.56039 6.69335C9.31022 8.03693 9.00921 9.79947 7.82823 10.9805C7.82823 10.9805 7.82823 10.9805 7.82823 10.9805C7.82811 10.9806 6.39585 12.4131 8.99299 15.0102C11.5895 17.6067 13.0219 16.1758 13.0227 16.175C13.0228 16.175 13.0228 16.175 13.0228 16.1749C14.2038 14.994 15.9663 14.693 17.3099 15.4428L18.7987 16.2737C20.8275 17.406 21.0671 20.2512 19.2838 22.0345C18.2122 23.106 16.8995 23.9398 15.4484 23.9948C13.0056 24.0874 8.85699 23.4692 4.6955 19.3077C0.534019 15.1462 -0.0842204 10.9976 0.00838762 8.55479C0.0633994 7.10366 0.897189 5.79096 1.96874 4.7194C3.75204 2.93611 6.59725 3.17571 7.7295 5.20453Z" fill="#01103D" />
                                                                    <path d="M11.8539 0.806328C11.9387 0.282856 12.4336 -0.0722471 12.957 0.0125008C12.9894 0.0187032 13.0937 0.0381888 13.1483 0.0503544C13.2575 0.0746828 13.4099 0.11214 13.5999 0.167479C13.9799 0.278145 14.5107 0.460456 15.1477 0.752523C16.4232 1.33727 18.1205 2.36018 19.8819 4.12152C21.6432 5.88286 22.6661 7.58021 23.2509 8.85567C23.5429 9.49273 23.7252 10.0235 23.8359 10.4035C23.8913 10.5935 23.9287 10.7458 23.953 10.8551C23.9652 10.9097 23.9741 10.9536 23.9803 10.986L23.9877 11.0259C24.0724 11.5494 23.7205 12.0647 23.1971 12.1494C22.6751 12.234 22.1833 11.8806 22.0965 11.3595C22.0938 11.3456 22.0865 11.308 22.0786 11.2725C22.0628 11.2016 22.0355 11.0892 21.9922 10.9405C21.9055 10.643 21.7551 10.2009 21.5052 9.65598C21.0062 8.56739 20.1087 7.06416 18.524 5.47941C16.9392 3.89466 15.436 2.99723 14.3474 2.49816C13.8024 2.24831 13.3603 2.09784 13.0629 2.01121C12.9142 1.96789 12.7273 1.92499 12.6564 1.9092C12.1354 1.82237 11.7694 1.32831 11.8539 0.806328Z" fill="#01103D" />
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.1436 5.22244C12.2893 4.71255 12.8207 4.41731 13.3306 4.56299L13.0668 5.48622C13.3306 4.56299 13.3306 4.56299 13.3306 4.56299L13.3324 4.56352L13.3344 4.56408L13.3387 4.56533L13.3486 4.56829L13.3739 4.57618C13.3932 4.58236 13.4173 4.5904 13.4461 4.60059C13.5036 4.621 13.5796 4.65001 13.6728 4.68996C13.8593 4.76989 14.1141 4.89333 14.4272 5.0786C15.0538 5.44946 15.9092 6.06547 16.9142 7.07042C17.9191 8.07536 18.5351 8.9308 18.906 9.55742C19.0913 9.87045 19.2147 10.1253 19.2946 10.3118C19.3346 10.405 19.3636 10.481 19.384 10.5385C19.3942 10.5673 19.4022 10.5914 19.4084 10.6107L19.4163 10.636L19.4193 10.6459L19.4205 10.6502L19.4211 10.6521C19.4211 10.6521 19.4216 10.654 18.4984 10.9178L19.4216 10.654C19.5673 11.1639 19.272 11.6953 18.7622 11.841C18.2566 11.9854 17.7299 11.6964 17.5789 11.1945L17.5742 11.1807C17.5674 11.1615 17.5533 11.1236 17.5296 11.0683C17.4822 10.9577 17.3963 10.7769 17.2534 10.5355C16.9679 10.0532 16.4524 9.32441 15.5563 8.42831C14.6602 7.53221 13.9314 7.01665 13.4491 6.7312C13.2077 6.58831 13.0269 6.50241 12.9163 6.45504C12.861 6.43133 12.8231 6.41721 12.8039 6.41038L12.7901 6.40565C12.2882 6.25474 11.9991 5.72799 12.1436 5.22244Z" fill="#01103D" />
                                                                </svg>
                                                            </span>
                                                            <a className="first-child" href="tel:+806(000)8899">+806 (000) 88 99</a>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.5" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 10.4397 0.338055 11.8005 0.939116 13.0072C1.09884 13.3279 1.15201 13.6945 1.05941 14.0406L0.523359 16.044C0.290659 16.9137 1.08631 17.7093 1.95601 17.4766L3.95945 16.9406C4.30554 16.848 4.67209 16.9012 4.99278 17.0609C6.19953 17.6619 7.56029 18 9 18Z" fill="#1C274C" />
                                                                    <path d="M5.2425 9.7648C4.83243 9.7648 4.5 10.0972 4.5 10.5073C4.5 10.9174 4.83243 11.2498 5.2425 11.2498H10.6875C11.0976 11.2498 11.43 10.9174 11.43 10.5073C11.43 10.0972 11.0976 9.7648 10.6875 9.7648H5.2425Z" fill="#1C274C" />
                                                                    <path d="M5.2425 6.2998C4.83243 6.2998 4.5 6.63223 4.5 7.0423C4.5 7.45238 4.83243 7.7848 5.2425 7.7848H13.1625C13.5726 7.7848 13.905 7.45238 13.905 7.0423C13.905 6.63223 13.5726 6.2998 13.1625 6.2998H5.2425Z" fill="#1C274C" />
                                                                </svg>
                                                            </span>
                                                            <a href="mailto:contact@info.com">contact@info.com</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                            <div className="tp-footer__widget footer-widget-2 footer-col-2-2">
                                                <h4 className="tp-footer__widget-title">Solutions</h4>
                                                <div className="tp-footer__content">
                                                    <ul>
                                                        <li><a href="#">Payments</a></li>
                                                        <li><a href="#">Advances</a></li>
                                                        <li><a href="#">Online Checkout</a></li>
                                                        <li><a href="#">Dashboard</a></li>
                                                        <li><a href="#">Get Started</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                            <div className="tp-footer__widget footer-widget-2 footer-col-2-3">
                                                <h4 className="tp-footer__widget-title">Other Pages</h4>
                                                <div className="tp-footer__content">
                                                    <ul>
                                                        <li><a href="#">About</a></li>
                                                        <li><a href="#">Services</a></li>
                                                        <li><a href="#">How It Works</a></li>
                                                        <li><a href="#">Pricing Plan</a></li>
                                                        <li><a href="#">Blog</a></li>
                                                        <li><a href="#">Contact</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                                            <div className="tp-footer__widget footer-widget-2 footer-col-2-4">
                                                <h4 className="tp-footer__widget-title">Download App</h4>
                                                <div className="tp-footer__download-box d-flex align-items-center">
                                                    <div className="tp-footer__qrcode mr-15">
                                                        <a href="#"> <img src="assets/img/footer/dwnld-1.png" alt="" /></a>
                                                    </div>
                                                    <div className="tp-footer__app">
                                                        <a href="#"><img className="mb-15" src="assets/img/footer/dwnld-2.png" alt="" /></a>
                                                        <a href="#"><img src="assets/img/footer/dwnld-3.png" alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-copyright__area pt-20 pb-20">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                            <div className="tp-copyright__social">
                                                <a href="#"><i className="fab fa-facebook-f" /></a>
                                                <a href="#"><i className="fab fa-twitter" /></a>
                                                <a href="#"><i className="fab fa-vimeo-v" /></a>
                                                <a href="#"><i className="fab fa-instagram" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6  d-none d-md-block">
                                            <div className="tp-copyright__text tp-copyright__text-2 text-center">
                                                <span>Full Copyright &amp; Design By <a href="#">@Busicon Services</a> 2024</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                            <div className="tp-copyright__lang-box  d-flex align-items-center justify-content-md-end justify-content-sm-end justify-content-start">
                                                <div className="tp-copyright__lang tp-copyright__lang-2">
                                                    <ul>
                                                        <li>
                                                            <a id="tp-copyright__lang-toggle" href="javascript:void(0)">
                                                                <span>English (US)<i className="fal fa-angle-down" /></span>
                                                            </a>
                                                            <ul className="tp-copyright__lang-submenu">
                                                                <li>
                                                                    <a href="#">Arabic</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Spanish</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Mandarin</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-footer-area-end */}
                    </footer>
                </div>
            </div>
            {/* JS here */}
        </div>
    );
}

export default Home;