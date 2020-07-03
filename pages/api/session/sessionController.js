// import bearerAuth from '../../../lib/bearerAuth';

const getSession = async (req, res) => {
  const session = req.session.get('session');

  res.statusCode = 200;

  if (session) {
    // const session = bearerAuth.decodeApiToken(`${token.token_type} ${token.access_token}`);

    res.json({
      isLoggedIn: true,
      claims: session.claims,
    });
  } else {
    res.json({ isLoggedIn: false });
  }
};

export default { getSession };
