
import Beverage from "../implementation/Beverage";


export default abstract class AbstractBeverageMachine {

    public createBeverage(beverageId: string): Beverage {
        return new Beverage();
    }

    public getBeverages(): Array<Beverage> {
        return [];
    }
    
}