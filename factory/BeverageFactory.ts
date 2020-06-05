
import Beverage from "../implementation/Beverage";
import { BeverageModel } from "Interfaces";
import AbstractFactory from "./AbstractFactory";


export default class BeverageFactory extends AbstractFactory {
    
    public createInstance(beverageModel: BeverageModel): Beverage {
        return new Beverage(<BeverageModel> beverageModel, this.logger);
    }

}