// server/routes/index.js

import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    console.log('http://localhost:3001/api/');
    res.send({title: 'hello react!'});
});

export default router;