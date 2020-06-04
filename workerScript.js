
const { parentPort } = require('worker_threads');


parentPort.on('message', param => {
    const { beverage_id, } = param;
    const machine = require('./couplings').BEVERAGE_MACHINE;

    let beverage = undefined;
    try {
        beverage = machine.createBeverage(beverage_id);
    } catch (e) {
        console.log(`error making beverage!! ${e.message}`);
    }

    parentPort.postMessage(beverage);
});