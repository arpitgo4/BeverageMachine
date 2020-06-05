
/** 
 * Trying to simulate Dependency Injection,
 * without complex DI containers
 */

import logger from './utils/logger';

import CoffeeMachine from './machine/CoffeeMachine';

import BeverageRepository from './repository/BeverageRepository';
import IngredientRepository from './repository/IngredientRepository';

import BeverageFactory from './factory/BeverageFactory';
import IngredientFactory from './factory/IngredientFactory';

import Constants from './utils/constants';



/************** INSTANCES ******************/

const loggerInstance = logger;

const beverageFactoryInstance = new BeverageFactory(loggerInstance);
const ingredientFactoryInstance = new IngredientFactory(loggerInstance);

const beverageRepositoryInstance = new BeverageRepository(Constants.BEVERAGES_REPOSITORY, Constants.BEVERAGES_DATA_FILE_NAME, loggerInstance);
const ingredientRepositoryInstance = new IngredientRepository(Constants.INGREDIENT_REPOSITORY, Constants.INGREDIENTS_DATA_FILE_NAME, loggerInstance);

const coffeeMachineInstance = new CoffeeMachine(beverageFactoryInstance, beverageRepositoryInstance, loggerInstance);

/*********************************************/


export default {
    BEVERAGE_MACHINE: coffeeMachineInstance,
    BEVERAGE_REPOSITORY: beverageRepositoryInstance,
    INGREDIENT_REPOSITORY: ingredientRepositoryInstance,
    GLOBAL_LOGGER: logger,
    BEVERAGE_FACTORY: beverageFactoryInstance,
    INGREDIENT_FACTORY: ingredientFactoryInstance,
}
