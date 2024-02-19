import React from 'react'
import logo from '../img/busicon/logo.png'
import downlogo from '../img/busicon/down-logo.png'

const Header = () => {
  return (
    <header className="tp-header-height">
                {/* tp-header-area-start */}
                <div id="header-sticky" className="tp-header-2__area header-sticky-bg-2 tp-header-2__transparent tp-header-2__plr z-index-3">
                    <div className="container-fluid g-0">
                        <div className="row g-0 align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                                <div className="tp-header-2__logo">
                                    <a className="white-logo" href="/"><img src={logo} alt="" height={75}/></a>
                                    <a className="black-logo" href="/"><img src={downlogo} alt="" height={75} style={{marginBottom:'20px'}}/></a>
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
                                                <a href="/services">Services</a>
                                                <ul className="submenu">
                                                    <li><a href="#">Finance</a></li>
                                                    <li><a href="#">Tax Compliances</a></li>
                                                    <li><a href="#">Legalities</a></li>
                                                    <li><a href="#">Collaboration</a></li>
                                                    <li><a href="#">Business Management</a></li>
                                                    <li><a href="/services">All services</a></li>
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
  )
}

export default Header