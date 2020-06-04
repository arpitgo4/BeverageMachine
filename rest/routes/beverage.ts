
/**
 * Route layer.
 *
 * Route the API calls to controllers and send the
 * response back.
 */

import { Router } from 'express'; 
import { Request, Response, NextFunction } from 'express';

// use DI
import ConcurrentDispatcher from '../../dispatcher/ConcurrentDispatcher';
import Couplings from '../../couplings';


const router = Router();

router.post('/:beverage_id', (req: Request, res: Response, next: NextFunction) => {
    const { beverage_id, } = req.params;
    const dispatcher = new ConcurrentDispatcher(Couplings.BEVERAGE_MACHINE);
    const beverage = dispatcher.dispatch(beverage_id);
    res.json(beverage);
});

export default router;