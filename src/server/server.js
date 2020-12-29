// server/server.js

import express from 'express';
const app = express();
import api from './routes/index';

app.use('/api', api);

app.listen(3001, () => console.log('Node.js Server is running on port 3001...'));
