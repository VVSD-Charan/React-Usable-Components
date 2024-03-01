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
  
  // const jobData = {
  //   jobId: uniqid(),
  //   jobDescription: ['Add animations to web pages.', 
  //       'Make pages responsive for all screens.',
  //       'Ensure code re-usability.',
  //       'Make responsive web pages using React.',
  //       'Knowledge of Material UI is a plus.'
  //   ],
  //   jobTitle: 'Front End Developer Intern',
  //   jobLocation: 'Siddipet / Remote',
  //   jobRequired : [
  //       'Good knowledge of JavaScript and React life cycle .',
  //       'Good communication skills and knowlede about SDLC',
  //       'Should be good in using JavaScript DOM'
  //   ]
  // };
  
  database.on('error', console.error.bind(console, 'MongoDB connection error:'));
  // database.once('open', async () => {
  //   console.log('Connected to MongoDB');
  
  //   await createJob(jobData);
  // });

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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});