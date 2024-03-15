import React from 'react'
import axios from 'axios';

const AddJob = () => {

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            jobtitle: e.target.jobTitle.value,
            jobdescription: e.target.jobDescription.value,
            jobrequired: e.target.jobRequired.value,
            joblocation: e.target.jobLocation.value
        };

        try {
            const config = {
                headers: formData
            };
            const resp = await axios.post('http://localhost:3001/addjob', null, config);

            if(resp && resp?.status === 200)
            {
                alert("Job created successfully");
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="container pt-120">
            <div className="row gx-0">
                <div className="col-xl-7 col-lg-6">
                    <div className="contact-form-right-warp">
                        <div className="postbox__comment-form">
                            <p style={{textAlign:'center',fontSize:'30px'}}>Add a job</p>
                            <form className="box" onSubmit={handleSubmit}>
                                <div className="row gx-20">
                                    <div className="col-12">
                                        <div className="postbox__comment-input mb-30">
                                            <input type="text" name='jobTitle' className="inputText" required />
                                            <span className="floating-label">Job Title</span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="postbox__comment-input mb-30">
                                            <input type="text" name='jobDescription' className="inputText" required />
                                            <span className="floating-label">Job Description</span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="postbox__comment-input mb-30">
                                            <input type="text" name='jobRequired' className="inputText" required />
                                            <span className="floating-label">Job Requirements</span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="postbox__comment-input mb-30">
                                            <input type="text" name='jobLocation' className="inputText" required />
                                            <span className="floating-label">Job Location</span>
                                        </div>
                                    </div>
                                    <div className="col-xxl-12">
                                        <div className="postbox__btn-box">
                                            <button type='submit' className="submit-btn w-100">Add job</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddJob