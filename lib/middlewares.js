import { applySession } from 'next-iron-session';
import basicAuth from './basicAuth';
import bearerAuth from './bearerAuth';

/**
 * Decodes basic credentials
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 * @param {function} next
 */
export function checkBasicAuth(req, res, next) {
  const { authorization } = req.headers;

  if (authorization) {
    req.body = basicAuth.decode(authorization);
    next();
  } else {
    res.statusCode = 200;
    res.json({ success: false, msg: 'Invalid Authorization' });
  }
}

/**
 * Checks if api token is valid
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 * @param {function} next
 */
export function isValidApiToken(req, res, next) {
  // get token from request header Authorization
  const { authorization } = req.headers;

  // Token verification
  try {
    const decoded = bearerAuth.decodeApiToken(authorization);
    console.log('decoded', decoded);
    next();
  } catch (err) {
    // Catch the JWT Expired or Invalid errors
    res.statusCode = 401;
    res.json({ msg: err.message });
  }
}

export function checkLogin(req, res, next) {
  next();
}

export async function withSession(req, res, next) {
  await applySession(req, res, {
    password: 'secretsecretsecretsecretsecretsecret', // process.env.SECRET_COOKIE_PASSWORD,
    cookieName: 'next-app/with-iron-session',
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === 'production',
    },
  });

  next();
}
