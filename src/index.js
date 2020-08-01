import express from 'express';
import { scoreApplicants } from './utils';
import { validateBody } from './utils';

// @Comment: Setting up an express server @ port 8000
const app = express();
const PORT = 8000;

// @Comment: middleware to ensure json data is parsed.
app.use(express.json());

// @Route: home endpoint for processing requests.
app.post('/', (req, res) => {
    if (!validateBody(req.body)) {
        res.status(400).send('Bad request!');
    } else {
        const objectRequest = req.body;
        const objectResponse = scoreApplicants(objectRequest);
        res.send(JSON.stringify(objectResponse));
    }
});

// @Comment Starting server
app.listen(PORT, () => console.log('Server is running on port: ' + PORT));
