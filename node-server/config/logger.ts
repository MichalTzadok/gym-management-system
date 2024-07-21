import log4js from 'log4js';

log4js.configure({
    appenders: { 
        everything: { type: 'file', filename: 'all-the-logs.log' } 
    },
    categories: { 
        default: { appenders: ['everything'], level: 'debug' }
    }
});

const logger = log4js.getLogger();
export default logger;
