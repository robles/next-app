import nextConnect from 'next-connect';

import { withSession } from '../../../lib/middlewares';
import sessionController from './sessionController';

const handler = nextConnect();

handler.get([
  withSession,
  sessionController.getSession,
]);

export default handler;
