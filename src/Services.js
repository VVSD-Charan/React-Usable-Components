import React from 'react'
import Header from './commons/Header';
import Footer from './commons/Footer';

// importing project imgs 
import projectinner4 from './img/project/project-inner-4.jpg'
import projectinner5 from './img/project/project-inner-5.jpg'
import projectinner6 from './img/project/project-inner-6.jpg'
import projectinner7 from './img/project/project-inner-7.jpg'

// Importing breadcrumb images
import breadcrumbshape1 from './img/breadcrumb/breadcrumb-shape-1.png'
import breadcrumbshape2 from './img/breadcrumb/breadcrumb-shape-2.png'
import breadcrumbsub1 from './img/breadcrumb/breadcrumb-sub-1.png'
import breadcrumb3 from './img/breadcrumb/breadcrumb-3.png'

// Importing service images 
import svicon31 from './img/service/sv-icon-3-1.png'
import svshape31 from './img/service/service-shape-3-1.png'

// Importing cta 
import ctabg from './img/cta/cta-bg.jpg'

// Importing faq 
import faq1 from './img/faq/faq-1.png'
import faqbordershape from './img/faq/faq-border-shape.png'

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
            <Header/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* tp-breadcrumb-area-start */}
                        <div className="about-banner-area p-relative">
                            <div className="about-shape-1 z-index-3">
                                <img src={breadcrumbshape1} alt="" />
                            </div>
                            <div className="about-shape-2 z-index-3">
                                <img src={breadcrumbshape2} alt="" />
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
                                        <div className="about-img about-img-height p-relative" data-background={breadcrumb3}>
                                            <div className="about-img-content">
                                                <h4 className="about-img-title" data-parallax="{&quot;y&quot;: 1000, &quot;smoothness&quot;: 10}">
                                                    <span>Our Top</span> <br />
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
                                            <a className="tp-btn-inner tp-btn-hover alt-color-black wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s" href="service-details.html">
                                                <span>See All Features</span>
                                                <b />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-8 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                                        <div className="tp-service-3-item mb-30 p-relative z-index" data-background="assets/img/service/service-3-bg.png">
                                            <div className="tp-service-3-icon">
                                                <img src={svicon31} alt="" />
                                            </div>
                                            <div className="tp-service-3-content">
                                                <span>CRM Management</span>
                                                <h4 className="tp-service-3-title-sm"><a href="service-details.html">Generate, Manage, and Convert leads <br /> into Customers. Automatically</a></h4>
                                            </div>
                                            <div className="tp-service-3-btn">
                                                <a className="tp-btn-white-solid" href="service-details.html">Learn More</a>
                                            </div>
                                            <div className="tp-service-3-shape">
                                                <img src={svshape31} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                                            <div className="tp-service-sm-icon">
                                                <svg width={66} height={53} viewBox="0 0 66 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5323 8.40774C4.17742 10.9497 1 12.2206 1 13.8C1 15.3794 4.17742 16.6503 10.5323 19.1923L19.5194 22.7871C25.8742 25.329 29.0516 26.6 33 26.6C36.9484 26.6 40.1258 25.329 46.4806 22.7871L55.4677 19.1923C61.8226 16.6503 65 15.3794 65 13.8C65 12.2206 61.8226 10.9497 55.4677 8.40774L46.4806 4.8129C40.1258 2.27097 36.9484 1 33 1C29.9474 1 27.3556 1.7597 23.4 3.27909" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M13.0516 20.2002L10.5323 21.2079C4.17742 23.7499 1 25.0208 1 26.6002C1 28.1795 4.17742 29.4505 10.5323 31.9925L19.5194 35.5873C25.8742 38.1292 29.0516 39.4002 33 39.4002C36.9484 39.4002 40.1258 38.1292 46.4806 35.5873L55.4677 31.9925C61.8226 29.4505 65 28.1795 65 26.6002C65 25.0208 61.8226 23.7499 55.4677 21.2079L52.9484 20.2002" stroke="CurrentColor" strokeWidth="1.5" />
                                                    <path d="M55.4677 44.7923C61.8226 42.2503 65 40.9794 65 39.4C65 37.8206 61.8226 36.5497 55.4677 34.0077L52.9484 33M13.0516 33L10.5323 34.0077C4.17742 36.5497 1 37.8206 1 39.4C1 40.9794 4.17742 42.2503 10.5323 44.7923L19.5194 48.3871C25.8742 50.929 29.0516 52.2 33 52.2C36.0526 52.2 38.6444 51.4403 42.6 49.9209" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <div className="tp-service-sm-content">
                                                <span>Project management</span>
                                                <h3 className="tp-service-sm-title"><a href="service-details.html">Automate Workflows <br /> and Monitor your Sales.</a></h3>
                                                <div className="tp-service-sm-link">
                                                    <a href="service-details.html">Learn More <i className="far fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                                            <div className="tp-service-sm-icon">
                                                <svg width={56} height={56} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.0303 22.0693C14.7374 21.7764 14.2626 21.7764 13.9697 22.0693C13.6768 22.3622 13.6768 22.837 13.9697 23.1299L15.0303 22.0693ZM20.6908 28.7904L21.2211 28.26V28.26L20.6908 28.7904ZM24.5091 28.7904L25.0394 29.3207L24.5091 28.7904ZM28.7907 24.5088L28.2604 23.9785L28.2604 23.9785L28.7907 24.5088ZM32.6091 24.5088L33.1394 23.9785V23.9785L32.6091 24.5088ZM41.4998 33.3995V34.1495C41.914 34.1495 42.2498 33.8137 42.2498 33.3995H41.4998ZM42.2498 26.6496C42.2498 26.2354 41.914 25.8996 41.4998 25.8996C41.0856 25.8996 40.7498 26.2354 40.7498 26.6496H42.2498ZM34.7498 32.6495C34.3356 32.6495 33.9998 32.9853 33.9998 33.3995C33.9998 33.8137 34.3356 34.1495 34.7498 34.1495V32.6495ZM13.9697 23.1299L20.1604 29.3207L21.2211 28.26L15.0303 22.0693L13.9697 23.1299ZM25.0394 29.3207L29.321 25.0391L28.2604 23.9785L23.9788 28.26L25.0394 29.3207ZM32.0787 25.0391L40.9695 33.9299L42.0301 32.8692L33.1394 23.9785L32.0787 25.0391ZM42.2498 33.3995V26.6496H40.7498V33.3995H42.2498ZM41.4998 32.6495H34.7498V34.1495H41.4998V32.6495ZM29.321 25.0391C30.0825 24.2776 31.3172 24.2776 32.0787 25.0391L33.1394 23.9785C31.7921 22.6312 29.6077 22.6312 28.2604 23.9785L29.321 25.0391ZM20.1604 29.3207C21.5077 30.668 23.6921 30.668 25.0394 29.3207L23.9788 28.26C23.2173 29.0216 21.9826 29.0216 21.2211 28.26L20.1604 29.3207Z" fill="CurrentColor" />
                                                    <circle cx="46.9007" cy="9.09994" r="8.09994" stroke="CurrentColor" strokeWidth="1.5" />
                                                    <path d="M54.9996 23.9498V27.9998C54.9996 40.7276 54.9996 47.0915 51.0456 51.0456C47.0915 54.9996 40.7276 54.9996 27.9998 54.9996C15.272 54.9996 8.90806 54.9996 4.95403 51.0456C1 47.0915 1 40.7276 1 27.9998C1 24.9533 1 22.2714 1.05422 19.8999M32.0498 1H27.9998C15.272 1 8.90806 1 4.95403 4.95403C3.76357 6.14449 2.93152 7.5534 2.34999 9.28867" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <div className="tp-service-sm-content">
                                                <span>Sales analytics</span>
                                                <h3 className="tp-service-sm-title"><a href="service-details.html">Track your Marketing to
                                                    see the best Results.</a></h3>
                                                <div className="tp-service-sm-link">
                                                    <a href="service-details.html">Learn More <i className="far fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".8s">
                                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                                            <div className="tp-service-sm-icon">
                                                <svg width={52} height={48} viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M51 6.62001C51 4.63217 49.0236 2.80248 45.7074 1.34903C42.7708 0.0619693 39.75 2.51698 39.75 5.72523V13.7748M51 6.62001C51 9.61027 46.5278 12.2426 39.75 13.7748M51 6.62001V14.4762M1 6.62001C1 4.63217 2.97638 2.80248 6.29262 1.34903C9.22923 0.0619696 12.25 2.51698 12.25 5.72523V13.7748M1 6.62001V38.4345C1 43.1651 12.1929 47 26 47C39.8071 47 51 43.1651 51 38.4345V24.4835M1 6.62001C1 9.61027 5.47222 12.2426 12.25 13.7748M12.25 13.7748C16.1947 14.6665 20.9205 15.1856 26 15.1856C31.0795 15.1856 35.8053 14.6665 39.75 13.7748" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M44.7539 24.4847C44.7539 26.5573 43.075 28.2374 41.0039 28.2374C38.9328 28.2374 37.2539 26.5573 37.2539 24.4847C37.2539 22.4121 38.9328 20.7319 41.0039 20.7319C43.075 20.7319 44.7539 22.4121 44.7539 24.4847Z" stroke="currentcolor" strokeWidth="1.5" />
                                                    <path d="M48.4961 41.9963L42.257 36.621C40.245 34.8875 37.2487 34.7149 35.034 36.2048L34.4569 36.5931C32.9179 37.6285 30.8241 37.4549 29.4939 36.1816L21.1912 28.2335C19.5341 26.6471 16.8758 26.5624 15.1121 28.0397L11.7219 30.8794L2.24609 39.7535" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <div className="tp-service-sm-content">
                                                <span>Easy Invoicing</span>
                                                <h3 className="tp-service-sm-title"><a href="service-details.html">Automate recurring
                                                    invoices and save time.</a></h3>
                                                <div className="tp-service-sm-link">
                                                    <a href="service-details.html">Learn More <i className="far fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                                            <div className="tp-service-sm-icon">
                                                <svg width={56} height={56} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.125 53.8111L11.6018 53.2322H11.6018L11.125 53.8111ZM9.67571 52.6175L10.1525 52.0386H10.1525L9.67571 52.6175ZM46.3243 52.6175L45.8475 52.0386L46.3243 52.6175ZM44.875 53.8111L44.3982 53.2322L44.875 53.8111ZM50.1757 52.6175L49.6989 53.1965L49.6989 53.1965L50.1757 52.6175ZM5.82429 52.6175L5.3475 52.0386L5.82429 52.6175ZM48.8818 1.43904L48.6577 2.15476L48.8818 1.43904ZM54.5261 6.66855L55.2307 6.41151V6.41151L54.5261 6.66855ZM7.11817 1.43904L7.3423 2.15476L7.11817 1.43904ZM1.47386 6.66855L2.17844 6.92558L1.47386 6.66855ZM54.25 14.5C54.25 14.9142 54.5858 15.25 55 15.25C55.4142 15.25 55.75 14.9142 55.75 14.5H54.25ZM55.75 25.3C55.75 24.8858 55.4142 24.55 55 24.55C54.5858 24.55 54.25 24.8858 54.25 25.3H55.75ZM1.75 46.9C1.75 46.4858 1.41421 46.15 1 46.15C0.585786 46.15 0.25 46.4858 0.25 46.9H1.75ZM0.25 36.1C0.25 36.5142 0.585786 36.85 1 36.85C1.41421 36.85 1.75 36.5142 1.75 36.1H0.25ZM13.7351 1.75H42.2649V0.25H13.7351V1.75ZM11.6018 53.2322L10.1525 52.0386L9.19892 53.1965L10.6482 54.3901L11.6018 53.2322ZM45.8475 52.0386L44.3982 53.2322L45.3518 54.3901L46.8011 53.1965L45.8475 52.0386ZM50.6525 52.0386C49.2773 50.9061 47.2227 50.9061 45.8475 52.0386L46.8011 53.1965C47.6224 52.5201 48.8776 52.5201 49.6989 53.1965L50.6525 52.0386ZM38.6018 53.2322C36.4001 51.4189 33.0999 51.4189 30.8982 53.2322L31.8518 54.3901C33.4996 53.033 36.0004 53.033 37.6482 54.3901L38.6018 53.2322ZM25.1018 53.2322C22.9001 51.4189 19.5999 51.4189 17.3982 53.2322L18.3518 54.3901C19.9996 53.033 22.5004 53.033 24.1482 54.3901L25.1018 53.2322ZM10.1525 52.0386C8.77733 50.9061 6.72267 50.9061 5.3475 52.0386L6.30108 53.1965C7.12237 52.5201 8.37763 52.5201 9.19892 53.1965L10.1525 52.0386ZM10.6482 54.3901C12.8499 56.2033 16.1501 56.2033 18.3518 54.3901L17.3982 53.2322C15.7504 54.5893 13.2496 54.5893 11.6018 53.2322L10.6482 54.3901ZM37.6482 54.3901C39.8499 56.2033 43.1501 56.2033 45.3518 54.3901L44.3982 53.2322C42.7504 54.5893 40.2496 54.5893 38.6018 53.2322L37.6482 54.3901ZM24.1482 54.3901C26.3499 56.2033 29.6501 56.2033 31.8518 54.3901L30.8982 53.2322C29.2504 54.5893 26.7496 54.5893 25.1018 53.2322L24.1482 54.3901ZM0.25 50.6103C0.25 52.1242 1.22269 53.2532 2.42305 53.7527C3.62151 54.2513 5.12794 54.1626 6.30108 53.1965L5.3475 52.0386C4.65134 52.6119 3.74563 52.6783 2.99926 52.3677C2.25481 52.058 1.75 51.4137 1.75 50.6103H0.25ZM54.25 50.6103C54.25 51.4137 53.7452 52.058 53.0007 52.3677C52.2544 52.6783 51.3487 52.6119 50.6525 52.0386L49.6989 53.1965C50.8721 54.1626 52.3785 54.2513 53.5769 53.7527C54.7773 53.2532 55.75 52.1242 55.75 50.6103H54.25ZM42.2649 1.75C45.7983 1.75 47.3929 1.75867 48.6577 2.15476L49.106 0.723313C47.5669 0.241331 45.6848 0.25 42.2649 0.25V1.75ZM55.75 12.7992C55.75 9.64279 55.7614 7.8662 55.2307 6.41151L53.8216 6.92558C54.2386 8.06875 54.25 9.51329 54.25 12.7992H55.75ZM48.6577 2.15476C51.1096 2.92259 53.0086 4.69724 53.8216 6.92558L55.2307 6.41151C54.2465 3.71358 51.9711 1.62057 49.106 0.723313L48.6577 2.15476ZM13.7351 0.25C10.3152 0.25 8.43312 0.241331 6.89403 0.723313L7.3423 2.15476C8.60713 1.75867 10.2017 1.75 13.7351 1.75V0.25ZM1.75 12.7992C1.75 9.51329 1.7614 8.06875 2.17844 6.92558L0.769283 6.41151C0.238596 7.8662 0.25 9.64279 0.25 12.7992H1.75ZM6.89403 0.723313C4.02888 1.62057 1.75351 3.71358 0.769283 6.41151L2.17844 6.92558C2.99136 4.69724 4.89044 2.92259 7.3423 2.15476L6.89403 0.723313ZM54.25 12.7992V14.5H55.75V12.7992H54.25ZM54.25 25.3V50.6103H55.75V25.3H54.25ZM1.75 50.6103V46.9H0.25V50.6103H1.75ZM1.75 36.1V12.7992H0.25V36.1H1.75Z" fill="CurrentColor" />
                                                    <path d="M21.0604 25.7002C20.7846 25.3913 20.3104 25.3644 20.0015 25.6403C19.6925 25.9162 19.6657 26.3903 19.9415 26.6993L21.0604 25.7002ZM24.7867 30.9998L24.2272 31.4993C24.3695 31.6586 24.573 31.7498 24.7867 31.7498C25.0003 31.7498 25.2038 31.6586 25.3461 31.4993L24.7867 30.9998ZM36.0604 19.4993C36.3363 19.1903 36.3095 18.7162 36.0005 18.4403C35.6915 18.1644 35.2174 18.1913 34.9415 18.5002L36.0604 19.4993ZM19.9415 26.6993L24.2272 31.4993L25.3461 30.5002L21.0604 25.7002L19.9415 26.6993ZM25.3461 31.4993L36.0604 19.4993L34.9415 18.5002L24.2272 30.5002L25.3461 31.4993Z" fill="CurrentColor" />
                                                    <path d="M14.5 41.5H19M41.5 41.5H28" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <div className="tp-service-sm-content">
                                                <span>Complete Visibility</span>
                                                <h3 className="tp-service-sm-title"><a href="service-details.html">Get real-time visibility
                                                    into every expense.</a></h3>
                                                <div className="tp-service-sm-link">
                                                    <a href="service-details.html">Learn More <i className="far fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                                            <div className="tp-service-sm-icon">
                                                <svg width={54} height={54} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.5987 29.5987V37.3987H37.3987V16.5986H16.5987V19.1986" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M37.3987 37.4014L45.1988 37.4001C49.5066 37.3995 52.9993 40.8911 53 45.1989C53.0007 49.5068 49.509 52.9995 45.2012 53.0002C40.8934 53.0009 37.4007 49.5092 37.4 45.2014L37.3987 37.4014Z" stroke="CurrentColor" strokeWidth="1.5" />
                                                    <path d="M16.6013 37.4014L8.80124 37.4001C4.49341 37.3995 1.00068 40.8911 1 45.1989C0.999321 49.5068 4.49096 52.9995 8.79878 53.0002C13.1066 53.0009 16.5993 49.5092 16.6 45.2014L16.6013 37.4014Z" stroke="CurrentColor" strokeWidth="1.5" />
                                                    <path d="M37.3987 16.5988L45.1988 16.6C49.5066 16.6007 52.9993 13.1091 53 8.80124C53.0007 4.49341 49.509 1.00068 45.2012 1C40.8934 0.999321 37.4007 4.49096 37.4 8.79878L37.3987 16.5988Z" stroke="CurrentColor" strokeWidth="1.5" />
                                                    <path d="M16.6013 16.5988L8.80124 16.6C4.49341 16.6007 1.00068 13.1091 1 8.80124C0.999321 4.49341 4.49096 1.00068 8.79878 1C13.1066 0.999321 16.5993 4.49096 16.6 8.79878L16.6013 16.5988Z" stroke="CurrentColor" strokeWidth="1.5" />
                                                </svg>
                                            </div>
                                            <div className="tp-service-sm-content">
                                                <span>FIELDS OPTION</span>
                                                <h3 className="tp-service-sm-title"><a href="service-details.html">Quick &amp; Easy Repeater Fields Option</a></h3>
                                                <div className="tp-service-sm-link">
                                                    <a href="service-details.html">Learn More <i className="far fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.1s">
                                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                                            <div className="tp-service-sm-icon">
                                                <svg width={53} height={58} viewBox="0 0 53 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M51.4 29C51.4 44.464 45.7588 57 38.8 57M38.8 1C43.9668 1 48.4073 7.91093 50.3516 17.8" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M1 29C1 13.536 6.64121 1 13.6 1C20.5588 1 26.2 13.536 26.2 29C26.2 44.464 20.5588 57 13.6 57C8.4332 57 3.99275 50.0891 2.04843 40.2" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M13.6 57C20.5588 57 26.2 44.464 26.2 29C26.2 13.536 20.5588 1 13.6 1" stroke="CurrentColor" strokeWidth="1.5" />
                                                    <path d="M17.8 29C17.8 38.2783 15.9196 45.8 13.6 45.8C11.2804 45.8 9.39999 38.2783 9.39999 29C9.39999 19.7216 11.2804 12.2 13.6 12.2C15.9196 12.2 17.8 19.7216 17.8 29Z" stroke="CurrentColor" strokeWidth="1.5" />
                                                    <path d="M13.6 1L38.8 1" stroke="CurrentColor" strokeWidth="1.5" />
                                                    <path d="M13.6 57L38.8 57" stroke="CurrentColor" strokeWidth="1.5" />
                                                    <path d="M17.8 29H15" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <div className="tp-service-sm-content">
                                                <span>Safe Online Services</span>
                                                <h3 className="tp-service-sm-title"><a href="service-details.html">Online services to view
                                                    company level.</a></h3>
                                                <div className="tp-service-sm-link">
                                                    <a href="service-details.html">Learn More <i className="far fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.2s">
                                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                                            <div className="tp-service-sm-icon">
                                                <svg width={66} height={53} viewBox="0 0 66 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5323 8.40774C4.17742 10.9497 1 12.2206 1 13.8C1 15.3794 4.17742 16.6503 10.5323 19.1923L19.5194 22.7871C25.8742 25.329 29.0516 26.6 33 26.6C36.9484 26.6 40.1258 25.329 46.4806 22.7871L55.4677 19.1923C61.8226 16.6503 65 15.3794 65 13.8C65 12.2206 61.8226 10.9497 55.4677 8.40774L46.4806 4.8129C40.1258 2.27097 36.9484 1 33 1C29.9474 1 27.3556 1.7597 23.4 3.27909" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M13.0516 20.2002L10.5323 21.2079C4.17742 23.7499 1 25.0208 1 26.6002C1 28.1795 4.17742 29.4505 10.5323 31.9925L19.5194 35.5873C25.8742 38.1292 29.0516 39.4002 33 39.4002C36.9484 39.4002 40.1258 38.1292 46.4806 35.5873L55.4677 31.9925C61.8226 29.4505 65 28.1795 65 26.6002C65 25.0208 61.8226 23.7499 55.4677 21.2079L52.9484 20.2002" stroke="CurrentColor" strokeWidth="1.5" />
                                                    <path d="M55.4677 44.7923C61.8226 42.2503 65 40.9794 65 39.4C65 37.8206 61.8226 36.5497 55.4677 34.0077L52.9484 33M13.0516 33L10.5323 34.0077C4.17742 36.5497 1 37.8206 1 39.4C1 40.9794 4.17742 42.2503 10.5323 44.7923L19.5194 48.3871C25.8742 50.929 29.0516 52.2 33 52.2C36.0526 52.2 38.6444 51.4403 42.6 49.9209" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <div className="tp-service-sm-content">
                                                <span>Online marketing</span>
                                                <h3 className="tp-service-sm-title"><a href="service-details.html">Get real-time visibility
                                                    into every expense.</a></h3>
                                                <div className="tp-service-sm-link">
                                                    <a href="service-details.html">Learn More <i className="far fa-arrow-right" /></a>
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