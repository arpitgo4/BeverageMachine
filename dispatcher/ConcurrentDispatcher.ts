
import path from 'path';

import AbstractDispatcher from './AbstractDispatcher';
import Beverage from '../implementation/Beverage';
import AbstractBeverageMachine from '../machine/AbstractBeverageMachine';

const { StaticPool } = require("node-worker-threads-pool");

export default class ConcurrentDispatcher extends AbstractDispatcher {

    THREADPOOL_SIZE: number = 10;
    THREADPOOL_INSTANCE;

    constructor(beverageMachine: AbstractBeverageMachine) {
        super(beverageMachine);
        this.THREADPOOL_INSTANCE = new StaticPool({
            size: this.THREADPOOL_SIZE,
            task: path.resolve(path.join('workerScript.js')),
        });
        this.beverageMachine = beverageMachine;
    }

    public async dispatch(beverageId: string): Promise<Beverage> {
        let beverage = undefined;
        try {
            beverage = await this.THREADPOOL_INSTANCE.exec(beverageId);
        } catch (e) {
            console.log(`Error making beverage!! ${e.message}`);
        }

        return beverage;
    }

}