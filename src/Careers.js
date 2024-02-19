import React from 'react'
import Header from './commons/Header';
import Footer from './commons/Footer';
import { rolesData } from './Data';
import Allroles from './roles/Allroles';

const Careers = () => {
    return (
        <div>
            {/* tp-offcanvus-area-start */}
            <div className="tpoffcanvas-area">
                <div className="tpoffcanvas">
                    <div className="tpoffcanvas__close-btn">
                        <button className="close-btn"><i className="fal fa-times" /></button>
                    </div>
                    <div className="tpoffcanvas__logo text-center">
                        <a href="index.html">
                            <img src="assets/img/logo/logo-white.png" alt="" />
                        </a>
                    </div>
                    <div className="mobile-menu" />
                    <div className="tpoffcanvas__instagram text-center">
                        <div className="tpoffcanvas__instagram-title">
                            <h4>instagram</h4>
                        </div>
                        <a href="#"><img src="assets/img/project/project-inner-4.jpg" alt="" /></a>
                        <a href="#"><img src="assets/img/project/project-inner-5.jpg" alt="" /></a>
                        <a href="#"><img src="assets/img/project/project-inner-6.jpg" alt="" /></a>
                        <a href="#"><img src="assets/img/project/project-inner-7.jpg" alt="" /></a>
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
            <Header />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* breadcrumb-area-start */}
                        <div className="breadcrumb__area breadcrumb-height-3 p-relative blue-bg-2 fix">
                            <div className="breadcrumb__shape-1">
                                <img src="assets/img/breadcrumb/breadcrumb-shape-1.png" alt="" />
                            </div>
                            <div className="breadcrumb__shape-2">
                                <img src="assets/img/breadcrumb/breadcrumb-shape-2.png" alt="" />
                            </div>
                            <div className="container">
                                <div className="breadcrumb__content-wrap">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-12">
                                            <div className="breadcrumb__content text-center z-index-3 mb-60">
                                                <h3 className="breadcrumb__title">Build Your Career With <br /> Busicon</h3>
                                                <div className="breadcrumb__text">
                                                    <p>Work with us to impact lives of people.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* breadcrumb-area-end */}
                        {/* carrer-banner-area-start */}
                        <div className="carrer-banner-area carrer-banner-space">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-3 col-lg-3 col-md-6">
                                        <div className="carrer-banner-img-item">
                                            <img src="assets/img/career/image-1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="carrer-banner-img-item parallax-main">
                                            <img className="parallax-img" src="assets/img/career/image-2.png" alt="" data-parallax="{&quot;y&quot;: 300, &quot;smoothness&quot;: 10}" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                        <div className="carrer-banner-img-item mb-20">
                                            <img src="assets/img/career/image-3.png" alt="" />
                                        </div>
                                        <div className="carrer-banner-img-item">
                                            <img src="assets/img/career/image-4.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* carrer-banner-area-end */}
                        {/* tp-platform-area-start */}
                        <div className="tp-platform-area tp-platform-inner pt-120 p-relative z-index">
                            <div className="container">
                                <div className="row align-items-end mb-60">
                                    <div className="col-xl-7 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                                        <div className="tp-platform-section-box">
                                            <h5 className="inner-section-subtitle pb-10">What we offer</h5>
                                            <h3 className="tp-section-title">Our Platform</h3>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-6  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                                        <div className="tp-platform-text">
                                            <p>Explore how Avalance can help you toassess security
                                                controls continuously.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-xl-2 col-lg-2 d-none d-xl-block">
                                        <div className="tp-platform-img-box">
                                            <img src="assets/img/payment/platform-1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-10 col-lg-12">
                                        <div className="row-custom-wrapper">
                                            <div className="row-custom">
                                                <div className="col-custom">
                                                    <div className="tp-panel-item">
                                                        <div className="tp-panel-content">
                                                            <span>01.</span>
                                                            <h4 className="tp-panel-title child-one">Firewall &amp; VPN</h4>
                                                        </div>
                                                    </div>
                                                    <div className="tp-panel-item-2">
                                                        <div className="tp-panel-content-2">
                                                            <span>01.</span>
                                                            <h4 className="tp-panel-title-2">Live Security</h4>
                                                            <p>Blocks infected website tracking
                                                                programs and annoying.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-custom">
                                                    <div className="tp-panel-item">
                                                        <div className="tp-panel-content">
                                                            <span>02.</span>
                                                            <h4 className="tp-panel-title child-two">Hack Protection</h4>
                                                        </div>
                                                    </div>
                                                    <div className="tp-panel-item-2">
                                                        <div className="tp-panel-content-2">
                                                            <span>02.</span>
                                                            <h4 className="tp-panel-title-2">Hack Protection</h4>
                                                            <p>Blocks infected website tracking
                                                                programs and annoying.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-custom active">
                                                    <div className="tp-panel-item">
                                                        <div className="tp-panel-content">
                                                            <span>03.</span>
                                                            <h4 className="tp-panel-title child-three">Live Security</h4>
                                                        </div>
                                                    </div>
                                                    <div className="tp-panel-item-2">
                                                        <div className="tp-panel-content-2">
                                                            <span>03.</span>
                                                            <h4 className="tp-panel-title-2">Live Security</h4>
                                                            <p>Blocks infected website tracking
                                                                programs and annoying.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-custom">
                                                    <div className="tp-panel-item">
                                                        <div className="tp-panel-content">
                                                            <span>04.</span>
                                                            <h4 className="tp-panel-title child-four">Online Support</h4>
                                                        </div>
                                                    </div>
                                                    <div className="tp-panel-item-2">
                                                        <div className="tp-panel-content-2">
                                                            <span>04.</span>
                                                            <h4 className="tp-panel-title-2">Online Support</h4>
                                                            <p>Blocks infected website tracking
                                                                programs and annoying.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tp-platform-area-end */}
                        {/* tp-job-area-start */}
                        <div className="job-area pt-120 pb-120">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="job-section-box text-center mb-40">
                                            <h3 className="tp-section-title">Open Positions</h3>
                                            <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque tristique <br />
                                                Et amet risus enim accumsan sit purus sit.</p>
                                        </div>
                                    </div>
                                </div>
                                <Allroles/>
                            </div>
                        </div>
                        {/* tp-job-area-end */}
                        {/* tp-cta-area-start */}
                        <div className="tp-cta-area p-relative">
                            <div className="tp-cta-grey-bg grey-bg-2" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="tp-cta-bg" data-background="assets/img/cta/cta-bg.jpg">
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
                    <Footer />
                </div>
            </div>
        </div>
    );
}


export default Careers