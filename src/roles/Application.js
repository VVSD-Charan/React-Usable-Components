import React from 'react'

const Application = ({role}) => {
    return (
        <div className="col-xl-5 col-lg-5 career-details-pin">
            <div id="show" className="career-details-hide-wrapper">
                <div className="career-details-apply-info-box pb-10">
                    <div className="career-details-profile-box pb-20">
                        <h4 className="career-details-title-xs">Profile</h4>
                        <p>Basic information about you</p>
                    </div>
                    <div className="postbox__comment-form">
                        <form action="#" className="box">
                            <div className="row gx-20">
                                <div className="col-12">
                                    <div className="postbox__comment-input mb-30">
                                        <input type="text" className="inputText" required />
                                        <span className="floating-label">Full  Name</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="postbox__comment-input mb-30">
                                        <input type="text" className="inputText" required />
                                        <span className="floating-label">Your Email</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="postbox__comment-input mb-30">
                                        <input type="text" className="inputText" required />
                                        <span className="floating-label">Phone</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="postbox__comment-input mb-35">
                                        <input type="text" className="inputText" required />
                                        <span className="floating-label">Address</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="career-details-apply-info-box">
                    <div className="career-details-profile-box pb-20">
                        <h4 className="career-details-title-xs">Application Details</h4>
                        <p>Summarize your relevant experience</p>
                    </div>
                    <div className="postbox__comment-form">
                        <form action="#" className="box">
                            <div className="row gx-20">
                                <div className="col-12">
                                    <div className="postbox__comment-input mb-30">
                                        <input type="text" className="inputText" required />
                                        <span className="floating-label">LinkedIn Profile</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="postbox__comment-input mb-30">
                                        <input type="text" className="inputText" required />
                                        <span className="floating-label">Personal website</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="postbox__select mb-30">
                                        <select>
                                            <option>Years of experience</option>
                                            <option>01 Year</option>
                                            <option>02 Year</option>
                                            <option>03 Year</option>
                                            <option>04 Year</option>
                                            <option>05 Year</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="postbox__comment-input mb-35">
                                        <input type="text" className="inputText" required />
                                        <span className="floating-label">Expected salary</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-xxl-12">
                        <div className="postbox__comment-input mb-30">
                            <textarea className="textareaText" required defaultValue={""} />
                            <span className="floating-label-2">Personal note</span>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="postbox__resume-title-box">
                            <h5 className="career-details-title-xs pb-15">Upload a recent resume or CV</h5>
                        </div>
                        <div className="postbox__resume mb-30">
                            <input id="cv" type="file" hidden />
                            <label htmlFor="cv">
                                <span>
                                    <svg width={18} height={15} viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9133 10.4519L9.00453 7.54309L6.0957 10.4519" stroke="#202124" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.00391 7.54309V14.0879" stroke="#202124" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.1044 12.1899C15.8137 11.8032 16.374 11.1914 16.6969 10.4509C17.0198 9.7104 17.0869 8.88347 16.8877 8.1006C16.6884 7.31774 16.2341 6.62352 15.5965 6.12752C14.9588 5.63152 14.1742 5.36198 13.3664 5.36145H12.4501C12.23 4.51006 11.8197 3.71966 11.2502 3.04965C10.6806 2.37965 9.96657 1.84748 9.16174 1.49315C8.35691 1.13883 7.48222 0.971567 6.60344 1.00395C5.72467 1.03632 4.86466 1.2675 4.08808 1.68009C3.31151 2.09268 2.63857 2.67595 2.11986 3.38605C1.60115 4.09615 1.25017 4.9146 1.09331 5.77988C0.936443 6.64515 0.977774 7.53472 1.21419 8.38172C1.45061 9.22872 1.87597 10.0111 2.45829 10.67" stroke="#202124" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.9133 10.4519L9.00453 7.54309L6.0957 10.4519" stroke="#202124" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Drag to upload your resume, or browse
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="postbox__btn-box mb-50">
                            <button className="submit-btn w-100">Submit Application</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-12">
                <div className="career-details-social-box mb-20">
                    <a className="facebook" href="#"><i className="fab fa-facebook-f" /></a>
                    <a className="twitter" href="#"><i className="fab fa-twitter" /></a>
                    <a className="instagram p-relative" href="#">
                        <div className="insta-bg" />
                        <i className="fab fa-instagram" />
                    </a>
                    <a className="linkedin" href="#"><i className="fab fa-linkedin-in" /></a>
                </div>
                <div className="career-details-bottom-text text-center">
                    <a href="#">Employee at Softec?</a>
                </div>
            </div>
        </div>
    )
}

export default Application