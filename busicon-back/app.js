const express = require('express');
const app = express();
const port = 3001;
var uniqid = require('uniqid'); 

const cors = require('cors') 
app.use(cors()); 

const database = require('./database');
const schema = require('./schema');
const Job = require('./schema');

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
    jobDescription: ['Add animations to web pages.', 
        'Optimize API performance.',
        'Work with both SQL and NoSQL databases',
        'Work with cloud services like AWS, Azure',
        'Make pages responsive for all screens.',
        'Ensure code re-usability.',
        'Make responsive web pages using React.',
        'Knowledge of Material UI is a plus.'
    ],
    jobTitle: 'Full Stack Developer Intern',
    jobLocation: 'Siddipet',
    jobRequired : [
        'Good knowledge of JavaScript and React life cycle .',
        'Good communication skills and knowlede about SDLC',
        'Should be good in using JavaScript DOM',
        'Good problem solving skills',
        'Proficient in atleast one programming language like C/C++/Python',
        'Past internship / work experience is a plus.'
    ]
  };
  
  database.on('error', console.error.bind(console, 'MongoDB connection error:'));
  database.once('open', async () => {
    console.log('Connected to MongoDB');
  
    await createJob(jobData);
  });

app.get('/alljobs', async (req, res) => {
    try {
        const response = await schema.find(); 
        console.log(response)
        res.json(response); 
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/job/:id', async (req, res) => {
  try {
    const jobId = req.params.id;
    const response = await schema.findOne({ jobId: jobId });

    if (!response) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(response);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});