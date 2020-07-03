import nextConnect from 'next-connect';

import { withSession } from '../../../lib/middlewares';
import logoutController from './logoutController';

const handler = nextConnect();

handler.get([
  withSession,
  logoutController.logout,
]);

export default handler;
