import logger from './utils/logger';

logger.info('Booting Beverage Machine');
logger.info('Preparing Repositories');

require('net').createServer().listen();