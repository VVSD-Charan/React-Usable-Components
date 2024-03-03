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
            await axios.post('http://localhost:3001/addjob', null, config);
        } catch (error) {
            console.log(error);
        }
    }
    

  return (
    <form onSubmit={handleSubmit} style={{margin:'120px'}}>

        <label for='jobTitle'>Job Role / Title </label>
        <input type='text' id='jobTitle' name='jobTitle' placeholder='title'/> <br/><br/>

        <label for='jobDescription'>Job Description </label>
        <input type='text' id='jobDescription' name='jobDescription' placeholder='Description'/> <br/><br/>

        <label for='jobRequired'>Job Requirements </label>
        <input type='text' id='jobRequired' name='jobRequired' placeholder='Requirements'/>  <br/><br/>

        <label for='jobLocation'>Job Location </label>
        <input id='jobLocation' type='text' name='jobLocation' placeholder='Location'/>  <br/><br/>

        <button type='submit' style={{backgroundColor:'black',color:'white',padding:'10px 20px',borderRadius:'5px'}}>submit</button>
    </form>
  )
}

export default AddJob