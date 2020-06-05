
import { IngredientModel } from "Interfaces";
import AbstractIngredientRepository from "../repository/AbstractIngredientRepository";
import Couplings from "../couplings";
import LowIngredientException from "exceptions/LowIngredientException";


export default class Ingredient {
    
    private model: IngredientModel;
    private ingredientRepository: AbstractIngredientRepository;

    constructor(ingredientModel: IngredientModel) {
        this.model = ingredientModel;
        this.ingredientRepository = Couplings.INGREDIENT_REPOSITORY;    // dependency injection
    }

    public fetchIngredient(): Ingredient {
        const fetchIngredient = this.ingredientRepository.fetchIngredient(this);
        if (!fetchIngredient)
            throw new LowIngredientException(`${this.getId()}'s quantity is low!!`);

        return fetchIngredient;
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