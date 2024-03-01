import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Application = ({ role }) => {

    const form = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(form)

        emailjs
            .sendForm('service_ozwo3sa', 'template_d8fv6ja', form.current, {
                publicKey: 'e3YmNJZW4Dt8vToN1',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    alert("Message sent successfully")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }

    return (
        <div className="col-xl-5 col-lg-5 career-details-pin">
            <div id="show" className="career-details-hide-wrapper">
                <div className="career-details-apply-info-box pb-10">
                    <div className="career-details-profile-box pb-20">
                        <h4 className="career-details-title-xs">Profile</h4>
                        <p>Basic information about you</p>
                    </div>
                    <div className="postbox__comment-form">
                        <form onSubmit={handleSubmit} ref={form} className="box">
                            <div className="row gx-20">
                                <div className="col-12">
                                    <div className="postbox__comment-input mb-30">
                                        <input style={{ display: 'none' }} type='text' name='job_role' defaultValue={role} />
                                        <input type="text" className="inputText" name='user_name' required />
                                        <span className="floating-label">Full  Name</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="postbox__comment-input mb-30">
                                        <input type="text" name='user_email' className="inputText" required />
                                        <span className="floating-label">Your Email</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="postbox__comment-input mb-30">
                                        <input type="text" name='user_contact' className="inputText" required />
                                        <span className="floating-label">Phone</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="postbox__comment-input mb-35">
                                        <input type="text" name='user_address' className="inputText" required />
                                        <span className="floating-label">Address</span>
                                    </div>
                                </div>
                            </div>

                            <div className="career-details-apply-info-box">
                                <div className="career-details-profile-box pb-20">
                                    <h4 className="career-details-title-xs">Application Details</h4>
                                    <p>Summarize your relevant experience</p>
                                </div>
                                <div className="postbox__comment-form">
                                    <div className="row gx-20">
                                        <div className="col-12">
                                            <div className="postbox__comment-input mb-30">
                                                <input type="text" name='user_linkedin' className="inputText" />
                                                <span className="floating-label">LinkedIn Profile</span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="postbox__comment-input mb-30">
                                                <input type="text" name='user_personal' className="inputText" />
                                                <span className="floating-label">Personal website</span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="postbox__comment-input mb-30">
                                                <input type="text" name='user_resume' required className="inputText" />
                                                <span className="floating-label">Resume Link</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-12">
                                    <div className="postbox__comment-input mb-30">
                                        <textarea className="textareaText" defaultValue={null} name='user_message' />
                                        <span className="floating-label-2">Personal note</span>
                                    </div>
                                </div>
                                <div className="col-xxl-12">
                                    <div className="postbox__btn-box mb-50">
                                        <button type='submit' className="submit-btn w-100">Submit Application</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Application