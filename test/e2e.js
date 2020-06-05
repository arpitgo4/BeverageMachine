
const chai = require('chai');

const { expect } = chai;


describe('Beverage Machine Firmware', () => {

    it('coffee machine instance should not be null', () => {
        const Couplings = require('../app').default;
        const CoffeeMachine = Couplings.BEVERAGE_MACHINE;
        expect(CoffeeMachine).not.null;
    });

    it('should return the list of all beverages', () => {
        const Couplings = require('../app').default;
        const coffeeMachine = Couplings.BEVERAGE_MACHINE;
        const beverages = coffeeMachine.getBeverages();
        expect(beverages).not.null;
    });

    it('should create beverage', () => {
        const Couplings = require('../app').default;
        const CoffeeMachine = Couplings.BEVERAGE_MACHINE;
        const beverages = CoffeeMachine.getBeverages();
        const beverage = CoffeeMachine.createBeverage(beverages[0]);
        expect(beverage).not.null;
    });

    it('should create Ginger Tea beverage', () => {
        const Couplings = require('../app').default;
        const CoffeeMachine = Couplings.BEVERAGE_MACHINE;
        const beverageModel = CoffeeMachine.getBeverages()[0];
        const beverage = CoffeeMachine.createBeverage(beverageModel);
        expect(beverage.name).equal(beverageModel.name);
    });

    it('should not create beverage when ingredient quanity is low', () => {
        const Couplings = require('../app').default;
        const CoffeeMachine = Couplings.BEVERAGE_MACHINE;
        const customBeverageModel = {
            id: "Ginger Tea", 
            ingredients_list: [
                { "id": "Hot Milk", "quantity": 10 },
                { "id": "Hot Water", "quantity": 100000 },
            ],
        };
        const beverage = CoffeeMachine.createBeverage(customBeverageModel);
        expect(beverage).equal(undefined);
    });

    it('should reduce ingredients by beverage\'s requirement', () => {
        const Couplings = require('../app').default;
        const CoffeeMachine = Couplings.BEVERAGE_MACHINE;
        const IngredientRepo = Couplings.INGREDIENT_REPOSITORY;
        
        const beverageModel = CoffeeMachine.getBeverages()[0];

        const firstIng = beverageModel.ingredients_list[0];
        const ingQtyBefore = IngredientRepo.get(firstIng.id).quantity; 
        
        CoffeeMachine.createBeverage(beverageModel);
    
        const ingQtyAfter = IngredientRepo.get(firstIng.id).quantity; 
        expect(ingQtyBefore).not.equal(ingQtyAfter);
    });

    it('should refill the ingredients if beverage can\'t be prepared', () => {
        const Couplings = require('../app').default;
        const CoffeeMachine = Couplings.BEVERAGE_MACHINE;
        const IngredientRepo = Couplings.INGREDIENT_REPOSITORY;
        const customBeverageModel = {
            id: "Ginger Tea", 
            ingredients_list: [
                { "id": "Hot Milk", "quantity": 10 },
                { "id": "Hot Water", "quantity": 1000 },
            ],
        };
        const milkQtyBefore = IngredientRepo.get('Hot Milk').quantity; 
        const beverage = CoffeeMachine.createBeverage(customBeverageModel);
        const milkQtyAfter = IngredientRepo.get('Hot Milk').quantity; 
        expect(milkQtyBefore).equal(milkQtyAfter);
    });

    it('should refill ingredient in Ingredient repository', () => {
        const Couplings = require('../app').default;
        const CoffeeMachine = Couplings.BEVERAGE_MACHINE;
        const IngredientRepository = Couplings.INGREDIENT_REPOSITORY;

        const oldQty = IngredientRepository.get('Water').quantity;
        const CHANGE_QTY = 100;
        CoffeeMachine.refillIngredient('Water', CHANGE_QTY);
        const newQty = IngredientRepository.get('Water').quantity;
        const DIFF = newQty - oldQty;
        expect(DIFF).equal(CHANGE_QTY);
    });

    // adding 100 in each ingredient's qty before all tests
    before(() => {
        const Couplings = require('../app').default;
        const CoffeeMachine = Couplings.BEVERAGE_MACHINE;
        const IngredientRepository = Couplings.INGREDIENT_REPOSITORY;
        const ingredients = IngredientRepository.getAll();
        for (const ingModel of ingredients) 
            CoffeeMachine.refillIngredient(ingModel.id, 100);
    });
    
});