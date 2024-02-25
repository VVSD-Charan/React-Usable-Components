import React from 'react'
import Header from './commons/Header';
import Footer from './commons/Footer';
import { team } from './Data';

// Importing cta images 
import ctabg from './img/cta/cta-bg.jpg'

const Team = () => {
    return (
        <div>
            {/* back-to-top-start  */}
            <button className="scroll-top scroll-to-target" data-target="html">
                <i className="far fa-angle-double-up" />
            </button>
            {/* back-to-top-end  */}
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
                        <div className="breadcrumb__area breadcrumb-height p-relative blue-bg-2">
                            <div className="breadcrumb__shape-1">
                                <img src="assets/img/breadcrumb/breadcrumb-shape-1.png" alt="" />
                            </div>
                            <div className="breadcrumb__shape-2">
                                <img src="assets/img/breadcrumb/breadcrumb-shape-2.png" alt="" />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="breadcrumb__content">
                                            <h3 className="breadcrumb__title tp-char-animation">Team Member</h3>
                                            <div className="breadcrumb__list tp-title-anim">
                                                <span className="child-one"><a href="#">Home</a></span>
                                                <span className="dvdr"><i className="fal fa-angle-right" /></span>
                                                <span>Team Member</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-5 col-lg-4 text-center text-md-end">
                                        <div className="breadcrumb__img p-relative text-start z-index">
                                            <img className="z-index-3" src="assets/img/breadcrumb/breadcrumb-3.png" alt="" />
                                            <div className="breadcrumb__sub-img wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".4s">
                                                <img src="assets/img/breadcrumb/breadcrumb-sub-1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* breadcrumb-area-end */}
                        {/* tp-team-area-start */}
                        <div className="tp-team-area tp-team-inner pt-100 pb-75">
                            <div className="container">
                                <div className="tp-team-section-wrapper tp-team-inner-section mb-70">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="tp-team-section-box text-center">
                                                <h5 className="inner-section-subtitle pb-10">Talented Team</h5>
                                                <h3 className="tp-section-title mb-0 text-black">Meet our Team Members</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {
                                        team.map((item, index) => {
                                            return (
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-70 tp-border-after-1 team-inner-border-right" key={index}>
                                                    <div className="tp-team-item text-center tp-team-inner-title-color z-index">
                                                        <div className="tp-team-img">
                                                            <img src="assets/img/team/team-4-1.png" alt="" />
                                                        </div>
                                                        <div className="tp-team-content">
                                                            <h4 className="tp-team-title-sm"><a href="team-details.html">{item.name}</a></h4>
                                                            <span>{item.role}</span>
                                                        </div>
                                                        <div className="tp-team-social">
                                                            <a className="icon-color-1" href="#">
                                                                <i className="fab fa-facebook-f" />
                                                                <span />
                                                            </a>
                                                            <a className="icon-color-2" href="#">
                                                                <i className="fab fa-instagram" />
                                                                <span />
                                                            </a>
                                                            <a className="icon-color-3" href="#">
                                                                <i className="fab fa-twitter" />
                                                                <span />
                                                            </a>
                                                            <a className="icon-color-4" href="#">
                                                                <i className="fab fa-linkedin-in" />
                                                                <span />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        {/* tp-team-area-end */}
                        {/* tp-cta-area-start */}
                        <div className="tp-cta-area p-relative">
                            <div className="tp-cta-grey-bg grey-bg-2" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="tp-cta-bg" style={{background:`url(${ctabg})`}}>
                                            <div className="tp-cta-content tp-inner-font text-center">
                                                <h3 className="tp-section-title text-white">Start your career with us.</h3>
                                                <p>Join our team of passionate people who work hard to impact lives of people.</p>
                                                <a className="tp-btn-inner white-bg text-black" href="/careers">Join our team</a>
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

export default Team