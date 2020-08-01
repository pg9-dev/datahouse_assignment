import express from 'express';
import scoreApplicants from './scoreApplicants';
import validateBody from './utils';

const app = express();
const PORT = 8000;

app.use(express.json());
app.post('/', (req, res) => {
    if (!validateBody(req.body)) {
        res.status(400).send('Request Body is not valid!');
    } else {
        const objectRequest = req.body;
        const objectResponse = scoreApplicants(objectRequest);
        res.send(JSON.stringify(objectResponse));
    }
});

app.listen(PORT, () => console.log('Server is running on port: ' + PORT));
