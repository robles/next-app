import jwt from 'jsonwebtoken';

const authKeyword = 'Bearer';
const jwtSecret = 'mysuperdupersecret';
const lifetime = 60; // in seconds

/**
 * Creates api token
 * @param {any} data
 */
const createApiToken = (data) => {
  const token = jwt.sign(
    data,
    jwtSecret,
    { expiresIn: lifetime },
  );

  return {
    access_token: token,
    expires_in: lifetime,
    token_type: authKeyword,
  };
};

/**
 * Decodes api token
 * @param {String} authorization
 */
const decodeApiToken = (authorization) => {
  const [keyword, token] = authorization.split(' ');

  if (keyword !== authKeyword) {
    return null;
  }

  return jwt.verify(token, jwtSecret);
};

export default {
  createApiToken,
  decodeApiToken,
};
