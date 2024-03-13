const express = require('express')
const app = express()
const port = 3001
var uniqid = require('uniqid')

const cors = require('cors')
app.use(cors())

const database = require('./database')
const schema = require('./schema')
const Job = require('./schema')

async function createJob(jobData) {
    try {
      const job = await schema.create(jobData);
      console.log('Job created successfully:', job);
    } catch (error) {
      console.error('Error creating job:', error);
    }
  }

const jobData = {
  jobId: uniqid(),
  jobDescription: 'We are seeking a skilled and passionate Frontend Developer to join our team. In this role, you will be responsible for creating engaging and intuitive user experiences on our web applications. You will collaborate closely with our design and backend teams to implement user interfaces that meet both functional and aesthetic requirements. The ideal candidate will have a strong understanding of frontend technologies and frameworks, with a keen eye for detail and a passion for creating seamless user experiences.',
  jobTitle: 'Full Stack Developer Intern',
  jobLocation: 'Siddipet',
  jobRequired : `The successful candidate should possess a Bachelor's degree in Computer Science or a related field, or equivalent practical experience. You should have a solid understanding of HTML, CSS, and JavaScript, with proficiency in at least one modern frontend framework such as React, Vue.js, or Angular. Experience with responsive design techniques and cross-browser compatibility is essential. Strong problem-solving skills and the ability to work efficiently both independently and in a team environment are crucial. Additionally, familiarity with version control systems such as Git and experience with testing frameworks like Jest or Jasmine would be advantageous. Overall, we are looking for someone who is enthusiastic about frontend development and eager to contribute to our dynamic and collaborative team.`
};

database.on('error', console.error.bind(console, 'MongoDB connection error:'));
database.once('open', async () => {
  console.log('Connected to MongoDB');

  await createJob(jobData);
});

app.get('/alljobs', async (req, res) => {
  try {
    const response = await schema.find()
    res.json(response)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.get('/job/:id', async (req, res) => {
  try {
    const jobId = req.params.id
    const response = await schema.findOne({ jobId: jobId })

    if (!response) {
      return res.status(404).json({ error: 'Job not found' })
    }
    res.json(response)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

app.post('/addjob', async (req, res) => {
  try {
    const formData = {
      jobId: uniqid(),
      jobDescription: req.headers.jobdescription,
      jobTitle: req.headers.jobtitle,
      jobLocation: req.headers.joblocation,
      jobRequired: req.headers.jobrequired,
    }

    console.log(formData)
    const job = await schema.create(formData)
    console.log('Job created successfully:', job)
  } catch (error) {
    console.error('Error creating job:', error)
  }
})


app.delete('/deletejob/:id',async (req,res)=>{
   try
   {
      const jobId = req.params.id;
      const deleted = await schema.deleteOne({jobId : jobId});
      res.sendStatus(200);
   }
   catch(error)
   {
      console.log("Failed to delete job ", error);
   }
})