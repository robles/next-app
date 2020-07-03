import bearerAuth from '../../../lib/bearerAuth';

const users = [
  {
    username: 'robles.dave@gmail.com',
    firstName: 'David',
    lastName: 'Robles',
    password: 'password',
  }, {
    username: 'jim@twocoastsenterprises.com',
    firstName: 'Jim',
    lastName: 'Lipo',
    password: 'password',
  }, {
    username: 'alipo@crnrstone.com',
    firstName: 'Andrea',
    lastName: 'Lipo',
    password: 'password',
  },
];

const login = async (req, res) => {
  const user = users.find(
    (u) => u.username === req.body.username && u.password === req.body.password,
  );

  if (user) {
    try {
      // TODO: replace this with call to authentication api
      const session = {
        claims: {
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        token: bearerAuth.createApiToken({ username: user.username }),
      };

      req.session.set('session', session);
      await req.session.save();

      res.statusCode = 200;
      res.json({
        isLoggedIn: true,
        claims: session.claims,
      });
    } catch (error) {
      // const { response: fetchResponse } = error;
      // res.statusCode = fetchResponse?.status || 500;
      res.statusCode = 500;
      res.json(error.message);
    }
  } else {
    res.statusCode = 200;
    res.json({
      isLoggedIn: false,
      message: 'Invalid Credentials',
    });
  }
};

export default { login };
