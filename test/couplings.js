
const chai = require('chai');

const Couplings = require('../app').default;

const { expect } = chai;


describe('Couplings', () => {
    
    it('coffee machine instance should not be null', () => {
        const CoffeeMachine = Couplings.BEVERAGE_MACHINE;
        expect(CoffeeMachine).not.null;
    });

    it('beverage repository instance should not be null', () => {
        const beverageRepository = Couplings.BEVERAGE_REPOSITORY;
        // console.log(beverageRepository);
        expect(beverageRepository).not.null;
    });

    it('ingredient repository instance should not be null', () => {
        const ingredientRepository = Couplings.INGREDIENT_REPOSITORY;
        // console.log(ingredientRepository);
        expect(ingredientRepository).not.null;
    });
    
});