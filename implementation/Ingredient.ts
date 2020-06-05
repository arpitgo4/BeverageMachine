
import { IngredientModel } from "Interfaces";
import AbstractIngredientRepository from "../repository/AbstractIngredientRepository";
import Coupling from "../app";
import LowIngredientException from "../exceptions/LowIngredientException";


export default class Ingredient {
    
    private model: IngredientModel;
    private ingredientRepository: AbstractIngredientRepository;

    constructor(ingredientModel: IngredientModel) {
        this.model = ingredientModel;
        this.ingredientRepository = Coupling.INGREDIENT_REPOSITORY;    // dependency injection
    }

    public fetchIngredient(): boolean {
        const fetchedIngredient = this.ingredientRepository.fetchIngredient(this.getId(), this.getQuantity());
        if (!fetchedIngredient)
            throw new LowIngredientException(`${this.getId()}'s quantity is low!!`);

        return true;
    }

    public refillIngredient(): void {
        this.ingredientRepository.fillIngredient(this);
    }

    public getId() {
        return this.model.id;
    }

    public getQuantity() {
        return this.model.quantity;
    }

}