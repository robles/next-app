import bearerAuth from '../../../lib/bearerAuth';

const login = (req, res) => {
  const token = bearerAuth.createApiToken({ username: 'Mr Perfect' });

  res.statusCode = 200;
  res.json(token);
};

export default { login };
