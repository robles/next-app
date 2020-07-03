import nextConnect from 'next-connect';

import { /* checkBasicAuth, */ withSession } from '../../../lib/middlewares';
// import basicAuthValidator from '../../../validators/basicAuthValidator';
import loginController from './loginController';

const handler = nextConnect();

handler.post([
  withSession,
  // checkBasicAuth,
  // ...basicAuthValidator,
  loginController.login,
]);

export default handler;
