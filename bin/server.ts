
require('dotenv').config();
import app from '../app';

function startServer() {

    const { SERVER_PORT, } = process.env;

    // returns http-server instance
    return app.listen(SERVER_PORT, function(err) {
        if (err) {
          return console.error(err);
        }
  
        console.log(`[server] Listening at http://localhost:${SERVER_PORT}`);
    });
};


export default startServer();