import nextConnect from 'next-connect';

import { isValidApiToken } from '../../lib/middlewares';

const handler = nextConnect();

handler.get([
  isValidApiToken,
  (req, res) => {
    res.statusCode = 200;
    res.json({ msg: 'Pong' });
  },
]);

export default handler;
