
import AbstractRepository from "./AbstractRepository";
import { BeverageModel } from "Interfaces";


export default abstract class AbstractBeverageRepository extends AbstractRepository {

    public getBeverageById(beverageId: string): BeverageModel {
        return <BeverageModel> this.get(beverageId);
    }

    public getAllBeverages(): Array<BeverageModel> {
        return <Array<BeverageModel>> this.getAll();
    }

}