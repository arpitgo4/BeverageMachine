
import { DataModel } from "Interfaces";


export default abstract class AbstractFactory {

    protected logger: any;

    constructor(loggerInstance: any) {
        this.logger = loggerInstance;
    }

    public abstract createInstance(model: DataModel): object;

}