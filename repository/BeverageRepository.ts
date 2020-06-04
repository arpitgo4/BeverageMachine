
import AbstractRepository from "./AbstractRepository";
import Constants from '../utils/constants';


export default class BeverageRepository extends AbstractRepository {

    constructor() {
        super(Constants.BEVERAGES_DATA_FILE_NAME);
    }

}