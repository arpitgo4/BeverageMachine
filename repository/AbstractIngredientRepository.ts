
import AbstractRepository from "./AbstractRepository";
import { IngredientModel } from "Interfaces";
import Ingredient from "../implementation/Ingredient";
import Couplings from "../couplings";


export default abstract class AbstractIngredientRepository extends AbstractRepository {


    // synchronized method
    public fetchIngredient(ingredientName: string, requiredQuantity: number): boolean {
        const ingredientModel = <IngredientModel> this.get(ingredientName);
        if (!ingredientModel)
            return false;

        const { quantity: availableQuantity } = ingredientModel;

        if (requiredQuantity <= availableQuantity) {
            ingredientModel.quantity -= requiredQuantity;
            this.put(ingredientName, ingredientModel);
            if (ingredientModel.quantity <= ingredientModel.low_quantity) {
                Couplings.INGREDIENT_INDICATOR.addIngredient(ingredientName);
            }

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

    public refillIngredient(ingredientName: string, refillQuantity: number) {
        const ingredientModel = <IngredientModel> this.get(ingredientName);
        ingredientModel.quantity += refillQuantity;

        if (ingredientModel.low_quantity < ingredientModel.quantity) {
            Couplings.INGREDIENT_INDICATOR.removeIngredient(ingredientName);
        }

        this.put(ingredientName, ingredientModel);
    }

}