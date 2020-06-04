
const chai = require('chai');

const Couplings = require('../couplings').default;

const { expect } = chai;


describe('Beverage Machine Firmware', () => {

    it('coffee machine instance should not be null', () => {
        const CoffeeMachine = Couplings.BEVERAGE_MACHINE;
        expect(CoffeeMachine).not.null;
    });

    it('should create beverage', () => {
        const CoffeeMachine = Couplings.BEVERAGE_MACHINE;
        const beverageId = "Hot Milk";
        const beverage = CoffeeMachine.createBeverage(beverageId);
        expect(beverage).not.null;
    });

    it('should create hot milk beverage', () => {
        const CoffeeMachine = Couplings.BEVERAGE_MACHINE;
        const beverageId = "Hot Milk";
        const beverage = CoffeeMachine.createBeverage(beverageId);
        expect(beverage.name).equal(beverageId);
    });
    
});