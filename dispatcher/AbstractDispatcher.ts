
import AbstractBeverageMachine from '../machine/AbstractBeverageMachine';
import Beverage from '../implementation/Beverage';

export default abstract class AbstractDispatcher {

    protected beverageMachine: AbstractBeverageMachine;

    constructor(beverageMachine: AbstractBeverageMachine) {
        this.beverageMachine = beverageMachine;
    }

    public abstract dispatch(beverageId: string): Beverage;

}