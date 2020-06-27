import { check, validationResult } from 'express-validator';

export default [
  // username is required
  check('username').notEmpty(),
  // password is required
  check('password').notEmpty(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.statusCode = 422;
      res.json({ errors: errors.array() });
    } else {
      next();
    }
  },
];
