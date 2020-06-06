
import Couplings from './couplings';

import logger from './utils/logger';

logger.info('Booting Beverage Machine');


const main = () => {
    const CoffeeMachine = Couplings.BEVERAGE_MACHINE;
    const ingredientRepository = Couplings.INGREDIENT_REPOSITORY;
    const beverages = CoffeeMachine.getBeverages();
    for (const beverage of beverages) {
        const bev = CoffeeMachine.createBeverage(beverage);
        if (!bev)
            logger.error(`${bev.getId()} can't be prepared!`);
        else logger.info(`${bev.getId()} prepared!`);
    }

    // logger.info(ingredientRepository.getAll());
};

main();



export default Couplings;