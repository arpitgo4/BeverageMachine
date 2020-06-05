

import Coupling from '../app';

export default abstract class AbstractException extends Error {

    protected logger: any

    constructor(message: string) {
        super(message);
        this.logger = Coupling.GLOBAL_LOGGER;

        Object.setPrototypeOf(this, AbstractException.prototype);
    }

    printErrorMessage() {
        return this.logger.error(this.message);
    }
}