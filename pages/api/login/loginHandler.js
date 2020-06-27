import nextConnect from 'next-connect';

import { checkBasicAuth } from '../../../lib/middlewares';
import basicAuthValidator from '../../../validators/basicAuthValidator';
import loginController from './loginController';

const handler = nextConnect();

handler.post([
  checkBasicAuth,
  ...basicAuthValidator,
  loginController.login,
]);

export default handler;
