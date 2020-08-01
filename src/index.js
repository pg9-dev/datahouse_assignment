import express from 'express';
import scoreApplicants from './scoreApplicants';

const app = express(); 
const PORT = 8000; 

app.use(express.json())
app.post('/', (req, res) => {
    const objectRequest = (req.body);
    const objectResponse = scoreApplicants(objectRequest);
    res.send(JSON.stringify(objectResponse));
}); 

app.listen(PORT, () => console.log("Server is running on port: " + PORT));