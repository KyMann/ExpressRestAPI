import express from 'express';
import path from 'path';

import logger from './logger';

const PORT = 7878;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
//TODO: test if this exposes client.js to download, is that a security risk?

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
    logger.debug('home page was visited');
});

app.get('/status', async (request, response) => {
    const result = 'Server Is Up';
    //TODO: add dynamic server status
    logger.debug('updated status');
})

app.listen(PORT, (err) => {
    if (err) {
        logger.debug('server error', err);
    }
    logger.debug(`server is listening on ${PORT}`);
});