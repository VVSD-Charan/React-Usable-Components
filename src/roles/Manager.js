import React from 'react'
import Header from '../commons/Header';
import Footer from '../commons/Footer';
import Application from './Application';

const Manager = () => {

    const role = "Manager , Full time"
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
            <Header/>
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
                                        <div className="breadcrumb__content z-index-3">
                                            <h3 className="breadcrumb__title tp-char-animation">Careers Details</h3>
                                            <div className="breadcrumb__list wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".4s">
                                                <span className="child-one"><a href="#">Home</a></span>
                                                <span className="dvdr"><i className="fal fa-angle-right" /></span>
                                                <span className="child-one"><a href="#">Careers page</a></span>
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
                        <div className="career-details-area career-border-bottom pt-110 pb-110">
                            <div className="container">
                                <div className="row align-content-start">
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="career-details-wrapper">
                                            <div className="career-details-title-box">
                                                <span>Manager</span>
                                                <h4 className="career-details-title">Senior Manager</h4>
                                            </div>
                                            <div className="career-details-location-box">
                                                <span>
                                                    <svg width={15} height={17} viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.10747C1 3.73441 3.93813 1 7.5625 1C11.1869 1 14.125 3.73441 14.125 7.10747C14.125 10.4541 12.0305 14.3593 8.76256 15.7558C8.00076 16.0814 7.12424 16.0814 6.36244 15.7558C3.09452 14.3593 1 10.4541 1 7.10747Z" stroke="#5F6168" strokeWidth="1.5" />
                                                        <path d="M9.4375 7.56274C9.4375 8.59828 8.59803 9.43774 7.5625 9.43774C6.52697 9.43774 5.6875 8.59828 5.6875 7.56274C5.6875 6.52721 6.52697 5.68774 7.5625 5.68774C8.59803 5.68774 9.4375 6.52721 9.4375 7.56274Z" stroke="#5F6168" strokeWidth="1.5" />
                                                    </svg>
                                                    London, UK
                                                </span>
                                                <span>
                                                    <svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.5 15.75C12.5041 15.75 15.75 12.5041 15.75 8.5C15.75 4.49594 12.5041 1.25 8.5 1.25C4.49594 1.25 1.25 4.49594 1.25 8.5C1.25 12.5041 4.49594 15.75 8.5 15.75Z" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.5 5.52838V9.42838L11.1 10.7284" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Full-time
                                                </span>
                                                <span>Senior</span>
                                            </div>
                                            <div className="career-details-job-responsiblity mb-45">
                                                <h4 className="career-details-title-sm">Job Responsibilities</h4>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                                    suffered alteration in some form, by injected humour, or randomised words which don't
                                                    look even slightly believable. If you are going to use a passage
                                                    of Lorem Ipsum,anything embarrassing hidden.</p>
                                            </div>
                                            <div className="career-details-job-responsiblity mb-45">
                                                <h4 className="career-details-title-sm">Job Requirements</h4>
                                                <p className="pb-15">There are many variations of passages of Lorem Ipsum available, but the
                                                    majority have suffered alteration in some form, by injected humour, or randomised words
                                                    which don't look even slightly believable. If you are going to use a passage
                                                    of Lorem Ipsum,anything embarrassing hidden.</p>
                                                <div className="career-details-job-list">
                                                    <ul>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            5+ years experience in backend engineering, <br />
                                                            ideally in Python or Node
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            Experience building and operating backend <br />
                                                            distributed systems
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            Experience designing serverless architectures <br />
                                                            on AWS infrastructure
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="career-details-job-responsiblity mb-45">
                                                <h4 className="career-details-title-sm">Our Benefits</h4>
                                                <p className="pb-15">Now, the paradigm has shifted. The question is not why you should include
                                                    a content marketing strategy.</p>
                                                <div className="career-details-job-list">
                                                    <ul>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            Flexible hours
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            Unlimited PTO
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            Medical insurance
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            Career growth
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="career-details-job-responsiblity mb-20">
                                                <h4 className="career-details-title-sm">Job Requirements</h4>
                                                <p className="pb-15">There are many variations of passages of Lorem Ipsum available, but the
                                                    majority have suffered alteration in some form, by injected humour, or randomised words
                                                    which don't look even slightly believable. If you are going to use a passage
                                                    of Lorem Ipsum,anything embarrassing hidden.</p>
                                                <div className="career-details-job-list">
                                                    <ul>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            Experience building software and systems that balance <br /> simplicity,
                                                            flexibility, and security.
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            Track record with a smart contract language <br /> such as Solidity
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-long-arrow-right" />
                                                            A customer-focused and product-focused mindset.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="career-details-job-responsiblity">
                                                <h4 className="career-details-title-sm">Education &amp; Experience</h4>
                                                <p>TBachelors Degree in Interaction, Graphic Design, Media Arts or similar.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Application role={role}/>
                                </div>
                            </div>
                        </div>
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
                                <div className="job-post-box">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-md-4">
                                            <div className="job-post-info d-flex justify-content-start align-items-center">
                                                <div className="job-post-category">
                                                    <span>Product Designer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-5">
                                            <div className="job-post-wrapper d-flex align-items-center">
                                                <div className="job-post-time d-flex align-items-center">
                                                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9 16.75C13.2802 16.75 16.75 13.2802 16.75 9C16.75 4.71979 13.2802 1.25 9 1.25C4.71979 1.25 1.25 4.71979 1.25 9C1.25 13.2802 4.71979 16.75 9 16.75Z" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9 5.7998V9.9998L11.8 11.3998" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <span>Full-time</span>
                                                </div>
                                                <div className="job-post-location d-flex align-items-center">
                                                    <svg width={16} height={18} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.51463C1 3.9167 4.13401 1 8 1C11.866 1 15 3.9167 15 7.51463C15 11.0844 12.7658 15.2499 9.28007 16.7396C8.46748 17.0868 7.53252 17.0868 6.71993 16.7396C3.23416 15.2499 1 11.0844 1 7.51463Z" stroke="#5F6168" strokeWidth="1.5" />
                                                        <path d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z" stroke="#5F6168" strokeWidth="1.5" />
                                                    </svg>
                                                    <span>Newark, NJ</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3">
                                            <div className="job-post-apply-btn text-start text-md-end">
                                                <a className="tp-btn-inner tp-btn-hover alt-color-orange" href="#"><span>Apply</span> <b /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-post-box">
                                    <div className="row align-items-center">
                                        <div className=" col-lg-5 col-md-4">
                                            <div className="job-post-info d-flex justify-content-start align-items-center">
                                                <div className="job-post-category">
                                                    <span>Software Engineer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" col-lg-4 col-md-5">
                                            <div className="job-post-wrapper d-flex align-items-center">
                                                <div className="job-post-time d-flex align-items-center">
                                                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9 16.75C13.2802 16.75 16.75 13.2802 16.75 9C16.75 4.71979 13.2802 1.25 9 1.25C4.71979 1.25 1.25 4.71979 1.25 9C1.25 13.2802 4.71979 16.75 9 16.75Z" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9 5.7998V9.9998L11.8 11.3998" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <span>Full-time</span>
                                                </div>
                                                <div className="job-post-location d-flex align-items-center">
                                                    <svg width={16} height={18} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.51463C1 3.9167 4.13401 1 8 1C11.866 1 15 3.9167 15 7.51463C15 11.0844 12.7658 15.2499 9.28007 16.7396C8.46748 17.0868 7.53252 17.0868 6.71993 16.7396C3.23416 15.2499 1 11.0844 1 7.51463Z" stroke="#5F6168" strokeWidth="1.5" />
                                                        <path d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z" stroke="#5F6168" strokeWidth="1.5" />
                                                    </svg>
                                                    <span>London, UK</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" col-lg-3 col-md-3">
                                            <div className="job-post-apply-btn text-start text-md-end">
                                                <a className="tp-btn-inner tp-btn-hover alt-color-orange" href="#"><span>Apply</span> <b /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-post-box">
                                    <div className="row align-items-center">
                                        <div className=" col-lg-5 col-md-4">
                                            <div className="job-post-info d-flex justify-content-start align-items-center">
                                                <div className="job-post-category">
                                                    <span>Junior Frontend Developer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" col-lg-4 col-md-5">
                                            <div className="job-post-wrapper d-flex align-items-center">
                                                <div className="job-post-time d-flex align-items-center">
                                                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9 16.75C13.2802 16.75 16.75 13.2802 16.75 9C16.75 4.71979 13.2802 1.25 9 1.25C4.71979 1.25 1.25 4.71979 1.25 9C1.25 13.2802 4.71979 16.75 9 16.75Z" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9 5.7998V9.9998L11.8 11.3998" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <span>Full-time</span>
                                                </div>
                                                <div className="job-post-location d-flex align-items-center">
                                                    <svg width={16} height={18} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.51463C1 3.9167 4.13401 1 8 1C11.866 1 15 3.9167 15 7.51463C15 11.0844 12.7658 15.2499 9.28007 16.7396C8.46748 17.0868 7.53252 17.0868 6.71993 16.7396C3.23416 15.2499 1 11.0844 1 7.51463Z" stroke="#5F6168" strokeWidth="1.5" />
                                                        <path d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z" stroke="#5F6168" strokeWidth="1.5" />
                                                    </svg>
                                                    <span>Brooklyn, NY</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" col-lg-3 col-md-3">
                                            <div className="job-post-apply-btn text-start text-md-end">
                                                <a className="tp-btn-inner tp-btn-hover alt-color-orange" href="#"><span>Apply</span> <b /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-post-box">
                                    <div className="row align-items-center">
                                        <div className=" col-lg-5 col-md-4">
                                            <div className="job-post-info d-flex justify-content-start align-items-center">
                                                <div className="job-post-category">
                                                    <span>Finance Executive</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" col-lg-4 col-md-5">
                                            <div className="job-post-wrapper d-flex align-items-center">
                                                <div className="job-post-time d-flex align-items-center">
                                                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9 16.75C13.2802 16.75 16.75 13.2802 16.75 9C16.75 4.71979 13.2802 1.25 9 1.25C4.71979 1.25 1.25 4.71979 1.25 9C1.25 13.2802 4.71979 16.75 9 16.75Z" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9 5.7998V9.9998L11.8 11.3998" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <span>Full-time</span>
                                                </div>
                                                <div className="job-post-location d-flex align-items-center">
                                                    <svg width={16} height={18} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.51463C1 3.9167 4.13401 1 8 1C11.866 1 15 3.9167 15 7.51463C15 11.0844 12.7658 15.2499 9.28007 16.7396C8.46748 17.0868 7.53252 17.0868 6.71993 16.7396C3.23416 15.2499 1 11.0844 1 7.51463Z" stroke="#5F6168" strokeWidth="1.5" />
                                                        <path d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z" stroke="#5F6168" strokeWidth="1.5" />
                                                    </svg>
                                                    <span>Newark, NJ</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" col-lg-3 col-md-3">
                                            <div className="job-post-apply-btn text-start text-md-end">
                                                <a className="tp-btn-inner tp-btn-hover alt-color-orange" href="#"><span>Apply</span> <b /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-post-box">
                                    <div className="row align-items-center">
                                        <div className=" col-lg-5 col-md-4">
                                            <div className="job-post-info d-flex justify-content-start align-items-center">
                                                <div className="job-post-category">
                                                    <span>Junior Copywriter</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" col-lg-4 col-md-5">
                                            <div className="job-post-wrapper d-flex align-items-center">
                                                <div className="job-post-time d-flex align-items-center">
                                                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9 16.75C13.2802 16.75 16.75 13.2802 16.75 9C16.75 4.71979 13.2802 1.25 9 1.25C4.71979 1.25 1.25 4.71979 1.25 9C1.25 13.2802 4.71979 16.75 9 16.75Z" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9 5.7998V9.9998L11.8 11.3998" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <span>Full-time</span>
                                                </div>
                                                <div className="job-post-location d-flex align-items-center">
                                                    <svg width={16} height={18} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.51463C1 3.9167 4.13401 1 8 1C11.866 1 15 3.9167 15 7.51463C15 11.0844 12.7658 15.2499 9.28007 16.7396C8.46748 17.0868 7.53252 17.0868 6.71993 16.7396C3.23416 15.2499 1 11.0844 1 7.51463Z" stroke="#5F6168" strokeWidth="1.5" />
                                                        <path d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z" stroke="#5F6168" strokeWidth="1.5" />
                                                    </svg>
                                                    <span>London, UK</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" col-lg-3 col-md-3">
                                            <div className="job-post-apply-btn text-start text-md-end">
                                                <a className="tp-btn-inner tp-btn-hover alt-color-orange" href="#"><span>Apply</span> <b /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                    <Footer/>
                </div>
            </div>
            {/* JS here */}
        </div>
    );
}
export default Manager