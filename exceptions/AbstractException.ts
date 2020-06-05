

export default abstract class AbstractException extends Error {

    protected logger: any

    constructor(message: string, loggerInstance: any) {
        super(message);
        this.logger = loggerInstance;

        Object.setPrototypeOf(this, AbstractException.prototype);
    }

    printErrorMessage() {
        return this.logger.error(this.message);
    }
}