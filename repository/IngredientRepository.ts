
import AbstractRepository from "./AbstractRepository";
import Constants from '../utils/constants';


export default class IngredientRepository extends AbstractRepository {

    constructor() {
        super(Constants.INGREDIENTS_DATA_FILE_NAME);
    }

}