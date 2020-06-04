

import path from 'path';

export default abstract class AbstractRepository {

    private map: Map<string, object>;

    constructor(configFileName: string) {
        this.prepareRepository(configFileName);
    }

    protected get(map: Map<string, object>, key: string): object {
        return map.get(key);
    }

    public put(map: Map<string, object>, key: string, obj: object): void {
        map.set(key, obj);
    }

    public remove(map: Map<string, object>, key: string): void {
        map.delete(key);
    }

    public prepareRepository(configFileName: string) {
        const configFilePath = path.resolve(path.join('..', 'config', configFileName));
        const config = require(configFilePath);
        for (const conf of config) {
            const { id } = conf;
            this.map.set(id, conf);
        }
    }

}