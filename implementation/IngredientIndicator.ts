
import AbstractIngredientRepository from "../repository/AbstractIngredientRepository";


export default class IngredientIndicator {

    private lowIngredients: Array<string>;
    private logger: any;
    private ingredientRepository: AbstractIngredientRepository;

    constructor(ingredientRepositoryInstance: AbstractIngredientRepository, logger: any) {
        this.logger = logger;
        this.lowIngredients = [];
        this.ingredientRepository = ingredientRepositoryInstance;
    }

    public addIngredient(ingrendientName: string) {
        const alreadyIncluded = this.lowIngredients.some(ingName => ingName === ingrendientName);
        if (!alreadyIncluded) {
            this.lowIngredients.push(ingrendientName);
            this.logger.warn(`${ingrendientName} added to indicator!!`);
        }
    }

    public removeIngredient(ingrendientName: string) {
        const idx = this.lowIngredients.indexOf(ingrendientName);
        if (idx != -1) {
            this.lowIngredients.splice(idx, 1);
            this.logger.warn(`${ingrendientName} removed from indicator!!`);
        }
    }

    public getAllIngredients() {
        return this.lowIngredients;
    }

    public refillLowIngredient(ingrendientName: string, quantity: number) {
        this.ingredientRepository.refillIngredient(ingrendientName, quantity);
    }

}