
const chai = require('chai');

const Coupling = require('../app').default;

const { expect } = chai;


describe('Couplings', () => {
    
    it('coffee machine instance should not be null', () => {
        const CoffeeMachine = Coupling.BEVERAGE_MACHINE;
        expect(CoffeeMachine).not.null;
    });

    it('beverage repository instance should not be null', () => {
        const beverageRepository = Coupling.BEVERAGE_REPOSITORY;
        expect(beverageRepository).not.null;
    });

    it('ingredient repository instance should not be null', () => {
        const ingredientRepository = Coupling.INGREDIENT_REPOSITORY;
        expect(ingredientRepository).not.null;
    });

    it('global logger should not be null', () => {
        const logger = Coupling.GLOBAL_LOGGER;
        expect(logger).not.null;
    });

    it('beverage factory should not be null', () => {
        const beverageFactory = Coupling.BEVERAGE_FACTORY;
        expect(beverageFactory).not.null;
    });

    it('ingredient factory should not be null', () => {
        const ingredientFactory = Coupling.INGREDIENT_FACTORY;
        expect(ingredientFactory).not.null;
    });

});