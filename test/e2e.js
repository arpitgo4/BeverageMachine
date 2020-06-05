
const chai = require('chai');

const Couplings = require('../app').default;

const { expect } = chai;


describe('Beverage Machine Firmware', () => {

    it('coffee machine instance should not be null', () => {
        const CoffeeMachine = Couplings.BEVERAGE_MACHINE;
        expect(CoffeeMachine).not.null;
    });

    it('should return the list of all beverages', () => {
        const coffeeMachine = Couplings.BEVERAGE_MACHINE;
        const beverages = coffeeMachine.getBeverages();
        // console.log(beverages);
        expect(beverages).not.null;
    });

    // remove this test, hard-coding
    it('total beverages should be 5', () => {
        const coffeeMachine = Couplings.BEVERAGE_MACHINE;
        const beverages = coffeeMachine.getBeverages();
        expect(beverages.length).equal(5);
    });

    it('should create beverage', () => {
        const CoffeeMachine = Couplings.BEVERAGE_MACHINE;
        const beverages = CoffeeMachine.getBeverages();
        const beverage = CoffeeMachine.createBeverage(beverages[0]);
        expect(beverage).not.null;
    });

    it('should create hot milk beverage', () => {
        const CoffeeMachine = Couplings.BEVERAGE_MACHINE;
        const beverageModel = CoffeeMachine.getBeverages()[0];
        const beverage = CoffeeMachine.createBeverage(beverageModel);
        expect(beverage.name).equal(beverageModel.name);
    });
    
});