import bunyan from 'bunyan';

const logger = bunyan.createLogger({
    name: `[beverage-machine]`,
    stream: process.stdout,
    level: 'trace',
});

// to disable bunyan logs in 'test' mode
if (process.env.NODE_ENV === 'test')
    logger.level(bunyan.FATAL + 1);

export default logger;