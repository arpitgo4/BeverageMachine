
import Beverage from "../implementation/Beverage";
import { BeverageModel } from "Interfaces";
import AbstractFactory from "../factory/AbstractFactory";
import AbstractBeverageRepository from "../repository/AbstractBeverageRepository";


export default abstract class AbstractBeverageMachine {

    private logger: any;
    private beverageFactory: AbstractFactory;
    private beverageRepository: AbstractBeverageRepository;

    constructor(beverageFactory: AbstractFactory, beverageRepository: AbstractBeverageRepository, loggerInstance: any) {
        this.logger = loggerInstance;
        this.beverageFactory = beverageFactory;
        this.beverageRepository = beverageRepository;
    }

    public createBeverage(beverageModel: BeverageModel): void {
        const beverage = <Beverage> this.beverageFactory.createInstance(beverageModel);
        beverage.prepare();
    }

    public getBeverages(): Array<BeverageModel> {
        return this.beverageRepository.getAllBeverages();
    }
    
}