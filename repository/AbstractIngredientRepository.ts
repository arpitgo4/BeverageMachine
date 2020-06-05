
import AbstractRepository from "./AbstractRepository";
import { IngredientModel } from "Interfaces";
import Ingredient from "../implementation/Ingredient";


export default abstract class AbstractIngredientRepository extends AbstractRepository {


    // synchronized method
    public fetchIngredient(ingredientInstance: Ingredient): Ingredient {
        const ingredientModel = <IngredientModel> this.get(ingredientInstance.getId());
        const { quantity: availableQuantity } = ingredientModel;
        const requiredQuantity = ingredientInstance.getQuantity();
        if (requiredQuantity <= availableQuantity) {
            ingredientModel.quantity = availableQuantity - requiredQuantity;
            this.put(ingredientInstance.getId(), ingredientModel);

            // TODO: check for low qunaitity and add indication

            return ingredientInstance;
        }

        return undefined;
    }

    public fillIngredient(ingredientInstance: Ingredient): void {
        const ingredientModel = <IngredientModel> this.get(ingredientInstance.getId());
        const { quantity: availableQuantity } = ingredientModel;
        const refillQuantity = ingredientInstance.getQuantity();
        ingredientModel.quantity = availableQuantity + refillQuantity;
        this.put(ingredientInstance.getId(), ingredientModel);
    }

}