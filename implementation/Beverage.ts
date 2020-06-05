
import { BeverageModel } from "Interfaces";
import Ingredient from "./Ingredient";
import LowIngredientException from "../exceptions/LowIngredientException";
import AbstractFactory from "../factory/AbstractFactory";

import Couplings from '../couplings';

export default class Beverage {
    
    private model: BeverageModel;

    private logger: any;
    private ingredientFactory: AbstractFactory;

    constructor(beverageModel: BeverageModel, loggerInstance: any) {
        this.model = beverageModel;
        this.logger = loggerInstance;
        this.ingredientFactory = Couplings.INGREDIENT_FACTORY;
    }

    private getIngredients(): Array<Ingredient> {
        const ingredients = [];
        for (const ingredientModel of this.model.ingredients_list) {
            const ingredientInstance = this.ingredientFactory.createInstance(ingredientModel);
            ingredients.push(ingredientInstance);
        }

        return ingredients;
    }

    private rollbackFetchedIngredients(ingredients: Array<Ingredient>): void {
        for (const ingredient of ingredients)
            ingredient.refillIngredient();
    }

    // template method
    public prepare(): Beverage {
        const ingredients = this.getIngredients();
        const fetchedIngredients = [];
        for (const ing of ingredients) {
            try {
                const fetchedIngredient = ing.fetchIngredient();
                fetchedIngredients.push(fetchedIngredient);
            } catch (e) {
                if (e instanceof LowIngredientException) {
                    e.printErrorMessage();
                } else {
                    this.logger.error(`something went wrong!! ${e.message}`);
                }

                this.rollbackFetchedIngredients(fetchedIngredients);
            }

            return undefined;
        }

        return this;
    }

}