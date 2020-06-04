
import express from 'express';
import bodyParser from 'body-parser';

import { 
    beverageRouter,
} from './rest/routes';

const app = express();

app.set('json spaces', 4);
app.disable('etag');

app.use(bodyParser.json({ limit: '50mb', extended: false, type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }));

app.get('/api/v1/health', (_, res) => res.status(200).json({ message: 'Hello World!' }));

// routes
app.use('/beverage', beverageRouter);

export default app;
