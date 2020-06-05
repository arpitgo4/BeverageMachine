
import AbstractFactory from "./AbstractFactory";
import Ingredient from "../implementation/Ingredient";
import { IngredientModel } from "Interfaces";


export default class IngredientFactory extends AbstractFactory {

    public createInstance(model: IngredientModel): Ingredient {
        return new Ingredient(<IngredientModel> model);
    }
    
}