
import AbstractRepository from "./AbstractRepository";
import { IngredientModel } from "Interfaces";
import Ingredient from "../implementation/Ingredient";


export default abstract class AbstractIngredientRepository extends AbstractRepository {


    // synchronized method
    public fetchIngredient(ingredientName: string, requiredQuantity: number): boolean {
        const ingredientModel = <IngredientModel> this.get(ingredientName);
        if (!ingredientModel)
            return false;

        const { quantity: availableQuantity } = ingredientModel;

        if (requiredQuantity <= availableQuantity) {
            ingredientModel.quantity = availableQuantity - requiredQuantity;
            this.put(ingredientName, ingredientModel);

            // TODO: check for low qunaitity and add indication

            return true;
        }

        return false;
    }

    public fillIngredient(ingredientInstance: Ingredient): void {
        const ingredientModel = <IngredientModel> this.get(ingredientInstance.getId());
        const { quantity: availableQuantity } = ingredientModel;
        const refillQuantity = ingredientInstance.getQuantity();
        ingredientModel.quantity = availableQuantity + refillQuantity;
        this.put(ingredientInstance.getId(), ingredientModel);
    }

}