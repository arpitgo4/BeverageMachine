

import path from 'path';
import { DataModel } from 'Interfaces';


export default abstract class AbstractRepository {

    private map: Map<string, DataModel>;
    private logger: any;
    private name: string;

    constructor(repositoryName: string, repositoryFileName: string, logger: any) {
        this.name = repositoryName;
        this.logger = logger;
        this.map = new Map<string, DataModel>();
        this.prepareRepository(repositoryFileName);
    }

    protected get(key: string): DataModel {
        return this.map.get(key);
    }

    protected getAll(): Array<DataModel> {
        const result = [];
        for (const value of this.map.values())
            result.push(value);

        return result;
    }

    public put(key: string, obj: DataModel): void {
        this.map.set(key, obj);
    }

    public remove(key: string): void {
        this.map.delete(key);
    }

    private prepareRepository(configFileName: string) {
        this.logger.info(`preparing data repository for ${this.name}`);
        const configFilePath = path.resolve(path.join('config', configFileName));
        const config = require(configFilePath);
        for (const conf of config) {
            const { id } = conf;
            this.map.set(id, conf);
        }
    }

}