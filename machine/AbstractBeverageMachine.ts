
import Beverage from "../implementation/Beverage";
import { BeverageModel } from "Interfaces";
import AbstractFactory from "../factory/AbstractFactory";
import AbstractBeverageRepository from "../repository/AbstractBeverageRepository";
import IngredientIndicator from "../implementation/IngredientIndicator";


export default abstract class AbstractBeverageMachine {

    private logger: any;
    private beverageFactory: AbstractFactory;
    private beverageRepository: AbstractBeverageRepository;
    private ingredientIndicator: IngredientIndicator;

    constructor(beverageFactory: AbstractFactory, beverageRepository: AbstractBeverageRepository, ingredientIndicator: IngredientIndicator, loggerInstance: any) {
        this.logger = loggerInstance;
        this.beverageFactory = beverageFactory;
        this.beverageRepository = beverageRepository;
        this.ingredientIndicator = ingredientIndicator;
    }

    public createBeverage(beverageModel: BeverageModel): Beverage {
        const beverage = <Beverage> this.beverageFactory.createInstance(beverageModel);
        return beverage.prepare();
    }

    public getBeverages(): Array<BeverageModel> {
        return this.beverageRepository.getAllBeverages();
    }

    public refillIngredient(ingredientName: string, quantity: number): void {
        this.ingredientIndicator.refillLowIngredient(ingredientName, quantity);
    }

    public getLowIngredients(): Array<string> {
        return this.ingredientIndicator.getAllIngredients();
    }
    
}